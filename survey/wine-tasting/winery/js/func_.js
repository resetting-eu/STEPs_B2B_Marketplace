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
              tabcontent = document.getElementsByClassName("tabcontentVertical");
              for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
              }
              tablinks = document.getElementsByClassName("tablinksVertical");
              for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
              }
              // document.getElementById(answerName).style.display = "inline-flex";//"block";
              document.getElementById(answerName).style = "display: contents;justify-content: space-evenly;overflow: hidden;";
              e.currentTarget.className += " active";
            }
            // Get the element with id="defaultOpen" and click on it
            document.getElementById("defaultOpenVertical").click();
            document.getElementById("defaultOpenVertical1").click();
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
              document.getElementById(answerName).style.display = "contents";
              e.currentTarget.className += " active";
            }
            // Get the element with id="defaultOpen" and click on it
            document.getElementById("defaultOpen").click();
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
       // console.log('radiosContainerID', radiosContainerID)
       // console.log('radiosName',radiosName)
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