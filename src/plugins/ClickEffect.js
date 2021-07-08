const clickEffect = function () {
  const gio = this;
  const randomString = (n) => {
    const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let s = '';
    for (let i = 0; i < n; i++) {
      s += t.charAt(Math.floor(Math.random() * t.length));
    }
    return s;
  };
  function setInputsValue() {
    const input1 = document.getElementById('input-1');
    const input2 = document.getElementById('input-2');
    input1.value = randomString(8);
    input2.value = randomString(8);
  }
  function destroy() {
    gio.off('click', setInputsValue);
  }

  gio.on('click', setInputsValue);
  gio.once('destroy', destroy);
};

export default {
  name: 'clickEffect',
  method: clickEffect
};
