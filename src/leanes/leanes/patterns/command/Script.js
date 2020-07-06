import type { NotificationInterface } from '../../../patternes';
import type { ScriptInterface } from '../../interfaces/ScriptInterface';

export default (Module) => {
  const {
    JOB_RESULT,
    SimpleCommand,
    ConfigurableMixin,
    initialize, module, meta, method, nameBy, mixin,
    Utils: { _ }
  } = Module.NS;


  @initialize
  @module(Module)
  @mixin(ConfigurableMixin)
  class Script extends SimpleCommand implements ScriptInterface {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method async body(data: ?any): Promise<?any> { return; }

    @method async execute(aoNotification: NotificationInterface): void {
      const voBody = aoNotification.getBody();
      const reverse = aoNotification.getType();
      let voResult = null;
      try {
        const result = await this.body(voBody);
        voResult = { result };
      } catch (error) {
        error.message = 'ERROR in Script::execute ' + error.message;
        console.error(error);
        voResult = { error };
      }
      this.send(JOB_RESULT, voResult, reverse);
    }
  }
}