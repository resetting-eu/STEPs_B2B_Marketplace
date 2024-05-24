// add event listener to get users input on html on all changable elements
var vineyard_delegate = (selector) => (cb) => (e) => e.target.matches(selector) && cb(e);

var inputText_vineyard_Delegate = vineyard_delegate('input[type=text]');
document.addEventListener('change', inputText_vineyard_Delegate((e) => {e.target.setAttribute('value',e.target.value)}));//; formData_updater(e.target);}));

var inputNumber_vineyard_Delegate = vineyard_delegate('input[type=number]');
document.addEventListener('change', inputNumber_vineyard_Delegate((e) => {e.target.setAttribute('value',e.target.value)}));//; formData_updater(e.target);}));

var inputMonth_vineyard_Delegate = vineyard_delegate('input[type=month]');
document.addEventListener('change', inputMonth_vineyard_Delegate((e) => {e.target.setAttribute('value',e.target.value)}));//; formData_updater(e.target);}));

var inputRadio_vineyard_Delegate = vineyard_delegate('input[type=radio]');
document.addEventListener('change', inputRadio_vineyard_Delegate((e) => {
//   formData_updater(e.target);
  for (var rad of document.querySelectorAll(`input[name="${e.target.name}"]`)) {
    console.log(rad === e.target)
    rad.checked = (rad === e.target);
          rad.setAttribute('checked', rad === e.target);
  }
}));

var inputCheckbox_vineyard_Delegate = vineyard_delegate('input[type=checkbox]');
document.addEventListener('change', inputCheckbox_vineyard_Delegate((e) => {

//   formData_updater(e.target);

  var nodeList = document.querySelectorAll(`input[name="${e.target.name}"]:checked`);
  var idArray = Array.from(nodeList, node => node.id);

  for (var rad of document.querySelectorAll(`input[name="${e.target.name}"]`)) {
    console.log(idArray.includes(rad.id))
    rad.checked = (idArray.includes(rad.id));
          rad.setAttribute('checked', idArray.includes(rad.id));
  }
}));

var textArea_vineyard_Delegate = vineyard_delegate('textarea');
document.addEventListener('change', textArea_vineyard_Delegate((e) => {e.target.setAttribute('placeholder',e.target.value)}));//; formData_updater(e.target);}));

var select_vineyard_Delegate = vineyard_delegate('select');
document.addEventListener('change', select_vineyard_Delegate((e) => {

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