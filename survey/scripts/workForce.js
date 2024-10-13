const femaleEmployeesPercentage = document.getElementById("PercentageFemaleEmployees");
const femaleEmployeesPercentageValue = document.getElementById("PercentageFemaleEmployeesValue");
const maleEmployeesPercentage = document.getElementById("PercentageMaleEmployees");
const maleEmployeesPercentageValue = document.getElementById("PercentageMaleEmployeesValue");
                    

femaleEmployeesPercentage.addEventListener("input", function() {
femaleEmployeesPercentageValue.textContent = this.value + "%";
});

maleEmployeesPercentage.addEventListener("input", function() {
maleEmployeesPercentageValue.textContent = this.value + "%";
});

const foreignEmployeesPercentage = document.getElementById("PercentageForeignEmployees");
const foreignEmployeesPercentageValue = document.getElementById("PercentageForeignEmployeesValue");
const nationalEmployeesPercentage = document.getElementById("PercentageNationalEmployees");
const nationalEmployeesPercentageValue = document.getElementById("PercentageNationalEmployeesValue");

foreignEmployeesPercentage.addEventListener("input", function() {
foreignEmployeesPercentageValue.textContent = this.value + "%";
});

nationalEmployeesPercentage.addEventListener("input", function() {
nationalEmployeesPercentageValue.textContent = this.value + "%";
}); 