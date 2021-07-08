const changeEffect = function () {
  const gio = this;
  function setAnOtherInputValue() {
    const input1 = document.getElementById('input-1');
    const input2 = document.getElementById('input-2');
    input2.value = input1.value;
  }
  function destroy() {
    gio.off('change', setAnOtherInputValue);
  }

  gio.on('change', setAnOtherInputValue);
  gio.once('destroy', destroy);
};

export default {
  name: 'changeEffect',
  method: changeEffect
};
