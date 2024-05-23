
    let productCounter = 0;

    function addProductRefri(section) {
        var sectionDiv = document.getElementById(section + '-products');
        var newProduct = document.createElement('div');
        productDiv.className = 'product-entry';
        productDiv.id = `${section}-product-${productCounter}`;
        const productHTML = `
            <h3>Product</h3>
            <label for='product_name_${section}_${productCounter}'>Product Name: </label>
            <select id='product_name_${section}_${productCounter}' name='product_name_${section}[]'>
            <option value='R-404A'>R-404A</option>
            <option value='R-407A'>R-407A</option>
            <option value='R-407C'>R-407C</option>
            <option value='R-407F'>R-407F</option>
            <option value='R-407H'>R-407H</option>
            <option value='R-410A'>R-410A</option>
            <option value='R-413A'>R-413A</option>
            <option value='R-417A'>R-417A</option>
            <option value='R-417B'>R-417B</option>
            <option value='R-422A'>R-422A</option>
            <option value='R-422B'>R-422B</option>
            <option value='R-422D'>R-422D</option>
            <option value='R-423A'>R-423A</option>
            <option value='R-424A'>R-424A</option>
            <option value='R-427A'>R-427A</option>
            <option value='R-428A'>R-428A</option>
            <option value='R-434A'>R-434A</option>
            <option value='R-437A'>R-437A</option>
            <option value='R-438A'>R-438A</option>
            <option value='R-448A'>R-448A</option>
            <option value='R-449A'>R-449A</option>
            <option value='R-450A'>R-450A</option>
            <option value='R-452A'>R-452A</option>
            <option value='R-453A'>R-453A</option>
            <option value='R-454A'>R-454A</option>
            <option value='R-454B'>R-454B</option>
            <option value='R-454C'>R-454C</option>
            <option value='R-456A'>R-456A</option>
            <option value='R-473A'>R-473A</option>
            <option value='R-507A'>R-507A</option>
            <option value='R-508A'>R-508A</option>
            <option value='R-508B'>R-508B</option>
            <option value='R-513A'>R-513A</option>
            <option value='R-515B'>R-515B</option>
            <option value='HFE-125'>HFE-125</option>
            <option value='HFE-134 (HG-00)'>HFE-134 (HG-00)</option>
            <option value='HFE-143a'>HFE-143a</option>
            <option value='HCFE-235da2 (isofluorane)'>HCFE-235da2 (isofluorane)</option>
            <option value='HFE-245cb2'>HFE-245cb2</option>
            <option value='HFE-245fa2'>HFE-245fa2</option>
            <option value='HFE-254cb2'>HFE-254cb2</option>
            <option value='HFE-347 mcc3 (HFE-7000)'>HFE-347 mcc3 (HFE-7000)</option>
            <option value='HFE-347pcf2'>HFE-347pcf2</option>
            <option value='HFE-356pcc3'>HFE-356pcc3</option>
            <option value='HFE-449sl (HFE-7100)'>HFE-449sl (HFE-7100)</option>
            <option value='HFE-569sf2 (HFE-7200)'>HFE-569sf2 (HFE-7200)</option>
            <option value='HFE-43-10pccc124 (H-Galden 1040x) HG-11'>HFE-43-10pccc124 (H-Galden 1040x) HG-11</option>
            <option value='HFE-236ca12 (HG-10)'>HFE-236ca12 (HG-10)</option>
            <option value='HFE-338pcc13 (HG-01)'>HFE-338pcc13 (HG-01)</option>
            <option value='HFE-347mmy1'>HFE-347mmy1</option>
            <option value='2,2,3,3,3-pentafluoropropanol'>2,2,3,3,3-pentafluoropropanol</option>
            <option value='bis(trifluoromethyl)-methanol'>bis(trifluoromethyl)-methanol</option>
            <option value='HFE-227ea'>HFE-227ea</option>
            <option value='HFE-236ea2 (desfluoran)'>HFE-236ea2 (desfluoran)</option>
            <option value='HFE-236fa'>HFE-236fa</option>
            <option value='HFE-245fa1'>HFE-245fa1</option>
            <option value='HFE 263fb2'>HFE 263fb2</option>
            <option value='HFE-329 mcc2'>HFE-329 mcc2</option>
            <option value='HFE-338 mcf2'>HFE-338 mcf2</option>
            <option value='HFE-338mmz1'>HFE-338mmz1</option>
            <option value='HFE-347 mcf21'>HFE-347 mcf21</option>
            <option value='HFE-356 mec3'>HFE-356 mec3</option>
            <option value='HFE-356mm1'>HFE-356mm1</option>
            <option value='HFE-356pcf2'>HFE-356pcf2</option>
            <option value='HFE-356pcf3'>HFE-356pcf3</option>
            <option value='HFE 365 mcf3'>HFE 365 mcf3</option>
            <option value='HFE-374pc2'>HFE-374pc2</option>
            <option value='HFCs'>HFCs</option>
            <option value='HFC-23'>HFC-23</option>
            <option value='HFC-32'>HFC-32</option>
            <option value='HFC-41'>HFC-41</option>
            <option value='HFC-125'>HFC-125</option>
            <option value='HFC-134'>HFC-134</option>
            <option value='HFC-134a'>HFC-134a</option>
            <option value='HFC-143'>HFC-143</option>
            <option value='HFC-143a'>HFC-143a</option>
            <option value='HFC-152'>HFC-152</option>
            <option value='HFC-152a'>HFC-152a</option>
            <option value='HFC-161'>HFC-161</option>
            <option value='HFC-227ea'>HFC-227ea</option>
            <option value='HFC-236cb'>HFC-236cb</option>
            <option value='HFC-236ea'>HFC-236ea</option>
            <option value='HFC-236fa'>HFC-236fa</option>
            <option value='HFC-245ca'>HFC-245ca</option>
            <option value='HFC-245fa'>HFC-245fa</option>
            <option value='HFC-365 mfc'>HFC-365 mfc</option>
            <option value='HFC-43-10 mee'>HFC-43-10 mee</option>
            <option value='Other_perfluorinated_compounds'>Other perfluorinated compounds</option>
            <option value='perfluoropolymethylisopropyl-ether (PFPMIE)'>perfluoropolymethylisopropyl-ether (PFPMIE)</option>
            <option value='nitrogen trifluoride'>nitrogen trifluoride</option>
            <option value='trifluoromethyl sulphur pentafluoride'>trifluoromethyl sulphur pentafluoride</option>
            <option value='perfluorocyclopropane'>perfluorocyclopropane</option>
            <option value='PFCs'>PFCs</option>
            <option value='PFC-14'>PFC-14</option>
            <option value='PFC-116'>PFC-116</option>
            <option value='PFC-218'>PFC-218</option>
            <option value='PFC-3-1-10'>PFC-3-1-10</option>
            <option value='PFC-4-1-12'>PFC-4-1-12</option>
            <option value='PFC-5-1-14'>PFC-5-1-14</option>
            <option value='PFC-c-318'>PFC-c-318</option>    
            </select><br>
            <label for='product_description_${section}_${productCounter}'>Product Description: </label>
            <textarea id='product_description_${section}_${productCounter}' name='product_description_${section}[]' rows='3' cols='30'></textarea><br>
            <label for='product_percentage_${section}_${productCounter}'>Percentage of Total Business Volume:</label>
            <input type='range' id='product_percentage_${section}_${productCounter}' name='product_percentage_${section}[]' min='0' max='100'>
            <span id='product_percentage_value_${section}_${productCounter}'>0%</span><br><br>`;

        productDiv.innerHTML = productHTML;
        const productsContainer = document.getElementById(`${section}-products`);
        productsContainer.appendChild(productDiv);
    }



