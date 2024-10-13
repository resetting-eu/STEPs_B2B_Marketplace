       $(document).ready(function () {
                $('.popover-toggle').popover({
                    html: true,
                });
            });
            $(document).on("click", ".popover .close", function () {
                $(this).parents(".popover").popover('hide');
            });
            /* --------------------------------- handles the multiple press fractions selects --------------------------------- */
            document.body.addEventListener('change', function(e) {
              if (e.target.classList.contains('winery_PressFractions_FractionsAllowed')) {
                var selectedItems = e.target.selectedOptions;
                var array = Array.from(selectedItems).map(option => option.text);
                selectedItemsText = array.join(' & ')
                document.getElementById(e.target.id + '_output').value = selectedItemsText;
              }
            });
            /* --------------------------------- /handles the multiple press fractions selects --------------------------------- */
            /* --------------------------------- handles the vertical menu tabs (full document) --------------------------------- */
            
            function openDivVertical(e, answerName) {
              e.preventDefault();
              
             // console.log('e.parentNode.parentNode.parentNode', e.srcElement.parentNode.parentNode.parentNode.id)              
              var i, tabcontent, tablinks;
              tabcontent = e.target.parentNode.parentNode.getElementsByClassName("tabcontentVertical");
              for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
              }
              tablinks = e.target.parentNode.parentNode.getElementsByClassName("tablinksVertical");
              for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
              }
              // document.getElementById(answerName).style.display = "inline-flex";//"block";
              document.getElementById(answerName).style = "display: block;justify-content: space-evenly; overflow: visible;";
              e.currentTarget.className += " active";
            }
            // if (document.getElementById("defaultOpenVertical")) {
            //   // Get the element with id="defaultOpen" and click on it
            //   document.getElementById("defaultOpenVertical").click();
            // }

            /* --------------------------------- /handles the vertical menu tabs --------------------------------- */
            /* ---------------------- handles the menu tabs ----------------------*/
            function openDiv(e, answerName) {
              e.preventDefault();
              var i, tabcontent, tablinks;
              tabcontent = document.getElementsByClassName("tabcontent");
              for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
              }
              tablinks = document.getElementsByClassName("tablinks");
              for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
              }
              document.getElementById(answerName).style.display = "block";
              // set the overflow to auto
              document.getElementById(answerName).style.overflow = "visible";
              // set the padding to 0px
              document.getElementById(answerName).style.padding = "0px";
              // set the width to fit-content
              document.getElementById(answerName).style.width = "fit-content";
              // set the height to fit-content
              document.getElementById(answerName).style.height = "fit-content";
              e.currentTarget.className += " active";
            }

            if (document.getElementById("defaultOpen")) {
            // Get the element with id="defaultOpen" and click on it
            document.getElementById("defaultOpen").click();
            }
            /* ---------------------- /handles the menu tabs ----------------------*/
            /* -------------------------------------- mech vs man destemming -------------------------------------- */
            document.body.addEventListener('change', function(e) {
                if (e.target.classList.contains('destemming_Mech_Man')) {
                      var winery_destemming_Mech = document.getElementById(e.target.id.split('_').slice(0, -1).join('_') + '_Mech').value;
                      document.getElementById(e.target.id.split('_').slice(0, -1).join('_') + '_Mech_container').hidden = winery_destemming_Mech == 0;
                      var winery_destemming_Man = document.getElementById(e.target.id.split('_').slice(0, -1).join('_') + '_Man').value;
                      document.getElementById(e.target.id.split('_').slice(0, -1).join('_') + '_Man_container').hidden = winery_destemming_Man == 0;
                }
            });
  
            /* -------------------------------------- /mech vs man destemming -------------------------------------- */
            /* -------------------------------------- incorporated vs externalised compost -------------------------------------- */
            document.body.addEventListener('change', function(e) {
                if (e.target.classList.contains('fate_Composting_output_IncorporatedExternalised')) {
    
                      var fate_Composting_output_Incorporated = document.getElementById(e.target.id.split('_').slice(0, -1).join('_') + '_Incorporated').value;
                      document.getElementById(e.target.id.split('_').slice(0, -1).join('_') + '_Incorporated_container').hidden = fate_Composting_output_Incorporated == 0;
                      var fate_Composting_output_Externalised = document.getElementById(e.target.id.split('_').slice(0, -1).join('_') + '_Externalised').value;
                      document.getElementById(e.target.id.split('_').slice(0, -1).join('_') + '_Externalised_container').hidden = fate_Composting_output_Externalised == 0;
                }
            });

            /* --------------------- /External providers' table builder and handler --------------------- */
    
    
    
          /* --------------------------------- choose year --------------------------------- */
          document.addEventListener('DOMContentLoaded', function () {
    
            //Get the Current Year
            var currentYear = new Date().getFullYear();
    
            //Using `Array.from(): a more concise way, using `Array.from()` to create an array of years:
    
            var yearOptions = Array.from(
                { length: currentYear - 2010 + 1 },
                (_, i) => 2010 + i
            );
    
            // Get the year select elements for multiple elements sharing common class
              Array.from(document.getElementsByClassName("year_selectors")).forEach(function(item) {
                // Populate the options
                yearOptions.forEach((year) => {
                    var option = document.createElement('option');
                    option.value = year;
                    option.textContent = year;
                    item.appendChild(option);
                });
                item.value = null
              });
    
          });
          /* --------------------------------- /choose year --------------------------------- */
    
          /* --------------------------------- hide element on select value --------------------------------- */
          function selectOption_hideElement(callerElement, hiddenDiv, hiddenValArray){
         // console.log('hiddenValArray',hiddenValArray)
         // console.log('callerElement.value',callerElement.value)
            if (hiddenValArray.includes(callerElement.value)) {
                hiddenDiv.hidden = true;
            } else {
                hiddenDiv.hidden = false;
            }
          }
          function selectOption_showElement(callerElement, hiddenDiv, hiddenValArray){
         // console.log('hiddenValArray',hiddenValArray)
         // console.log('callerElement.value',callerElement.value)
            if (hiddenValArray.includes(callerElement.value)) {
                hiddenDiv.hidden = false;
            } else {
                hiddenDiv.hidden = true;
            }
          }
    
          function showElementAndHideRemainingElementsOnSelect (selectElement) {
            var selectOption = null;
            if (selectElement.value.includes('_')) {
              selectOption = selectElement.id + '_' + selectElement.value.split('_')[0];
            } else if (!selectElement.value.includes('_')) {
              selectOption = selectElement.id + '_' + selectElement.value;
            }
    
            for (var option of selectElement.options) {
              var listOption = null;
              if (option.value.includes('_')) {
                listOption = selectElement.id + '_' + option.value.split('_')[0];
              } else if (!option.value.includes('_')) {
                listOption = selectElement.id + '_' + option.value;
              }
             // console.log(listOption)
              document.getElementById(listOption).hidden = !(listOption == selectOption);
            }
    
            if (selectElement.value.includes('_')) {
              if (selectElement.value.split('_')[0] == 'Others'){
                document.getElementById(selectElement.id + '_other').hidden = false;
              }    
            }
          }      
          /* --------------------------------- /hide element on select value --------------------------------- */
    
    
            /* --------------------- get Other select option --------------------- */
            // newOpt - is the select element, propmtElement - the item type to ask in the prompt, checkGroup (bool) true - as groups / false - simple option list
            function getOthersSelectOpt(newOpt, propmtElement, checkGroup) {
              if (newOpt.value == 'other') {
                newOpt_input = window.prompt(`Please input the ${propmtElement}:`);//, 'defaultText')
                //console.log('newOpt_input',newOpt_input)
                if(newOpt_input === null){
                  newOpt.selectedIndex = "0";
                  return;
                  }
                if (newOpt_input != '') {
                  newOpt_input_value = newOpt_input;//.split(' ').join('_');
    
                  var opt = document.createElement('option');
                  opt.value = newOpt_input_value;
                  opt.innerHTML = newOpt_input;
                  
                  
                  if (!checkGroup) {
                    newOpt.insertBefore(opt, newOpt.lastChild.previousSibling);        
                  } else if (checkGroup) {
                      // Find the option group labeled 'Others'
                      var othersGroup = newOpt.querySelector('optgroup[label="Others"]');
    
                      // Find the existing 'other' option within the group
                      var otherOption = othersGroup.querySelector('option[value="other"]');
    
                      // Insert the new option before the 'other' option
                      othersGroup.insertBefore(opt, otherOption);
                  }
    
                  newOpt.value = newOpt_input_value;
                } else {
                  // Handle the case when input is empty
                  getOthersSelectOpt(newOpt, propmtElement, checkGroup)
              }
    
            } else if(newOpt.value.includes('_other')) {//if(newOpt.value.split('_')[newOpt.value.split('_').length - 1] == 'other') {
                newOpt_input = window.prompt(`Please input the ${propmtElement}:`);//, 'defaultText')
                //console.log('newOpt_input',newOpt_input)
                if(newOpt_input === null){
                  newOpt.selectedIndex = "0";
                  return;
                  }         
                if (newOpt_input != '') {
                 // console.log(`${newOpt.value.split('_')[0]}` + '_' +newOpt_input)
                  newOpt_input_value = `${newOpt.value.split('_')[0]}` + '_' + newOpt_input;//.split(' ').join('_');
    
                  var opt = document.createElement('option');
                  opt.value = newOpt_input_value;
                  opt.innerHTML = newOpt_input;
                  
                  
                  if (!checkGroup) {
                    newOpt.insertBefore(opt, newOpt.lastChild.previousSibling);        
                  } else if (checkGroup) {
                      // Find the option group labeled 'Others'
    
                      var othersGroup = newOpt.querySelector(`optgroup[label="${newOpt.value.split('_')[0]}"]`);
    
                      // Find the existing 'other' option within the group
                      var otherOption = othersGroup.querySelector(`option[value="${newOpt.value.split('_')[0]} + '_' + other"]`);
    
                      // Insert the new option before the 'other' option
                      othersGroup.insertBefore(opt, otherOption);
                  }
    
                  newOpt.value = newOpt_input_value;
                } else {
                  // Handle the case when input is empty
                  getOthersSelectOpt(newOpt, propmtElement, checkGroup)
              }
            }
    
    
    
            }
    
    
    
    
            /* --------------------- /get Other select option --------------------- */
  //         /* --------------------------------- grape variety input --------------------------------- */
  //         function grapeVarInput(input) {
  //          // console.log('here')
  //           var inputRoot = input.id.split('_').slice(0, -1).join('_');
  //             // Call the server-side function to get the JSON data
  //             google.script.run.withSuccessHandler(function (jsonObject) {
  //                 var dataListElement = document.getElementById(inputRoot + '_Options');
  //                // console.log("'inputRoot + '_Options'",inputRoot + '_Options')
  //                // console.log('input',input)
  //                // console.log('dataListElement',dataListElement)
  //                 // Loop through the keys in the JSON data
  //                 for (const key in jsonObject) {
  //                     var option = document.createElement('option');
  //                     option.value = key; // Set the option value to the key
  //                     dataListElement.appendChild(option);
  //                 }
  //             }).get_grapeVar_JsonData();
  //         };
  //         /* --------------------------------- /grape variety input --------------------------------- */
  //         /* --------------------------------- grape variety input --------------------------------- */
  //         document.addEventListener('DOMContentLoaded', function () {
            
  //             // Call the server-side function to get the JSON data
  //             google.script.run.withSuccessHandler(function (jsonObject) {
  //                 var inputElement = document.getElementById('winery_ColdMaceration_grapeVar_1');
  //                 var dataListElement = document.getElementById('winery_ColdMaceration_grapeVar_Options');
    
  //                 // Loop through the keys in the JSON data
  //                 for (const key in jsonObject) {
  //                     var option = document.createElement('option');
  //                     option.value = key; // Set the option value to the key
  //                     dataListElement.appendChild(option);
  //                 }
  //             }).get_grapeVar_JsonData();
  //         });
  //         /* --------------------------------- /grape variety input --------------------------------- */
    
    
  //   var jsonObj = null;
  //   /* --------------------------------- soilColorToHEX --------------------------------- */
  //   document.addEventListener('DOMContentLoaded', function () {
      
  //       // Call the server-side function to get the JSON data
  //       google.script.run.withSuccessHandler(function (jsonObject) {
  //           jsonObj = jsonObject;
  //         // return jsonObj;
    
  //       }).get_grapeVar_JsonData();
  //   });
  //  // console.log('jsonObj',jsonObj)
    
    
    
  var jsonObj = null;  
  document.addEventListener("DOMContentLoaded", function () {
    fetch('../winery/json/grape_var_JSON.json')
                .then(response => response.json())
                .then(data => {
                    jsonObject = data;
                    // You can use jsonData here.

                    // create a query selector all for elements with ids starting with any characters and ending in "_grapeVar_1"
                    grapeVarEl = document.querySelectorAll('[id$="_grapeVar_1"]');

                    // loop through the elements
                    for (let i = 0; i < grapeVarEl.length; i++) {
                        var inputElement = grapeVarEl[i];
                        var dataListElement = document.getElementById(inputElement.id.split('_').slice(0, -1).join('_') + "_Options");
                        // var dataListElement = document.getElementById("grapeVar_Options");
                        // Loop through the keys in the JSON data
                        for (const key in jsonObject) {
                            var option = document.createElement("option");
                            option.value = key;
                            dataListElement.appendChild(option);
                        }
                    }
                    // var inputElement = document.getElementById("grapeVar_Input");
                    // var dataListElement = document.getElementById("grapeVar_Options");

                    // for (const key in jsonObject) {
                    //     var option = document.createElement("option");
                    //     option.value = key;
                    //     dataListElement.appendChild(option);
                    // }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });    
    
          function YesNo_radio_dependentDivDisplay(radioB) {
    
            var radioBSplit = radioB.id.split('_');
            var radiosContainer = radioB.parentNode;    
            var radioGroupSplit = radiosContainer.id.split('_');
            var nrBoxContainer = radioBSplit.slice(0, radioBSplit.length - 2).join('_') + "_container_" + radioBSplit[radioBSplit.length - 1];
       // console.log(nrBoxContainer)
            if (radioBSplit[radioBSplit.length - 2] == "yes"){
              radiosContainer.hidden = radioB.checked;
              document.getElementById(nrBoxContainer).hidden = !radioB.checked;
              } else if (radioBSplit[radioBSplit.length - 2] == "no"){
              radiosContainer.hidden = !radioB.checked;
              document.getElementById(nrBoxContainer).hidden = radioB.checked;
              }
    
    
          }
    
          function hide_and_uncheck_radios_on_val_0(nrBox) {
            if (nrBox.value == 0 || nrBox.value == null){
            
            
            var nrBoxId_split = nrBox.id.split('_');
            var radiosContainerID = nrBoxId_split.slice(0, nrBoxId_split.length - 2).join('_') + "_radioGroupContainer_" + nrBoxId_split[nrBoxId_split.length - 1];
            var parentContainerName = nrBoxId_split.slice(0, nrBoxId_split.length - 2).join('_') + "_container_" + nrBoxId_split[nrBoxId_split.length - 1];
            var radiosName = nrBoxId_split.slice(0, nrBoxId_split.length - 2).join('_') + "_" + nrBoxId_split[nrBoxId_split.length - 1];
       console.log('radiosContainerID', radiosContainerID)
       console.log('radiosName',radiosName)
       console.log('nrBox.id',nrBox.id)
            document.getElementById(radiosContainerID).hidden = false;
            document.getElementById(parentContainerName).hidden = true;
    
            var radios = document.getElementsByName(radiosName);
            for(var i = 0; i < radios.length; i++) {
                radios[i].checked = false;
            }
    
            }

          }
          /* --------------------- Other fuels --------------------- */
          function getFuel(fuel) {
            if (fuel.value == 'other') {
              fuel_input = window.prompt('Please input the fuel name:');//, 'defaultText')
    
              if (fuel_input != '') {
                fuel_input_value = fuel_input.split(' ').join('_');
    
                var opt = document.createElement('option');
                opt.value = fuel_input_value;
                opt.innerHTML = fuel_input;
                
                fuel.insertBefore(opt, fuel.lastChild.previousSibling);
    
                fuel.value = fuel_input_value;
              } else {
                getFuel(fuel)
            }
    
          }
          }
          /* --------------------- /Other fuels --------------------- */

// ======================================= Functions to handle field operations tables =======================================
// creating the checkDicts for the field operations tables. In order to be able to use the same function for all the tables, the checkDicts are created dynamically, the name of the checkDict is the same as the table id + '_checkDict', and the global variable is window[checkDictName], where checkDictName, is a string variable passed directly to window[], representing the name of the checkDict. The checkDicts are created only if they do not exist in the window object.
var landPrep_dictName = 'landPrep_checkDict';
if (window[landPrep_dictName] == undefined) {
  window[landPrep_dictName] = {'physical' : ['Tillage', 'Ploughing', 'Disking', 'Harrowing', 'Hoeing', 'Weeding'], 'newSoil' : ['Tillage', 'Ploughing', 'Disking', 'Harrowing', 'Hoeing', 'Weeding'], 'fertilizer' : ['Fertilizer'], 'greenM' : ['Tillage', 'Ploughing', 'Disking', 'Harrowing', 'Hoeing', 'Weeding', 'LandRolling', 'Seeding', 'Harvesting'], 'pH' : ['pH'], 'insecticide' : ['Insecticide'], 'herbicide' : ['Herbicide'], 'fungicide' : ['Fungicide'], 'molluscicide' : ['Molluscicide'], 'acaricide'  : ['Acaricide'], 'bactericide' : ['Bactericide'], 'rodenticide' : ['Rodenticide'], 'nematicide'  : ['Nematicide'], 'algicide' : ['Algicide']}
}
var planting_dictName = 'planting_checkDict';
if (window[planting_dictName] == undefined) {
  window[planting_dictName] = {'cuttings' : ['Tillage', 'Ploughing', 'Disking', 'Harrowing', 'Hoeing', 'Weeding', 'LandRolling', 'Seeding'], 'fertilizer' : ['Fertilizer'], 'fungicide' : ['Fungicide']}
}
var pruning_dictName = 'pruning_checkDict';
if (window[pruning_dictName] == undefined) {
  window[pruning_dictName] = {'othPlantGrowth' : ['Tillage', 'Ploughing', 'Disking', 'Harrowing', 'Hoeing', 'Weeding', 'LandRolling', 'Seeding', 'Fertilizer']}
}
//   // window[canopy_dictName] = {'pruning' : ['Pruning'], 'training' : ['Training'], 'fertilizer' : ['Fertilizer'], 'fungicide' : ['Fungicide']}
// }
var nutrient_dictName = 'nutrient_checkDict';
if (window[nutrient_dictName] == undefined) {
  window[nutrient_dictName] = {'fertilizer' : ['Fertilizer'], 'lime' : ['pH']}
}
var pest_dictName = 'pest_checkDict';
if (window[pest_dictName] == undefined) {
  window[pest_dictName] = {'insecticide' : ['Insecticide'], 'herbicide' : ['Herbicide'], 'fungicide' : ['Fungicide'], 'molluscicide' : ['Molluscicide'], 'acaricide'  : ['Acaricide'], 'bactericide' : ['Bactericide'], 'rodenticide' : ['Rodenticide'], 'nematicide'  : ['Nematicide'], 'algicide' : ['Algicide']}
}
var harvesting_dictName = 'harvesting_checkDict';
if (window[harvesting_dictName] == undefined) {
  window[harvesting_dictName] = {'plotProd' : ['Harvesting']}
}

// function startFieldOperationsTableFunctions() {
  function getSelElementOptions(selectElement) {
          var options = [];
          for (var i = 0; i < selectElement.options.length; i++) {
              if (selectElement.options[i].hasAttribute('selected') && selectElement.options[i].getAttribute('selected') === 'true') {
                  // Add the option's value to the array
                  options.push(selectElement.options[i].value);
              }
          }
          return options;
      }
      function  getAllSeletedOptions(table) {
        var selectedOptions = [];
        // get the table body
        var  tableBody = table.getElementsByTagName('tbody')[0];
        // get the rows in the table body
        var  rows = tableBody.getElementsByTagName('tr');
        for  (var i = 0; i < rows.length; i++) {
            var selects = rows[i].getElementsByTagName('select');
            
            for (var j = 0; j < selects.length; j++) {
                let selectedResponse = getSelElementOptions(selects[j]);
                if (selectedResponse.length > 0) {
                    for (var k = 0; k < selectedResponse.length; k++) {
                        selectedOptions.push(selectedResponse[k]);
                    }
                }
                
            }
        }
        // remove any  duplicates  from  the array
        selectedOptions = selectedOptions.filter((v, i, a) => a.indexOf(v) === i);
            return selectedOptions;
    }

  function hideCommons(element) {
    var checkDict = window[element.id.split('_')[1] + '_checkDict'];

  // get the root id from the element
  var rootId = element.id.split('_').slice(0, -2).join('_');

  // possible visible rows
  var possVisibleRows = [];

// check the radios by name from rootId + checkDict keys
for (var key in checkDict) {
  // get the value of the radio group with name="rootId.split('_').slice(0,-1).join('_') + '_' + key" or the numeric inputs with name="rootId.split('_').slice(0,-1).join('_') + '_' + key + '_amount'"
  // I will keep the var name as radios, aldogh it may include numeric inputs
  var numericInputs = document.getElementsByName(rootId.split('_').slice(0,-1).join('_') + '_' + key + '_amount');
  var radios = document.getElementsByName(rootId.split('_').slice(0,-1).join('_') + '_' + key);
  // join the radios and numericInputs to the radios array
  radios = [...radios, ...numericInputs];

  var value;
  for (var i = 0; i < radios.length; i++) {
    // if radios[i] is of type radio
    if (radios[i].type == 'radio') {
      if (radios[i].checked) {
          value = radios[i].value;
          if (value.split('_').slice(-1).join('_') == 'yes') {
            for (var j = 0; j < checkDict[key].length; j++) {
              possVisibleRows.push(checkDict[key][j]);
            }
          }
        }
          // alert(`value: ${value}\nrootId.split('_').slice(0,-1).join('_'): ${rootId.split('_').slice(0,-1).join('_')}\nkey: ${key}\ncheckDict[key]: ${checkDict[key]}`)

          break;
      } else if (radios[i].type == 'number') {
        if (radios[i].value > 0) {
          for (var j = 0; j < checkDict[key].length; j++) {
            possVisibleRows.push(checkDict[key][j]);
          }
        }
      }
  }
}

// remove the duplicates from the possVisibleRows array
var visibleRows = [...new Set(possVisibleRows)];

  // get the parent table id of the element
  var table = element.closest('table');

  // get the parent row of the element
  var row = element.closest('tr');

  // get the select elements in each row
  var selects = table.getElementsByTagName('select');

  for (var i = 0; i < element.options.length; i++) {

  // check if the element already has the selected attribute in its options
  var IteratedElselectedOptions = getSelElementOptions(document.getElementById(rootId + '_' + element.options[i].value + '_row').getElementsByTagName('select')[0]);
  if (element.options[i].hasAttribute('selected') && IteratedElselectedOptions.length > 0) {


      alert(`You are  trying to choose ${element.options[i].value} which already has selected options: ${IteratedElselectedOptions}`);

      // remove the selected attribute from the element options
      var butELparentFinder = element.parentElement.getElementsByTagName('ul')[0].getElementsByTagName('li');
      // click the button inside the last <li> element to  remove the selected attribute and trigger the change event
      butELparentFinder[butELparentFinder.length -1 ].getElementsByTagName('button')[0].click();
      // return;                 
  }
   else if (element.options[i].hasAttribute('selected')) {
   
  document.getElementById(rootId + '_' + element.options[i].value + '_row').hidden = true;
  } else if (element.options[i].hasAttribute('disabled') && document.getElementById(rootId + '_' + element.options[i].value + '_row').hidden && visibleRows.includes(element.options[i].value) && !getAllSeletedOptions(table).includes(element.options[i].value)) {

  document.getElementById(rootId + '_' + element.options[i].value + '_row').hidden = false;
  } 
  // else if (element.options[i].hasAttribute('disabled')) {
  //   alert('#3')
  // document.getElementById(rootId + '_' + element.options[i].value + '_row').hidden = true;

  // }
  // else {
  //   alert('#4')
  // document.getElementById(rootId + '_' + element.options[i].value + '_row').hidden = false;
  // }

  // document.getElementById(rootId + '_' + element.options[i].value + '_row').hidden = true;
 
  
  // else if (document.getElementById(rootId + '_' + element.options[i].value + '_row').hidden && element.options[i].hasAttribute('selected')) {
  // // document.getElementById(rootId + '_' + element.options[i].value + '_row').hidden = false;
  // alert('#2')
  // }    
  }

  // get the parent table id of the element
  var table = element.closest('table');

  EnablerDisabler(table.id);

  // // get the elements with the class prep_fieldOps
  // var selects = table.getElementsByTagName('select');

  // // get the select elements in each row
  // for (var i = 0; i < selects.length; i++) {
  // if (selects[i] !== element) {
  // for (var j = 0; j < selects[i].options.length; j++) {
  // // get the values of element options with selected=true attribute
  // if (getSelElementOptions(element).includes(selects[i].options[j].value)) {
  //     selects[i].options[j].disabled = true;//.hidden = true;
  // } else {
  //     // if (selects[i].options[j].disabled !== true) {
  //         selects[i].options[j].disabled = false;//.hidden = false;
  //     // }
  // }
  // }
  // }
  // }
  }

  function EnablerDisabler(tableID) {
      // get  the body  of the table
      var tableBody = document.getElementById(tableID).getElementsByTagName('tbody')[0];
      // get the rows  of  the body
      var rows = tableBody.getElementsByTagName('tr');

      var hiddenRows = [];
      var visibleRows = [];



      for (var j = 0; j < rows.length; j++) {
          var selVal = rows[j].id.split('_').slice(-2).join('_').replace('_row', '');
          if (rows[j].hidden) {
              hiddenRows.push(selVal);
          } else {
              visibleRows.push(selVal);            
          }
      }
      

  // for all the select elements in the table, if the  value of the select element is in the hiddenRows array, disable the select element
  // if the value of the select element is in the visibleRows array, enable the select element
  for (var k  = 0;  k < tableBody.getElementsByTagName('select').length; k++) {
      var select = tableBody.getElementsByTagName('select')[k];
      for (var l = 0; l < select.options.length; l++) {
          if (hiddenRows.includes(select.options[l].value)) {
              // disable the select options
              select.options[l].disabled = true;
              // document.getElementById(tableID + '_' + select.options[l].value + '_row').hidden = true;
          } else if (visibleRows.includes(select.options[l].value)) {
              // enable the select options
              select.options[l].disabled = false;
              // document.getElementById(tableID + '_' + select.options[l].value + '_row').hidden = false;
          }
      }
  }








  //     //  check if all the select elements options in all table rows are not disabled        
  //     var select = rows.getElementsByTagName('select')[j];
  //     for (var k = 0; k < select.options.length; k++) {
  //         if (select.options[k].disabled) {
  //             if (boolean) {
  //                 // enable the select options
  //                 select.options[k].disabled = false;
  //             } else {
  //             // disable the select options
  //             select.options[k].disabled = true;
  //             // alert('Please select the options for the field operation');
  //             // return;
  //             }
  //         } else {
  //             if (boolean) {
  //                 // enable the select options
  //                 select.options[k].disabled = false;
  //             } else {
  //             // disable the select options
  //             select.options[k].disabled = true;
  //             // alert('Please select the options for the field operation');
  //             // return;
  //             }
  //     }
  // }
  // }
  }
  function checkComonSelectedRadioGeneradtedRows(checkKey, checkDict, tableID) {
    var checkDict = window[tableID.split('_')[1] + '_checkDict'];
      var comonRows = [];
      var checkKeyRows = checkDict[checkKey];

      for (var key in checkDict) {
          // alert(tableID.replace('_fieldOps', '') + '_' + key + '_yes');
          if (key !== checkKey) {
              for (var i = 0; i < checkDict[key].length; i++) {
                  if (checkKeyRows.includes(checkDict[key][i])) {
                    if (document.getElementById(tableID.replace('_fieldOps', '') + '_' + key + '_yes').checked == true) {
                          comonRows.push(checkDict[key][i]);
                          // if the element is an input type numeric
                      } else if (document.getElementById(tableID.replace('_fieldOps', '') + '_' + key + '_amount') && document.getElementById(tableID.replace('_fieldOps', '') + '_' + key + '_amount').value > 0) {
                              comonRows.push(checkDict[key][i]);
                          }
                      
                  }
              }
          }
      }
      return comonRows;
  }


  function  setRowVisAndSelOpt(element) {
    let element_ID;
    // if element is a radio button
        if  (typeof element === 'object' && element.type === 'radio') { 
    element_ID = element.id;
    // else if the element is an input tyoe numeric
        } else if (typeof element === 'object' && element.type === 'number') {
         if (element.value < 1) {
            element_ID = element.id.replace('_amount','') + '_no';
        } else {
            element_ID = element.id.replace('_amount','') + '_yes';
        }
        }
    // get the dictionary
      var checkDict = window[element_ID.split('_')[1] + '_checkDict'];


      // get the field operation table element
      var tableID = element_ID.split('_').slice(0, -2).join('_') + '_fieldOps';


      // loop the dictionary keys
      for (const key in checkDict) {
          // check if the key is in the element id
          if (element_ID.includes(key)) {
              // get the values of the dictionary key
              var values = checkDict[key];
              // loop through the values
              for (var i = 0; i < values.length; i++) {
                  var tablerow = document.getElementById(tableID + '_' + values[i] + '_row');
                  
                  if (element_ID.includes('_yes')) {
                      if (!tablerow.hidden) {
                          
                      } else {
                          if (checkComonSelectedRadioGeneradtedRows(key, checkDict, tableID).includes(values[i])) {
                              
                          } else {
                              tablerow.hidden = false;
                          }
                      }
                  } else if (element_ID.includes('_no')) {
                      if (tablerow.hidden) {
                          
                      } else {
                          if (checkComonSelectedRadioGeneradtedRows(key, checkDict, tableID).includes(values[i])) {
                              
                          } else {
                              tablerow.hidden = true;
                          }
                          // tablerow.hidden = true;
                      }

                  }

              }
          }
      }

      EnablerDisabler(tableID)

  }

  
  // function  setRowVisAndSelOpt(element) {
  //     var checkDict = window[element.id.split('_')[1] + '_checkDict'];


  //     // get the field operation table element
  //     var tableID = element.id.split('_').slice(0, -2).join('_') + '_fieldOps';


  //     // loop the dictionary keys
  //     for (const key in checkDict) {
  //         // check if the key is in the element id
  //         if (element.id.includes(key)) {
  //             // get the values of the dictionary key
  //             var values = checkDict[key];
  //             // loop through the values
  //             for (var i = 0; i < values.length; i++) {
  //                 var tablerow = document.getElementById(tableID + '_' + values[i] + '_row');
                  
  //                 if (element.id.includes('_yes')) {
  //                     if (!tablerow.hidden) {
                          
  //                     } else {
  //                         if (checkComonSelectedRadioGeneradtedRows(key, checkDict, tableID).includes(values[i])) {
                              
  //                         } else {
  //                             tablerow.hidden = false;
  //                         }
  //                     }
  //                 } else if (element.id.includes('_no')) {
  //                     if (tablerow.hidden) {
                          
  //                     } else {
  //                         if (checkComonSelectedRadioGeneradtedRows(key, checkDict, tableID).includes(values[i])) {
                              
  //                         } else {
  //                             tablerow.hidden = true;
  //                         }
  //                         // tablerow.hidden = true;
  //                     }

  //                 }

  //             }
  //         }
  //     }

  //     EnablerDisabler(tableID)

  // }
// }



// startFieldOperationsTableFunctions();
// ======================================= /Functions to handle field operations tables =======================================
