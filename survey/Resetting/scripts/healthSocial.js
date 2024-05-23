//Health care system
const healthCareSystemCheckbox = document.getElementById("HealthcareSystemProvider");
const healthCareSystemDetails = document.getElementById("HealthcareSystemDetails");

healthCareSystemCheckbox.addEventListener("change", function() {
    if (this.checked) {
        healthCareSystemDetails.style.display = "block";
    } else {
        healthCareSystemDetails.style.display = "none";
    }
});

const employeesCoveredHealthCare = document.getElementById("HealthcareSystemPercentageEmployees");
const employeesCoveredHealthCareValue = document.getElementById("HealthcareSystemPercentageEmployeesValue");

employeesCoveredHealthCare.addEventListener("input", function() {
employeesCoveredHealthCareValue.textContent = this.value + "%";
});
//Social Security
const socialSecurityCheckbox = document.getElementById("SocialSecurity");
const socialSecurityDetails = document.getElementById("SocialSecurityDetails");

socialSecurityCheckbox.addEventListener("change", function() {
    if (this.checked) {
        socialSecurityDetails.style.display = "block";
    } else {
        socialSecurityDetails.style.display = "none";
    }
});

const employeesCoveredSocialSecurity = document.getElementById("PercentageEmployeesSocialSecurity");
const employeesCoveredSocialSecurityValue = document.getElementById("PercentageEmployeesSocialSecurityValue");

employeesCoveredSocialSecurity.addEventListener("input", function() {
    employeesCoveredSocialSecurityValue.textContent = this.value + "%";
});

const noFormalEducationSlider = document.getElementById("PercentageEducationNone");
const primaryEducationSlider = document.getElementById("PercentageEducationPrimary");
const secondaryEducationSlider = document.getElementById("PercentageEducationSecondary");
const vocationalTrainingSlider = document.getElementById("PercentageEducationVocational");
const bachelorsDegreeSlider = document.getElementById("PercentageEducationBSc");
const mastersDegreeSlider = document.getElementById("PercentageEducationMSc");
const doctorateDegreeSlider = document.getElementById("PercentageEducationPhD");
const postDoctorateSlider = document.getElementById("PercentageEducationPostDoc");

const noFormalEducationValue = document.getElementById("PercentageEducationNoneValue");
const primaryEducationValue = document.getElementById("PercentageEducationPrimaryValue");
const secondaryEducationValue = document.getElementById("PercentageEducationSecondaryValue");
const vocationalTrainingValue = document.getElementById("PercentageEducationVocationalValue");
const bachelorsDegreeValue = document.getElementById("PercentageEducationBScValue");
const mastersDegreeValue = document.getElementById("PercentageEducationMScValue");
const doctorateDegreeValue = document.getElementById("PercentageEducationPhDValue");
const postDoctorateValue = document.getElementById("PercentageEducationPostDocValue");

noFormalEducationSlider.addEventListener("input", function() {
    noFormalEducationValue.textContent = this.value + "%";
});
primaryEducationSlider.addEventListener("input", function() {
    primaryEducationValue.textContent = this.value + "%";
});
secondaryEducationSlider.addEventListener("input", function() {
    secondaryEducationValue.textContent = this.value + "%";
});
vocationalTrainingSlider.addEventListener("input", function() {
    vocationalTrainingValue.textContent = this.value + "%";
});
bachelorsDegreeSlider.addEventListener("input", function() {
    bachelorsDegreeValue.textContent = this.value + "%";
});
mastersDegreeSlider.addEventListener("input", function() {
    mastersDegreeValue.textContent = this.value + "%";
});
doctorateDegreeSlider.addEventListener("input", function() {
    doctorateDegreeValue.textContent = this.value + "%";
});
postDoctorateSlider.addEventListener("input", function() {
    postDoctorateValue.textContent = this.value + "%";
});