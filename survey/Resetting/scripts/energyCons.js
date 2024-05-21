document.addEventListener("DOMContentLoaded", function() {
    const externalSupplyMetersInput = document.getElementById("ElectricityMeterID");
    const electricityFieldsContainer = document.getElementById("ElectricityFields");

    externalSupplyMetersInput.addEventListener("input", function() {
    electricityFieldsContainer.innerHTML = ""; // Clear previous fields

const numMeters = parseInt(this.value);
    for (let i = 0; i < numMeters; i++) {
        const label = document.createElement("label");
        label.textContent = `Electricity meter ${i + 1}: `;
        const input = document.createElement("input");
        input.type = "number";
        input.name = `electricity_meter_${i + 1}`;
        input.placeholder = "Amount";
        const unit = document.createElement("span");
        unit.textContent = " kWh";
        const br = document.createElement("br");
            
        electricityFieldsContainer.appendChild(label);
        electricityFieldsContainer.appendChild(input);
        electricityFieldsContainer.appendChild(unit);
        electricityFieldsContainer.appendChild(br);
        }
    });
});