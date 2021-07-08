import EmitPool from './EmitPool.js';
import plugins from './plugins.js';
import { reportClick, reportChange } from './upload.js';

class GrowingIO extends EmitPool {
  constructor() {
    super();
    this.vdsConfig = {};
    this.plugins = {};
  }

  init(options) {
    console.log('GrowingIO SDK is being initialized!');
    this.vdsConfig = options;
    // Do somthing else
    this.installAll(plugins);
    console.log(this);
  }

  onClick() {
    console.log('触发 Click 事件');
    reportClick();
    this.emit('click');
  }

  onChange() {
    console.log('触发 Change 事件');
    reportChange();
    this.emit('change');
  }

  install(pluginInst) {
    if (!this.plugins[pluginInst.name] && pluginInst.method) {
      this.plugins[pluginInst.name] = pluginInst.method;
      this.plugins[pluginInst.name].call(this);
    }
  }

  installAll(list) {
    list.forEach((o) => {
      this.install(o);
    });
  }
}

export default GrowingIO;
