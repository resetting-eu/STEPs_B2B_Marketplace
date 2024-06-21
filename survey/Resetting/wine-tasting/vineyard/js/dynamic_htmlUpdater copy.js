// add event listener to get users input on html on all changable elements
var delegate = (selector) => (cb) => (e) => e.target.matches(selector) && cb(e);

var inputTextDelegate = delegate('input[type=text]');
document.addEventListener('change', inputTextDelegate((e) => {e.target.setAttribute('value',e.target.value)}));//; formData_updater(e.target);}));

var inputNumberDelegate = delegate('input[type=number]');
document.addEventListener('change', inputNumberDelegate((e) => {e.target.setAttribute('value',e.target.value)}));//; formData_updater(e.target);}));

var inputMonthDelegate = delegate('input[type=month]');
document.addEventListener('change', inputMonthDelegate((e) => {e.target.setAttribute('value',e.target.value)}));//; formData_updater(e.target);}));

var inputRadioDelegate = delegate('input[type=radio]');
document.addEventListener('change', inputRadioDelegate((e) => {
//   formData_updater(e.target);
  for (var rad of document.querySelectorAll(`input[name="${e.target.name}"]`)) {
    console.log(rad === e.target)
    rad.checked = (rad === e.target);
          rad.setAttribute('checked', rad === e.target);
  }
}));

var inputCheckboxDelegate = delegate('input[type=checkbox]');
document.addEventListener('change', inputCheckboxDelegate((e) => {

//   formData_updater(e.target);

  var nodeList = document.querySelectorAll(`input[name="${e.target.name}"]:checked`);
  var idArray = Array.from(nodeList, node => node.id);

  for (var rad of document.querySelectorAll(`input[name="${e.target.name}"]`)) {
    console.log(idArray.includes(rad.id))
    rad.checked = (idArray.includes(rad.id));
          rad.setAttribute('checked', idArray.includes(rad.id));
  }
}));

var textAreaDelegate = delegate('textarea');
document.addEventListener('change', textAreaDelegate((e) => {e.target.setAttribute('placeholder',e.target.value)}));//; formData_updater(e.target);}));

var selectDelegate = delegate('select');
document.addEventListener('change', selectDelegate((e) => {

//   formData_updater(e.target);

  
  // For a single select, you can simply set the value attribute
  e.target.setAttribute('value', e.target.value);

  // For a multiple select, you need to iterate over the options
  for (let option of e.target.options) {
    if (option.selected) {
      option.setAttribute('selected', true);
    } else {
      option.removeAttribute('selected');
    }
  }
}));