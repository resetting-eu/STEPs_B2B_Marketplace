function addProductRefri(type, button) {
    var parentDiv = button.parentElement;
    var productDiv = document.createElement("div");
    productDiv.innerHTML = "<h3>Product</h3>" +
        "<label for='product_name'>Product Name: </label>" +
        "<select id='product_name' name='product_name[]'>" +
        "<option value='Product 1'>R-404A</option>" +
        "<option value='Product 2'>R-407A</option>" +
        "<option value='Product 3'>R-407C</option>" +
        "<option value='Product 4'>R-407F</option>" +
        "<option value='Product 5'>R-407H</option>" +
        "<option value='Product 6'>R-410A</option>" +
        "<option value='Product 7'>R-413A</option>" +
        "<option value='Product 8'>R-417A</option>" +
        "<option value='Product 9'>R-417B</option>" +
        "<option value='Product 10'>R-422A</option>" +
        "<option value='Product 11'>R-422B</option>" +
        "<option value='Product 12'>R-422D</option>" +
        "<option value='Product 13'>R-423A</option>" +
        "<option value='Product 14'>R-424A</option>" +
        "<option value='Product 15'>R-427A</option>" +
        "<option value='Product 16'>R-428A</option>" +
        "<option value='Product 17'>R-434A</option>" +
        "<option value='Product 18'>R-437A</option>" +
        "<option value='Product 19'>R-438A</option>" +
        "<option value='Product 20'>R-448A</option>" +
        "<option value='Product 21'>R-449A</option>" +
        "<option value='Product 22'>R-450A</option>" +
        "<option value='Product 23'>R-452A</option>" +
        "<option value='Product 24'>R-453A</option>" +
        "<option value='Product 25'>R-454A</option>" +
        "<option value='Product 26'>R-454B</option>" +
        "<option value='Product 27'>R-454C</option>" +
        "<option value='Product 28'>R-456A</option>" +
        "<option value='Product 29'>R-473A</option>" +
        "<option value='Product 30'>R-507A</option>" +
        "<option value='Product 31'>R-508A</option>" +
        "<option value='Product 32'>R-508B</option>" +
        "<option value='Product 33'>R-513A</option>" +
        "<option value='Product 34'>R-515B</option>" +
        "<option value='Product 35'>HFE-125</option>" +
        "<option value='Product 36'>HFE-134 (HG-00)</option>" +
        "<option value='Product 37'>HFE-143a</option>" +
        "<option value='Product 38'>HCFE-235da2 (isofluorane)</option>" +
        "<option value='Product 39'>HFE-245cb2</option>" +
        "<option value='Product 40'>HFE-245fa2</option>" +
        "<option value='Product 41'>HFE-254cb2</option>" +
        "<option value='Product 42'>HFE-347 mcc3 (HFE-7000)</option>" +
        "<option value='Product 43'>HFE-347pcf2</option>" +
        "<option value='Product 44'>HFE-356pcc3</option>" +
        "<option value='Product 45'>HFE-449sl (HFE-7100)</option>" +
        "<option value='Product 46'>HFE-569sf2 (HFE-7200)</option>" +
        "<option value='Product 47'>HFE-43-10pccc124 (H-Galden 1040x) HG-11</option>" +
        "<option value='Product 48'>HFE-236ca12 (HG-10)</option>" +
        "<option value='Product 49'>HFE-338pcc13 (HG-01)</option>" +
        "<option value='Product 50'HFE-347mmy1></option>" +
        "<option value='Product 51'>2,2,3,3,3-pentafluoropropanol</option>" +
        "<option value='Product 52'>bis(trifluoromethyl)-methanol</option>" +
        "<option value='Product 53'>HFE-227ea</option>" +
        "<option value='Product 54'>HFE-236ea2 (desfluoran)</option>" +
        "<option value='Product 55'>HFE-236fa</option>" +
        "<option value='Product 56'>HFE-245fa1</option>" +
        "<option value='Product 57'>HFE 263fb2</option>" +
        "<option value='Product 58'>HFE-329 mcc2</option>" +
        "<option value='Product 59'>HFE-338 mcf2</option>" +
        "<option value='Product 60'>HFE-338mmz1</option>" +
        "<option value='Product 61'>HFE-347 mcf21</option>" +
        "<option value='Product 62'>HFE-356 mec3</option>" +
        "<option value='Product 63'>HFE-356mm1</option>" +
        "<option value='Product 64'>HFE-356pcf2</option>" +
        "<option value='Product 65'>HFE-356pcf3</option>" +
        "<option value='Product 66'>HFE 365 mcf3</option>" +
        "<option value='Product 67'>HFE-374pc2</option>" +
        "<option value='Product 68'>HFCs</option>" +
        "<option value='Product 69'>HFC-23</option>" +
        "<option value='Product 70'>HFC-32</option>" +
        "<option value='Product 71'>HFC-41</option>" +
        "<option value='Product 72'>HFC-125</option>" +
        "<option value='Product 73'>HFC-134</option>" +
        "<option value='Product 74'>HFC-134a</option>" +
        "<option value='Product 75'>HFC-143</option>" +
        "<option value='Product 76'>HFC-143a</option>" +
        "<option value='Product 77'>HFC-152</option>" +
        "<option value='Product 78'>HFC-152a</option>" +
        "<option value='Product 79'>HFC-161</option>" +
        "<option value='Product 80'>HFC-227ea</option>" +
        "<option value='Product 81'>HFC-236cb</option>" +
        "<option value='Product 82'>HFC-236ea</option>" +
        "<option value='Product 83'>HFC-236fa</option>" +
        "<option value='Product 84'>HFC-245ca</option>" +
        "<option value='Product 85'>HFC-245fa</option>" +
        "<option value='Product 86'>HFC-365 mfc</option>" +
        "<option value='Product 87'>HFC-43-10 mee</option>" +
        "<option value='Product 88'>Other_perfluorinated_compounds</option>" +
        "<option value='Product 89'>perfluoropolymethylisopropyl-ether (PFPMIE)</option>" +
        "<option value='Product 90'>nitrogen trifluoride</option>" +
        "<option value='Product 91'>trifluoromethyl sulphur pentafluoride</option>" +
        "<option value='Product 92'>perfluorocyclopropane</option>" +
        "<option value='Product 93'>PFCs</option>" +
        "<option value='Product 94'>PFC-14</option>" +
        "<option value='Product 95'>PFC-116</option>" +
        "<option value='Product 96'>PFC-218</option>" +
        "<option value='Product 97'>PFC-3-1-10</option>" +
        "<option value='Product 98'>PFC-4-1-12</option>" +
        "<option value='Product 99'>PFC-5-1-14</option>" +
        "<option value='Product 100'>PFC-c-318</option>" +
        "</select><br><br>" +
        "<label for='product_description'>Product Description: </label>" +
        "<textarea id='product_description' name='product_description[]' rows='3' cols='30'></textarea><br>" +
        "<label for='product_percentage'>Percentage of Total Business Volume:</label>" +
        "<input type='range' id='product_percentage' name='product_percentage[]' min='0' max='100'>" +
        "<span id='product_percentage_value'>0%</span><br><br>" +
        "<button type='button' onclick='removeProduct(this)'>Remove Product</button>"; // Adicionando um botão para remover o produto
    parentDiv.insertBefore(productDiv, button.nextSibling);

    var slider = productDiv.querySelector("input[type=range]");
    var output = productDiv.querySelector("span");
    output.innerHTML = slider.value + "%";

    slider.oninput = function() {
        output.innerHTML = this.value + "%";
    };
}

function remove(button) {
    var productDiv = button.parentElement;
    productDiv.parentNode.removeChild(productDiv);
}