document.querySelectorAll('input[type="checkbox"][name="WaterSources"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        createWaterConsumptionFields();
    });
});

function createWaterConsumptionFields() {
    var container = document.getElementById("WaterConsumptionFields");
    container.innerHTML = ''; // Limpa qualquer conteúdo anterior

    document.querySelectorAll('input[type="checkbox"][name="WaterSources"]:checked').forEach(function(checkbox) {
        var sourceLabel = checkbox.value;
        var fieldSet = document.createElement("fieldset");
        fieldSet.innerHTML = "<legend>" + sourceLabel + "</legend>" +
            "<label for='" + sourceLabel.replace(/\s+/g, '_').toLowerCase() + "_consumption'>Water Consumption (m³):</label>" +
            "<input type='number' id='" + sourceLabel.replace(/\s+/g, '_').toLowerCase() + "_consumption' name='" + sourceLabel.replace(/\s+/g, '_').toLowerCase() + "_consumption'><br><br>";
        container.appendChild(fieldSet);
    });
}