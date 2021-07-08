import GrowingIO from './growingIO';

let gio;

(function () {
  const growingio = new GrowingIO();
  gio = function () {
    const name = arguments[0];
    if (name === 'init') {
      growingio.projectId = arguments[1];
      growingio.init(arguments[2]);
    } else if (growingio[name]) {
      growingio[name](arguments[1]);
    }
  };
})();
window.gio = gio;

export default gio;
