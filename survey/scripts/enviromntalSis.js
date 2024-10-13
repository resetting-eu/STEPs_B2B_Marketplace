const environmentalManagementSystemSelect = document.getElementById("EnvironmentalSystem");
const certificationInfo = document.getElementById("CertificationInfo");
const environmentalAspectsSuppliersCheckbox = document.getElementById("EnvironmentalSystemStandards");
const environmentalCriteriaDiv = document.getElementById("SupplierSelectionEnvironmentalCriteria");

environmentalManagementSystemSelect.addEventListener("change", function() {
    if (this.value === "Yes" || this.value === "Under development") {
        certificationInfo.style.display = "block";
    } else {
        certificationInfo.style.display = "none";
        }
    });

environmentalAspectsSuppliersCheckbox.addEventListener("change", function() {
    if (this.checked) {
        environmentalCriteriaDiv.style.display = "block";
    } else {
        environmentalCriteriaDiv.style.display = "none";
        }
    });

// Convert checkbox value to "Yes" or "No" on click
environmentalAspectsSuppliersCheckbox.addEventListener("click", function() {
    if (this.checked) {
        this.value = "Yes";
    } else {
        this.value = "No";
    }
});