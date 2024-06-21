    
    //       // var last_stategkjg = 0; will become a hidden_input_nr_element
    
          function nested_tableAdd(addrow, table, hidden_input_nr_element) {
            var rownr = addrow.value;
            var last_state = hidden_input_nr_element.value;
            var row_start = null;
            var amount_radios = [];
            var pops = [];
            
            if (rownr > 0 && rownr > last_state) {
              if (last_state == 0) {
                table.hidden = false;//.innerHTML = finalTable;
                hidden_input_nr_element.value = 1;
                return;
              } else {
                row_start = table.rows.length - (table.tHead.rows.length - 1);
              };
    
              for (var i = row_start; i <= rownr; i++) {
                  // clone the first body row
                  var tableRow = table.rows[table.tHead.rows.length].cloneNode(true);
    
                  for (var j = 0; j < tableRow.cells.length; j++) {
            
    var spans = tableRow.cells[j].getElementsByTagName('span');
    var spansNotInSvg = Array.from(spans).filter(function(span) {
        return !span.closest('svg');
    });
                      if (spansNotInSvg.length > 0) {
                        for(let spa of spansNotInSvg) {
                         // console.log('spa',spa)
                if (spa && spa.innerText.split(' ').join('')[1] != 'ⓘ') {
               // console.log('spa.innerText', spa.innerText)
               // console.log("spa.innerText.split(' ').join('')",spa.innerText.split(' ').join('')[1])
                var new_spa_innerHTML = spa.innerHTML.split(' ').slice(0, -1).join(' ') + " " + String(i);
                spa.innerHTML = new_spa_innerHTML;
                }
                        }
                      }
    
    var inputs = tableRow.cells[j].getElementsByTagName('input');
    var inputsNotInSvg = Array.from(inputs).filter(function(input) {
        return !input.closest('svg');
    });
                      if (inputsNotInSvg.length > 0) {
                        for(let inp of inputsNotInSvg) {
                         // console.log('inp', inp)
                      if (inp && inp.type != "radio") {
                          var new_inp_ID = inp.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + inp.id.split('_nestedTableIndex_')[2];
                          inp.id = new_inp_ID;
                          inp.value = null;
                      }
                        }
                      }
    
    var selects = tableRow.cells[j].getElementsByTagName('select');
    var selectsNotInSvg = Array.from(selects).filter(function(select) {
        return !select.closest('svg');
    });
                      if (selectsNotInSvg.length > 0) {
                        for(let sel of selectsNotInSvg) {
                         // console.log('sel', sel)
                          var new_sel_ID = sel.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + sel.id.split('_nestedTableIndex_')[2];
                          sel.id = new_sel_ID;
                        }
                      }
    
    var buttons = tableRow.cells[j].getElementsByTagName('button');
    var buttonsNotInSvg = Array.from(buttons).filter(function(button) {
        return !button.closest('svg');
    });
                      if (buttonsNotInSvg.length > 0) {
                        for(let but of buttonsNotInSvg) {
                         // console.log('but', but)
                          var new_but_ID = but.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + but.id.split('_nestedTableIndex_')[2];
                          but.id = new_but_ID;
                        }
                      }
    
    var tables = tableRow.cells[j].getElementsByTagName('table');
    var tablesNotInSvg = Array.from(tables).filter(function(table) {
        return !table.closest('svg');
    });
                      if (tablesNotInSvg.length > 0) {
                        for(let tab of tablesNotInSvg) {
                         // console.log('tab', tab)
                          var new_tab_ID = tab.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + tab.id.split('_nestedTableIndex_')[2];
                          tab.id = new_tab_ID;
                        }
                      }
    
    var ranges = tableRow.cells[j].getElementsByTagName('range');
    var rangesNotInSvg = Array.from(ranges).filter(function(range) {
        return !range.closest('svg');
    });
                      if (rangesNotInSvg.length > 0) {
                        for(let ran of rangesNotInSvg) {
                         // console.log('ran', ran)
                           var new_ran_ID = ran.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + ran.id.split('_nestedTableIndex_')[2];
                           ran.id = new_ran_ID;
                           ran.value = null;
                        }
                      }
    
    var textareas = tableRow.cells[j].getElementsByTagName('textarea');
    var textareasNotInSvg = Array.from(textareas).filter(function(textarea) {
        return !textarea.closest('svg');
    });
                      if (textareasNotInSvg.length > 0) {
                        for(let tex of textareasNotInSvg) {
                         // console.log('tex', tex)
                          var new_textarea_ID = tex.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + tex.id.split('_nestedTableIndex_')[2];
                          tex.id = new_textarea_ID;
                tex.value = null;
                        }
                      }
    
    var labels = tableRow.cells[j].getElementsByTagName('label');
    var labelsNotInSvg = Array.from(labels).filter(function(label) {
        return !label.closest('svg');
    });
                      if (labelsNotInSvg.length > 0) {
                        for (var n = 0; n < labelsNotInSvg.length; n++) {
                         // console.log('inputsNotInSvg[n]', inputsNotInSvg[n])
                            var new_rad_name = inputsNotInSvg[n].name.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + inputsNotInSvg[n].name.split('_nestedTableIndex_')[2];
                            var new_rad_ID = inputsNotInSvg[n].id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + inputsNotInSvg[n].id.split('_nestedTableIndex_')[2];
                            inputsNotInSvg[n].name = new_rad_name;
                            inputsNotInSvg[n].id = new_rad_ID;
                inputsNotInSvg[n].checked = false;
    
                            labelsNotInSvg[n].htmlFor = new_rad_ID;
                        }
                        // resetting the storage nrBox
                        for (var y = 0; y < inputsNotInSvg.length; y++) {
                          if (inputsNotInSvg[y] && inputsNotInSvg[y].type == 'number') {
                            var nrBoxi = inputsNotInSvg[y];
                            nrBoxi.id = inputsNotInSvg[y].name.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + inputsNotInSvg[y].name.split('_nestedTableIndex_')[2];
                            nrBoxi.value = null;
                            amount_radios.push(inputsNotInSvg[y].name.split('_').slice(0, -1).join('_') + "_");                  
                          }
                        }					
                      }
    
    var divs = tableRow.cells[j].getElementsByTagName('div');
    var divsNotInSvg = Array.from(divs).filter(function(div) {
        return !div.closest('svg');
    });
                      if (divsNotInSvg.length > 0) {
                        for(let div of divsNotInSvg) {
                         // console.log('div', div)
                          //Handling the winery portfolio table
                          if (div.id.split('Δ')[0] == 'winery_Portfolio_Flowchart') {
                            div.innerHTML = "";
                          }
                          var new_div_ID = div.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + div.id.split('_nestedTableIndex_')[2];
                          div.id = new_div_ID;
                        }
                      }
    
    var as = tableRow.cells[j].getElementsByTagName('a');
    var asNotInSvg = Array.from(as).filter(function(a) {
        return !a.closest('svg');
    });
                      if (asNotInSvg.length > 0) {
                        for(let a of asNotInSvg) {
                         // console.log('a', a)
                          var new_a_ID = a.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(i) + "_nestedTableIndex_" + a.id.split('_nestedTableIndex_')[2];
                          a.id = new_a_ID;
                          pops.push(a.id.split('_').slice(0, -1).join('_') + "_");
                        }
                      }
                    }
    
              table.rows[table.tHead.rows.length].parentNode.appendChild(tableRow);
             // console.log('pops', pops)
             // console.log('amount_radios',amount_radios)
    
    
              // calling the storage number box 'change function on the null value set above
              if (amount_radios.length > 0) {
                for (let x = 0; x < amount_radios.length; x++) {
                  hide_and_uncheck_radios_on_val_0(document.getElementById(amount_radios[x] + String(i)))
                }
              }
    
          // Initialize the popover for the cloned element
              if (pops.length > 0) {
                for (let z = 0; z < pops.length; z++) {
                  $(document.getElementById(pops[z] + String(i))).popover();
                }
              }
    
    
    
          }
    
              
            } else if (rownr > 0 && rownr == last_state) {
              hidden_input_nr_element.value = table.rows.length - table.tHead.rows.length;
              addrow.value = last_state;
              return;
            } else {
              hidden_input_nr_element.value = table.rows.length - table.tHead.rows.length;
              addrow.value = last_state;
              // table.innerHTML = "";
              return;
            }; 
    
            hidden_input_nr_element.value = rownr;
    
    
          };
    
    
          function nested_table_remove_row(row, hidden_input_nr_element, addrow) {
            var i = row.parentNode.parentNode.rowIndex;
            var table = row.parentNode.parentNode.closest("table");
            var last_state = hidden_input_nr_element.value;
            var amount_radios = [];
    
    
            if (table.rows.length > table.tHead.rows.length + 1) {
              table.deleteRow(i);
    
              for (k = table.tHead.rows.length; k <= table.rows.length - 1; k++) {
               // console.log('tableRow',table.rows[k])
                  for (var l = 0; l < table.rows[k].cells.length; l++) {

    var spans = table.rows[k].cells[l].getElementsByTagName('span');
    var spansNotInSvg = Array.from(spans).filter(function(span) {
        return !span.closest('svg');
    });
                      if (spansNotInSvg.length > 0) {
                        for(let spa of spansNotInSvg) {
                          var new_spa_innerHTML = spa.innerHTML.split(' ').slice(0, -1).join(' ') + " " + String(k - (table.tHead.rows.length - 1));
                          spa.innerHTML = new_spa_innerHTML;
                        }
                      }
    
    var inputs = table.rows[k].cells[l].getElementsByTagName('input');
    var inputsNotInSvg = Array.from(inputs).filter(function(input) {
        return !input.closest('svg');
    });
                      if (inputsNotInSvg.length > 0) {
                        for(let inp of inputsNotInSvg) {
                      if (inp && inp.type != "radio") {
                          var new_inp_ID = inp.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1)) + "_nestedTableIndex_" + inp.id.split('_nestedTableIndex_')[2];
                          inp.id = new_inp_ID;
                      }
                        }
                      }
    
    var selects = table.rows[k].cells[l].getElementsByTagName('select');
    var selectsNotInSvg = Array.from(selects).filter(function(select) {
        return !select.closest('svg');
    });
                      if (selectsNotInSvg.length > 0) {
                        for(let sel of selectsNotInSvg) {
                          var new_sel_ID = sel.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1)) + "_nestedTableIndex_" + sel.id.split('_nestedTableIndex_')[2];
                          sel.id = new_sel_ID;
                        }
                      }
    
    var buttons = table.rows[k].cells[l].getElementsByTagName('button');
    var buttonsNotInSvg = Array.from(buttons).filter(function(button) {
        return !button.closest('svg');
    });
                      if (buttonsNotInSvg.length > 0) {
                        for(let but of buttonsNotInSvg) {
                          var new_but_ID = but.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1)) + "_nestedTableIndex_" + but.id.split('_nestedTableIndex_')[2];
                          but.id = new_but_ID;
                        }
                      }
    
    var tables = table.rows[k].cells[l].getElementsByTagName('table');
    var tablesNotInSvg = Array.from(tables).filter(function(table) {
        return !table.closest('svg');
    });
                      if (tablesNotInSvg.length > 0) {
                        for(let tab of tablesNotInSvg) {
                          var new_tab_ID = tab.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1)) + "_nestedTableIndex_" + tab.id.split('_nestedTableIndex_')[2];
                          tab.id = new_tab_ID;
                        }
                      }
    
    var ranges = table.rows[k].cells[l].getElementsByTagName('range');
    var rangesNotInSvg = Array.from(ranges).filter(function(range) {
        return !range.closest('svg');
    });
                      if (rangesNotInSvg.length > 0) {
                        for(let ran of rangesNotInSvg) {
                           var new_ran_ID = ran.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1)) + "_nestedTableIndex_" + ran.id.split('_nestedTableIndex_')[2];
                           ran.id = new_ran_ID;
                        }
                      }
    
    var textareas = table.rows[k].cells[l].getElementsByTagName('textarea');
    var textareasNotInSvg = Array.from(textareas).filter(function(textarea) {
        return !textarea.closest('svg');
    });
                      if (textareasNotInSvg.length > 0) {
                        for(let tex of textareasNotInSvg) {
                          var new_textarea_ID = tex.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1)) + "_nestedTableIndex_" + tex.id.split('_nestedTableIndex_')[2];
                          tex.id = new_textarea_ID;
                        }
                      }
    
    var labels = table.rows[k].cells[l].getElementsByTagName('label');
    var labelsNotInSvg = Array.from(labels).filter(function(label) {
        return !label.closest('svg');
    });
                      if (labelsNotInSvg.length > 0) {
                        for (var n = 0; n < labelsNotInSvg.length; n++) {
                            var new_rad_name = inp[n].name.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1));
                            var new_rad_ID = inp[n].id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1));
                            inp[n].name = new_rad_name;
                            inp[n].id = new_rad_ID;
    
                            labelsNotInSvg[n].htmlFor = new_rad_ID;
                        }
                      }
    
    var divs = table.rows[k].cells[l].getElementsByTagName('div');
    var divsNotInSvg = Array.from(divs).filter(function(div) {
        return !div.closest('svg');
    });
                      if (divsNotInSvg.length > 0) {
                        for(let div of divsNotInSvg) {
                          var new_div_ID = div.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1)) + "_nestedTableIndex_" + div.id.split('_nestedTableIndex_')[2];
                          div.id = new_div_ID;
                        }
                      }
    
    var as = table.rows[k].cells[l].getElementsByTagName('a');
    var asNotInSvg = Array.from(as).filter(function(a) {
        return !a.closest('svg');
    });
                      if (asNotInSvg.length > 0) {
                        for(let a of asNotInSvg) {
                          var new_a_ID = a.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(k - (table.tHead.rows.length - 1)) + "_nestedTableIndex_" + a.id.split('_nestedTableIndex_')[2];
                          a.id = new_a_ID;
                        }
                      }
    
                      var svg = table.rows[k].cells[l].getElementsByTagName('svg');
                      if (svg[0]) {
                        for (var n = 0; n < svg.length; n++) {
                         // console.log('this is it!!!!!', String(k - (table.tHead.rows.length - 1)))
                         // console.log(svg[n].id.split('Δ')[0])
                          if(String(k - (table.tHead.rows.length - 1)) != svg[n].id.split('Δ')[0].split('_')[1]) {
                         // console.log('this is it!!!!! - 1', String(k - (table.tHead.rows.length - 1)))
                         // console.log('1', svg[n].id.split('Δ')[0])                        
                          svgRemRow(svg[n].id.split('Δ')[0],svg[n], String(k - (table.tHead.rows.length - 1)))
                          }
                        }
                      }
    
    
    
    
                  }
    
              }
            } else if (table.rows.length == table.tHead.rows.length + 1) {
                  for (var j = 0; j < row.parentNode.parentNode.cells.length; j++) {
 
    var spans = row.parentNode.parentNode.cells[j].getElementsByTagName('span');
    var spansNotInSvg = Array.from(spans).filter(function(span) {
        return !span.closest('svg');
    });
                      if (spansNotInSvg.length > 0) {
                        for(let spa of spansNotInSvg) {
                          var new_spa_innerHTML = spa.innerHTML.split(' ').slice(0, -1).join(' ') + " " + String(1);
                          spa.innerHTML = new_spa_innerHTML;
                        }
                      }
    
    var inputs = row.parentNode.parentNode.cells[j].getElementsByTagName('input');
    var inputsNotInSvg = Array.from(inputs).filter(function(input) {
        return !input.closest('svg');
    });
                      if (inputsNotInSvg.length > 0) {
                        for(let inp of inputsNotInSvg) {
                      if (inp && inp.type != "radio") {
                          var new_inp_ID = inp.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + inp.id.split('_nestedTableIndex_')[2];
                          inp.id = new_inp_ID;
                          inp.value = null;
                      }
                        }
                      }
    
    var selects = row.parentNode.parentNode.cells[j].getElementsByTagName('select');
    var selectsNotInSvg = Array.from(selects).filter(function(select) {
        return !select.closest('svg');
    });
                      if (selectsNotInSvg.length > 0) {
                        for(let sel of selectsNotInSvg) {
                          var new_sel_ID = sel.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + sel.id.split('_nestedTableIndex_')[2];
                          sel.id = new_sel_ID;
                        }
                      }
    
    var buttons = row.parentNode.parentNode.cells[j].getElementsByTagName('button');
    var buttonsNotInSvg = Array.from(buttons).filter(function(button) {
        return !button.closest('svg');
    });
                      if (buttonsNotInSvg.length > 0) {
                        for(let but of buttonsNotInSvg) {
                          var new_but_ID = but.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + but.id.split('_nestedTableIndex_')[2];
                          but.id = new_but_ID;
                        }
                      }
    
    var tables = row.parentNode.parentNode.cells[j].getElementsByTagName('table');
    var tablesNotInSvg = Array.from(tables).filter(function(table) {
        return !table.closest('svg');
    });
                      if (tablesNotInSvg.length > 0) {
                        for(let tab of tablesNotInSvg) {
                          var new_tab_ID = tab.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + tab.id.split('_nestedTableIndex_')[2];
                          tab.id = new_tab_ID;
                        }
                      }
    
    var ranges = row.parentNode.parentNode.cells[j].getElementsByTagName('range');
    var rangesNotInSvg = Array.from(ranges).filter(function(range) {
        return !range.closest('svg');
    });
                      if (rangesNotInSvg.length > 0) {
                        for(let ran of rangesNotInSvg) {
                           var new_ran_ID = ran.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + ran.id.split('_nestedTableIndex_')[2];
                           ran.id = new_ran_ID;
                           ran.value = null;
                        }
                      }
    
    var textareas = row.parentNode.parentNode.cells[j].getElementsByTagName('textarea');
    var textareasNotInSvg = Array.from(textareas).filter(function(textarea) {
        return !textarea.closest('svg');
    });
                      if (textareasNotInSvg.length > 0) {
                        for(let tex of textareasNotInSvg) {
                          var new_textarea_ID = tex.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + tex.id.split('_nestedTableIndex_')[2];
                          tex.id = new_textarea_ID;
                        }
                      }
    
    var labels = row.parentNode.parentNode.cells[j].getElementsByTagName('label');
    var labelsNotInSvg = Array.from(labels).filter(function(label) {
        return !label.closest('svg');
    });
                      if (labelsNotInSvg.length > 0) {
                        for (var n = 0; n < labelsNotInSvg.length; n++) {
                            var new_rad_name = inputsNotInSvg[n].name.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + inputsNotInSvg[n].name.split('_nestedTableIndex_')[2];
                            var new_rad_ID = inputsNotInSvg[n].id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + inputsNotInSvg[n].id.split('_nestedTableIndex_')[2];
                            inputsNotInSvg[n].name = new_rad_name;
                            inputsNotInSvg[n].id = new_rad_ID;
                            // inputsNotInSvg[n].checked = false;
    
                            labelsNotInSvg[n].htmlFor = new_rad_ID;
                        }
                        // resetting the storage nrBox
                        for (var y = 0; y < inputsNotInSvg.length; y++) {
                          if (inputsNotInSvg[y] && inputsNotInSvg[y].type == 'number') {
                            var nrBoxi = inputsNotInSvg[y];
                            nrBoxi.id = inputsNotInSvg[y].name.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + inputsNotInSvg[y].name.split('_nestedTableIndex_')[2];
                            nrBoxi.value = null;
                            amount_radios.push(inputsNotInSvg[y].name.split('_').slice(0, -1).join('_') + "_");                  
                          }
                        }					
                      }
    
    var divs = row.parentNode.parentNode.cells[j].getElementsByTagName('div');
    var divsNotInSvg = Array.from(divs).filter(function(div) {
        return !div.closest('svg');
    });
                      if (divsNotInSvg.length > 0) {
                        for(let div of divsNotInSvg) {
                          var new_div_ID = div.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + div.id.split('_nestedTableIndex_')[2];
                          div.id = new_div_ID;
                        }
                      }
    
    var as = row.parentNode.parentNode.cells[j].getElementsByTagName('a');
    var asNotInSvg = Array.from(as).filter(function(a) {
        return !a.closest('svg');
    });
                      if (asNotInSvg.length > 0) {
                        for(let a of asNotInSvg) {
                          var new_a_ID = a.id.split('_nestedTableIndex_')[0] + "_nestedTableIndex_" + String(1) + "_nestedTableIndex_" + a.id.split('_nestedTableIndex_')[2];
                          a.id = new_a_ID;
                        }
                      }
                  }
                  // // calling the storage number box 'change function on the null value set above
                  // hide_and_uncheck_radios_on_val_0(document.getElementById('winery_externalProvidorStorage_Amount_1')); 
              // calling the storage number box 'change function on the null value set above
              if (amount_radios.length > 0) {
                for (let x = 0; x < amount_radios.length; x++) {
                  hide_and_uncheck_radios_on_val_0(document.getElementById(amount_radios[x] + String(1)))
                }
              }
    
    
    
                  table.hidden = true;
              hidden_input_nr_element.value = table.rows.length - table.tHead.rows.length - 1;
              addrow.value = table.rows.length - table.tHead.rows.length - 1; 
              return;
            }
            hidden_input_nr_element.value = table.rows.length - table.tHead.rows.length;
            addrow.value = table.rows.length - table.tHead.rows.length;
          }
            /* --------------------- /External providers' table builder and handler TEST WITH BUGS--------------------- */