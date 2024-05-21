function main6() {
// Calculate the desired scaling factor (e.g., .5 for 150% growth)
const scaleYFactor = 0.01;//0.001; // Adjust as needed
let isMouseDown = false; // Flag to track mouse button state
let prevY = null; // Initialize the previous Y-coordinate
let currentY = null;
let current_svg = null;
const init_profile_values = new Object(); // the loading of the values is done on document load in vineyard_js.html
// console.log(init_profile_values)


// Get the div containing the svgs
const svgContainer = document.getElementById("svgContainer"); // Replace with your actual container ID

// Get all SVG elements within the container
const svgElements = svgContainer.querySelectorAll("svg");

// Iterate through each SVG element: we are excluding "surface_svg"& "bedrock_svg" from the event listener since they needn't be intercative
svgElements.forEach((svgElement) => {
  if (svgElement !== document.getElementById("surface_svg") && svgElement !== document.getElementById("bedrock_svg")) {


// Add the init values of the svg height to init_profile_values
svgElement.addEventListener("load", () => {
  init_profile_values['humus_value'] = parseFloat(window.getComputedStyle(document.getElementById('humus_svg_div')).getPropertyValue("height").replace("px", ""));
  init_profile_values['topsoil_value'] = parseFloat(window.getComputedStyle(document.getElementById('topsoil_svg_div')).getPropertyValue("height").replace("px", ""));
  init_profile_values['subsoil_value'] = parseFloat(window.getComputedStyle(document.getElementById('subsoil_svg_div')).getPropertyValue("height").replace("px", ""));
  init_profile_values['weatheredRockFragments_value'] = parseFloat(window.getComputedStyle(document.getElementById('weatheredRockFragments_svg_div')).getPropertyValue("height").replace("px", ""));
      });

    // Event listener for mouse down
    svgElement.addEventListener("mousedown", () => {
      // The ids chosen chosen in the svg construction allow using string operations to get the id of the groups to be transformed within the main svg element
      current_svg = svgElement.getElementById(svgElement.id.split('_')[0])
      // Set MouseDown to 'true'. Essentially enabling the execution of the mousemove event listener on the intended elements
      isMouseDown = true;
      // Update the previous Y-coordinate
      prevY = currentY;
    });
  }
});

// Event listener for mouse up
window.addEventListener("mouseup", () => {
      // console.log(init_profile_values)
  // Set MouseDown to 'false'. Eshuring the animation stops once the user releases the mouse button, even if there is still mouse movement
  isMouseDown = false;
  // Set the prevY to nul so it will not use it in calculating on the next click
  prevY = null;
});

// Event listener for mouse move
window.addEventListener("mousemove", (event) => {
  // Declare the variable needed to store the direction of the movement
  let signal = null;

  // check if mouse is clicked (see line 22)
  if (isMouseDown) {
    // get the mouse curent Y coordinate
    const currentY = event.clientY;

    // console.log(current_svg)
    if (current_svg) {
        // console.log(current_svg.id);

      // Get the movement direction in the y coordinate: North (-1) OR South (1)
      if (prevY !== null) {
        // Compare with the previous Y-coordinate
        if (currentY > prevY) {
          // console.log("Mouse moving down");
          signal = 1;
        } else if (currentY < prevY) {
          // console.log("Mouse moving up");
          signal = -1;
        }
      }

      // Get the transform matrix of the svg group being handled
      const currentTransform = current_svg.getAttribute("transform");
      // console.log(currentTransform)     

      // Calculate the new transformation matrix for the svg group being handled
      if (currentTransform !== null) {
        const matrix_data = currentTransform.split('(')[1].split(')')[0].split(',')
        const ty = parseFloat(matrix_data[5]) + parseFloat(matrix_data[5]) * signal * scaleYFactor;//parseFloat(matrix_data[5]) + signal * scaleYFactor * (currentY - prevY);
        const sy = parseFloat(matrix_data[3]) + parseFloat(matrix_data[3]) * signal * scaleYFactor;
        newTransform = `matrix(${matrix_data[0]},${matrix_data[1]},${matrix_data[2]},${sy},${matrix_data[4]},${ty})`;
      } else {
        newTransform = `matrix(0,0,0,${1 + 1 * signal * scaleYFactor},0,${1 + 1 * signal * scaleYFactor})`;
      }

      // console.log( 'oldTransform: ', currentTransform)
      // console.log( 'newTransform: ', newTransform) 

      // Update the svg viewbox and height attributes
      const svg_parent = current_svg.closest('svg');
      const original_viewBox = svg_parent.getAttribute("viewBox").split(' ');
      const original_height = svg_parent.getAttribute("height");
      svg_parent.setAttribute('viewBox', `${original_viewBox[0]} ${original_viewBox[1]} ${original_viewBox[2]} ${parseFloat(original_viewBox[3]) + parseFloat(original_viewBox[3])* signal * scaleYFactor}`)
      svg_parent.setAttribute('height', `${parseFloat(original_height) + parseFloat(original_height)* signal * scaleYFactor}`)
      
      // Update the goup transform attribute to apply vertical scaling
      current_svg.setAttribute("transform", newTransform);

document.getElementById(String(current_svg.id) + '_value').textContent = String(Math.round(document.getElementById(String(current_svg.id) + '_svg_div').getBoundingClientRect().height*(1/3) *10) /10) + ' cm';


// String(Math.round(parseFloat(window.getComputedStyle(document.getElementById(String(current_svg.id) + '_svg_div')).getPropertyValue("height").replace("px", ""))*(1/3) *100) /100) + ' cm';



      // Update the previous Y-coordinate
      prevY = currentY;

    }

  }

});


/* --------------------------------- handles the menu tabs --------------------------------- */
function openDivSoil(e, answerName) {
  e.preventDefault();
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentSoil");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinksSoil");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // document.getElementById(answerName).style.display = "inline-flex";//"block";
  document.getElementById(answerName).style = "display: inline-flex;justify-content: space-evenly;";
  e.currentTarget.className += " active";
}
 // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenSoil").click();
/* --------------------------------- /handles the menu tabs --------------------------------- */
}