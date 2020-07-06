import type { CollectionInterface } from '../../interfaces/CollectionInterface';
import type { RecordInterface } from '../../interfaces/RecordInterface';
import type { NotificationInterface } from '../../../patternes';

export default (Module) => {
  const {
    APPLICATION_MEDIATOR, STOPPED_MIGRATE, MIGRATIONS,
    SimpleCommand,
    ConfigurableMixin,
    initialize, module, meta, property, method, nameBy, mixin,
    Utils: { _, inflect }
  } = Module.NS;


  @initialize
  @module(Module)
  @mixin(ConfigurableMixin)
  class MigrateCommand<
    D = RecordInterface
  > extends SimpleCommand {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property migrationsCollection: CollectionInterface<D> = null;

    @property get migrationNames(): string[] {
      const app = this.facade
        .getMediator(APPLICATION_MEDIATOR)
        .getViewComponent();
      return app.Module.NS.MIGRATION_NAMES || [];
    }

    @property get migrationsDir(): string {
      return `${this.configs.ROOT}/migrations`;
    }

    @method initializeNotifier(...args) {
      super.initializeNotifier(...args);
      this.migrationsCollection = this.facade.getProxy(MIGRATIONS);
    }

    @method async execute(aoNotification: NotificationInterface) {
      const voBody = aoNotification.getBody();
      const vsType = aoNotification.getType();
      const error = await this.migrate(voBody || {});
      this.send(STOPPED_MIGRATE, { error }, vsType);
    }

    @method async migrate(options: {|until: ?string|}): ?Error {
      let voMigration = null;
      let err = null;
      const app = this.facade
        .getMediator(APPLICATION_MEDIATOR)
        .getViewComponent();
      for (const migrationName of this.migrationNames) {
        if (!(await this.migrationsCollection.includes(migrationName))) {
          const id = String(migrationName);
          const clearedMigrationName = migrationName.replace(/^\d{14}[_]/, '');
          const migrationClassName = inflect.camelize(clearedMigrationName);
          const vcMigration = app.Module.NS[migrationClassName];
          const type = `${app.Module.name}::${migrationClassName}`;
          try {
            voMigration = (await this.migrationsCollection.find(id));
            if (voMigration == null) {
              voMigration = vcMigration.new({id, type}, this.migrationsCollection);
              await voMigration.migrate(Module.NS.Migration.UP);
              await voMigration.save();
            }
          } catch (error) {
            err = error;
            const msg = `!!! Error in migration ${migrationName}`;
            console.error(msg, error.message, error.stack);
            break;
          }
        }
        if (((options != null ? options.until : undefined) != null) && options.until === migrationName) {
          break;
        }
      }
      return err;
    }
  }
}