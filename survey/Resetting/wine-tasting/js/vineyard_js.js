function main1() {
$(document).ready(function () {
    $('.popover-toggle').popover({
        html: true,
    });
});
$(document).on("click", ".popover .close", function () {
    $(this).parents(".popover").popover('hide');
});


// let init_profile_values = new Object(); 
console.log('is this the first one?')
/* --------------------------------- choose year --------------------------------- */
document.addEventListener('DOMContentLoaded', function () {

// // Add the init values of the svg height to init_profile_values
// document.getElementById('horiz_legend').addEventListener("load", () => {
//   init_profile_values['humus_value'] = parseFloat(window.getComputedStyle(document.getElementById('humus_svg_div')).getPropertyValue("height").replace("px", ""));
//   init_profile_values['topsoil_value'] = parseFloat(window.getComputedStyle(document.getElementById('topsoil_svg_div')).getPropertyValue("height").replace("px", ""));
//   init_profile_values['subsoil_value'] = parseFloat(window.getComputedStyle(document.getElementById('subsoil_svg_div')).getPropertyValue("height").replace("px", ""));
//   init_profile_values['weatheredRockFragments_value'] = parseFloat(window.getComputedStyle(document.getElementById('weatheredRockFragments_svg_div')).getPropertyValue("height").replace("px", ""));
//       });

  //Get the Current Year
  const currentYear = new Date().getFullYear();

  //Generate a Range of Years
  //Using a Loop: loop through the years and push them into an array:
  /*
  function generateYearRange(startYear) {
      startYear = startYear || 1974; // Default to 1974 if no start year provided
      const years = [];
      while (startYear <= currentYear) {
          years.push(startYear++);
      }
      return years;
  }

  const yearOptions = generateYearRange();

  */
  //Using `Array.from(): a more concise way, using `Array.from()` to create an array of years:

  const yearOptions = Array.from(
      { length: currentYear - 2010 + 1 },
      (_, i) => 2010 + i
  );

  //Add Options to the Select Reference Year Element
  // Get the year select elements for a single element
  // const selectElement = document.getElementById('yearSelect');    
  // for (let i of selectElements) {
  //   alert(selectElements[i])
  //   // Populate the options
  //   yearOptions.forEach((year) => {
  //       const option = document.createElement('option');
  //       option.value = year;
  //       option.textContent = year;
  //       selectElement.appendChild(option);
  //   });
  // }

  // Get the year select elements for multiple elements sharing common class
    Array.from(document.getElementsByClassName("year_selectors")).forEach(function(item) {
      // Populate the options
      yearOptions.forEach((year) => {
          const option = document.createElement('option');
          option.value = year;
          option.textContent = year;
          item.appendChild(option);
      });
      item.value = null
    });

});
/* --------------------------------- /choose year --------------------------------- */

console.log('is this the second one?')
/* --------------------------------- grape variety input --------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  
    // Call the server-side function to get the JSON data
    google.script.run.withSuccessHandler(function (jsonObject) {
        const inputElement = document.getElementById('grapeVar_Input');
        const dataListElement = document.getElementById('grapeVar_Options');

        // Loop through the keys in the JSON data
        for (const key in jsonObject) {
            const option = document.createElement('option');
            option.value = key; // Set the option value to the key
            dataListElement.appendChild(option);
        }
    }).get_grapeVar_JsonData();
});
/* --------------------------------- /grape variety input --------------------------------- */

/* --------------------------------- Range reference year --------------------------------- */
function rescale_end_year() {
  const currentYear = new Date().getFullYear();
  const end_val = document.getElementById('yearSelect_last').value;
  const end_list = document.getElementById('yearSelect_last');
  end_list.innerHTML = '';
  const beg_val = document.getElementById('yearSelect_first').value;

  const yearOptions = Array.from(
      { length: currentYear - parseInt(beg_val) + 1 },
      (_, i) => parseInt(beg_val) + i
  );

      yearOptions.forEach((year) => {
          const option = document.createElement('option');
          option.value = year;
          option.textContent = year;
          end_list.appendChild(option);
      });
  if (beg_val < end_val) {
    document.getElementById('yearSelect_last').value = end_val;
  }
};


  function numYears_form_dup(){
    const beg_val = document.getElementById('yearSelect_first').value;
    const end_val = document.getElementById('yearSelect_last').value;


  };
/* --------------------------------- /Range reference year --------------------------------- */
var jsonObj = null;
console.log('is this the third one?')
/* --------------------------------- soilColorToHEX --------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  
    // Call the server-side function to get the JSON data
    google.script.run.withSuccessHandler(function (jsonObject) {
        // const inputElement = document.getElementById('soilColorText_Input');
        // const dataListElement = document.getElementById('soilColorText_Options');
        // const targetDiv = document.getElementById('colorChoices_container');

        // // Loop through the keys in the JSON data
        // for (const key in jsonObject) {

        //   const radio_ID = `${jsonObject[key].h}__${jsonObject[key].V}_${jsonObject[key].C}`;
        //   const radio_text = `${jsonObject[key].h} ${jsonObject[key].V}/${jsonObject[key].C}`;
        //   const hex_color = jsonObject[key].hex;
        //   // console.log(key);
        //   // console.log(`${jsonObject[key].h}__${jsonObject[key].V}_${jsonObject[key].C}`)
        //   // const newDiv = `<div id="${radio_ID}_pannel" class="${radio_ID}" style="background-color:${hex_color} hidden"><input type="radio" name="horizonO_color" id="${radio_ID}" value="${radio_ID}" class="toggle toggle-left"><label for="owner_plot" class="btn">${radio_text}</label></div>`;
        //             const newDiv = `<div id="${radio_ID}_pannel" class="${radio_ID}" style="background-color:${hex_color}"><input type="radio" name="horizonO_color" id="${radio_ID}" value="${radio_ID}" class="toggle toggle-left"><label for="owner_plot" class="btn">${radio_text}</label></div>`;
        //   // targetDiv.innerHTML += newDiv;
        //   // console.log(newDiv)
        //     // const input_el = document.createElement('input');
        //     // option.value = key; // Set the option value to the key
        //     // dataListElement.appendChild(option);




        // }
        jsonObj = jsonObject;
      return jsonObj;

    }).get_munsell2hex_JsonData();
});
/* --------------------------------- /soilColorToHEX --------------------------------- */
// var jsonColorObj = null;
// /* --------------------------------- soilColorText input --------------------------------- */
// document.addEventListener('DOMContentLoaded', function () {
  
//     // Call the server-side function to get the JSON data
//     google.script.run.withSuccessHandler(function (jsonObject) {
//         const inputElement = document.getElementById('soilColorText_Input');
//         const dataListElement = document.getElementById('soilColorText_Options');

//         // Loop through the keys in the JSON data
//         for (const key in jsonObject) {
//             const option = document.createElement('option');
//             option.value = key; // Set the option value to the key
//             dataListElement.appendChild(option);
//         }
//       jsonColorObj = jsonObject;
//       return jsonColorObj;
//     }).get_soilColor_JsonData();
// });

// document.getElementById('soilColorText_Input').addEventListener('click', function (){
// document.getElementById('soilColorText_Input').value = "";

// });
// document.getElementById('soilColorText_Input').addEventListener('change', function (){
//   const targetDiv = document.getElementById('colorChoices_container');
//   targetDiv.innerHTML = '';
//   const change_jsonColorObj = jsonColorObj[document.getElementById('soilColorText_Input').value];
//   for (const el in change_jsonColorObj){
//     master = String(change_jsonColorObj[el]).split(' ');

//     hue = master[0];
    
//     minster = master[1].split('-');
//     val = minster[0];
//     chroma = minster[1];




//   // Loop through the keys in the JSON data
//   for (const key in jsonObj) {
//       if (jsonObj[key].h == hue && jsonObj[key].V == val && jsonObj[key].C == chroma) {
//           const radio_ID = `${jsonObj[key].h}__${jsonObj[key].V}_${jsonObj[key].C}`;
//           const radio_text = `${jsonObj[key].h} ${jsonObj[key].V}/${jsonObj[key].C}`;
//           const hex_color = jsonObj[key].hex;

//           const newDiv = `<div id="${radio_ID}_pannel" class="horizonO_selectors" style="background-color:${hex_color}"><input type="radio" name="horizonO_color" id="${radio_ID}" value="${radio_ID}" class="toggle toggle-left"><label for="owner_plot" class="btn">${radio_text}</label></div>`;
//           targetDiv.innerHTML += newDiv;

//               }

//       }
//   }

  
//   // targetDiv.innerHTML = jsonColorObj[document.getElementById('soilColorText_Input').value];
// }
// );
/* --------------------------------- /soilColorText input --------------------------------- */
var jsonColorObj = null;
/* --------------------------------- soilColorText  horizO input --------------------------------- */
console.log('is this the forth one?')
document.addEventListener('DOMContentLoaded', function () {
  
    // Call the server-side function to get the JSON data
    google.script.run.withSuccessHandler(function (jsonObject) {
        const inputElement = document.getElementById('soilColorText__horizO_Input');
        const dataListElement = document.getElementById('soilColorText__horizO_Options');

        // Loop through the keys in the JSON data
        for (const key in jsonObject) {
            const option = document.createElement('option');
            option.value = key; // Set the option value to the key
            dataListElement.appendChild(option);
        }
      jsonColorObj = jsonObject;
      return jsonColorObj;
    }).get_soilColor_JsonData();
});
console.log('is this the 5th one?')
console.log(document.getElementById('soilColorText__horizO_Input'))
document.getElementById('soilColorText__horizO_Input').addEventListener('click', function (){
document.getElementById('soilColorText__horizO_Input').value = "";

});
console.log('is this the 6th one?')
document.getElementById('soilColorText__horizO_Input').addEventListener('change', function (){
  const targetDiv = document.getElementById('colorChoices__horizO_container');
  targetDiv.innerHTML = '';
  const change_jsonColorObj = jsonColorObj[document.getElementById('soilColorText__horizO_Input').value];
  for (const el in change_jsonColorObj){
    master = String(change_jsonColorObj[el]).split(' ');

    hue = master[0];
    
    minster = master[1].split('-');
    val = minster[0];
    chroma = minster[1];




  // Loop through the keys in the JSON data
  for (const key in jsonObj) {
      if (jsonObj[key].h == hue && jsonObj[key].V == val && jsonObj[key].C == chroma) {
          const radio_ID = `${jsonObj[key].h}__${jsonObj[key].V}_${jsonObj[key].C}`;
          const radio_text = `${jsonObj[key].h} ${jsonObj[key].V}/${jsonObj[key].C}`;
          const hex_color = jsonObj[key].hex;

          const newDiv = `<div id="${radio_ID}_pannel" class="horizonO_selectors" style="background-color:${hex_color}"><input type="radio" name="horizonO_color" id="${radio_ID}" value="${radio_ID}" class="toggle toggle-left"><label for="owner_plot" class="btn">${radio_text}</label></div>`;
          targetDiv.innerHTML += newDiv;

              }

      }
  }

  
  // targetDiv.innerHTML = jsonColorObj[document.getElementById('soilColorText__horizO_Input').value];
}
);
/* --------------------------------- /soilColorText  horizO input --------------------------------- */
var jsonColorObj = null;
console.log('is this the 7th one?')
/* --------------------------------- soilColorText  horiz1 input --------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  
    // Call the server-side function to get the JSON data
    google.script.run.withSuccessHandler(function (jsonObject) {
        const inputElement = document.getElementById('soilColorText__horiz1_Input');
        const dataListElement = document.getElementById('soilColorText__horiz1_Options');

        // Loop through the keys in the JSON data
        for (const key in jsonObject) {
            const option = document.createElement('option');
            option.value = key; // Set the option value to the key
            dataListElement.appendChild(option);
        }
      jsonColorObj = jsonObject;
      return jsonColorObj;
    }).get_soilColor_JsonData();
});
console.log('is this the 8th one?')
document.getElementById('soilColorText__horiz1_Input').addEventListener('click', function (){
document.getElementById('soilColorText__horiz1_Input').value = "";

});
document.getElementById('soilColorText__horiz1_Input').addEventListener('change', function (){
  const targetDiv = document.getElementById('colorChoices__horiz1_container');
  targetDiv.innerHTML = '';
  const change_jsonColorObj = jsonColorObj[document.getElementById('soilColorText__horiz1_Input').value];
  for (const el in change_jsonColorObj){
    master = String(change_jsonColorObj[el]).split(' ');

    hue = master[0];
    
    minster = master[1].split('-');
    val = minster[0];
    chroma = minster[1];




  // Loop through the keys in the JSON data
  for (const key in jsonObj) {
      if (jsonObj[key].h == hue && jsonObj[key].V == val && jsonObj[key].C == chroma) {
          const radio_ID = `${jsonObj[key].h}__${jsonObj[key].V}_${jsonObj[key].C}`;
          const radio_text = `${jsonObj[key].h} ${jsonObj[key].V}/${jsonObj[key].C}`;
          const hex_color = jsonObj[key].hex;

          const newDiv = `<div id="${radio_ID}_pannel" class="horizonO_selectors" style="background-color:${hex_color}"><input type="radio" name="horizonO_color" id="${radio_ID}" value="${radio_ID}" class="toggle toggle-left"><label for="owner_plot" class="btn">${radio_text}</label></div>`;
          targetDiv.innerHTML += newDiv;

              }

      }
  }

  
  // targetDiv.innerHTML = jsonColorObj[document.getElementById('soilColorText__horiz1_Input').value];
}
);
/* --------------------------------- /soilColorText  horiz1 input --------------------------------- */
var jsonColorObj = null;
/* --------------------------------- soilColorText  horiz2 input --------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  
    // Call the server-side function to get the JSON data
    google.script.run.withSuccessHandler(function (jsonObject) {
        const inputElement = document.getElementById('soilColorText__horiz2_Input');
        const dataListElement = document.getElementById('soilColorText__horiz2_Options');

        // Loop through the keys in the JSON data
        for (const key in jsonObject) {
            const option = document.createElement('option');
            option.value = key; // Set the option value to the key
            dataListElement.appendChild(option);
        }
      jsonColorObj = jsonObject;
      return jsonColorObj;
    }).get_soilColor_JsonData();
});

document.getElementById('soilColorText__horiz2_Input').addEventListener('click', function (){
document.getElementById('soilColorText__horiz2_Input').value = "";

});
document.getElementById('soilColorText__horiz2_Input').addEventListener('change', function (){
  const targetDiv = document.getElementById('colorChoices__horiz2_container');
  targetDiv.innerHTML = '';
  const change_jsonColorObj = jsonColorObj[document.getElementById('soilColorText__horiz2_Input').value];
  for (const el in change_jsonColorObj){
    master = String(change_jsonColorObj[el]).split(' ');

    hue = master[0];
    
    minster = master[1].split('-');
    val = minster[0];
    chroma = minster[1];




  // Loop through the keys in the JSON data
  for (const key in jsonObj) {
      if (jsonObj[key].h == hue && jsonObj[key].V == val && jsonObj[key].C == chroma) {
          const radio_ID = `${jsonObj[key].h}__${jsonObj[key].V}_${jsonObj[key].C}`;
          const radio_text = `${jsonObj[key].h} ${jsonObj[key].V}/${jsonObj[key].C}`;
          const hex_color = jsonObj[key].hex;

          const newDiv = `<div id="${radio_ID}_pannel" class="horizonO_selectors" style="background-color:${hex_color}"><input type="radio" name="horizonO_color" id="${radio_ID}" value="${radio_ID}" class="toggle toggle-left"><label for="owner_plot" class="btn">${radio_text}</label></div>`;
          targetDiv.innerHTML += newDiv;

              }

      }
  }

  
  // targetDiv.innerHTML = jsonColorObj[document.getElementById('soilColorText__horiz2_Input').value];
}
);
/* --------------------------------- /soilColorText  horiz2 input --------------------------------- */
var jsonColorObj = null;
/* --------------------------------- soilColorText  horiz3 input --------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  
    // Call the server-side function to get the JSON data
    google.script.run.withSuccessHandler(function (jsonObject) {
        const inputElement = document.getElementById('soilColorText__horiz3_Input');
        const dataListElement = document.getElementById('soilColorText__horiz3_Options');

        // Loop through the keys in the JSON data
        for (const key in jsonObject) {
            const option = document.createElement('option');
            option.value = key; // Set the option value to the key
            dataListElement.appendChild(option);
        }
      jsonColorObj = jsonObject;
      return jsonColorObj;
    }).get_soilColor_JsonData();
});

document.getElementById('soilColorText__horiz3_Input').addEventListener('click', function (){
document.getElementById('soilColorText__horiz3_Input').value = "";

});
document.getElementById('soilColorText__horiz3_Input').addEventListener('change', function (){
  const targetDiv = document.getElementById('colorChoices__horiz3_container');
  targetDiv.innerHTML = '';
  const change_jsonColorObj = jsonColorObj[document.getElementById('soilColorText__horiz3_Input').value];
  for (const el in change_jsonColorObj){
    master = String(change_jsonColorObj[el]).split(' ');

    hue = master[0];
    
    minster = master[1].split('-');
    val = minster[0];
    chroma = minster[1];




  // Loop through the keys in the JSON data
  for (const key in jsonObj) {
      if (jsonObj[key].h == hue && jsonObj[key].V == val && jsonObj[key].C == chroma) {
          const radio_ID = `${jsonObj[key].h}__${jsonObj[key].V}_${jsonObj[key].C}`;
          const radio_text = `${jsonObj[key].h} ${jsonObj[key].V}/${jsonObj[key].C}`;
          const hex_color = jsonObj[key].hex;

          const newDiv = `<div id="${radio_ID}_pannel" class="horizonO_selectors" style="background-color:${hex_color}"><input type="radio" name="horizonO_color" id="${radio_ID}" value="${radio_ID}" class="toggle toggle-left"><label for="owner_plot" class="btn">${radio_text}</label></div>`;
          targetDiv.innerHTML += newDiv;

              }

      }
  }

  
  // targetDiv.innerHTML = jsonColorObj[document.getElementById('soilColorText__horiz3_Input').value];
}
);
/* --------------------------------- /soilColorText  horiz3 input --------------------------------- */

/* ---------------------- landPrep table --------------------------*/
//fieldOps
document.getElementById('land_prep_physical_yes').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_fieldOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = !this.checked;
    }
});  
document.getElementById('land_prep_physical_no').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_fieldOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = this.checked;
    }
});
//fert
document.getElementById('land_prep_fert_yes').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_fertOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = !this.checked;
    }
});  
document.getElementById('land_prep_fert_no').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_fertOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = this.checked;
    }
});
//seeding
document.getElementById('land_prep_greenM_yes').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_seedingOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = !this.checked;
    }
});  
document.getElementById('land_prep_greenM_no').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_seedingOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = this.checked;
    }
});
// herbicide
document.getElementById('land_prep_herbicide_yes').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_herbOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = !this.checked;
    }
});  
document.getElementById('land_prep_herbicide_no').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_herbOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = this.checked;
    }
});
// pesticide
document.getElementById('land_prep_pesticide_yes').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_pestOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = !this.checked;
    }
});  
document.getElementById('land_prep_pesticide_no').addEventListener('change', function (){
    var elements = document.getElementsByClassName('prep_pestOps');
    for(var i = 0; i < elements.length; i++) {
        elements[i].hidden = this.checked;
    }
});
/* ---------------------- /landPrep table --------------------------*/
      /* -------------------------------------- mech vs man harvest -------------------------------------- */
      document.getElementById('harvest_Mech').addEventListener('change', function () {
      const harvest_Mech = document.getElementById('harvest_Mech').value;
      document.getElementById('harvest_Mech_container').hidden = harvest_Mech == 0;
      const harvest_Man = document.getElementById('harvest_Man').value;
      document.getElementById('harvest_Man_container').hidden = harvest_Man == 0;
      });

      document.getElementById('harvest_Man').addEventListener('change', function () {
      const harvest_Man = document.getElementById('harvest_Man').value;
      document.getElementById('harvest_Man_container').hidden = harvest_Man == 0;
      const harvest_Mech = document.getElementById('harvest_Mech').value;
      document.getElementById('harvest_Mech_container').hidden = harvest_Mech == 0;
      });
      /* -------------------------------------- /mech vs man harvest -------------------------------------- */
    }