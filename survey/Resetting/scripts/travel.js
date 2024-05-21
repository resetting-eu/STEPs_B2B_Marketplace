function createFields(containerId, count) {
    var container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa qualquer conteúdo anterior

    for (var i = 0; i < count; i++) {
        var fieldSet = document.createElement("fieldset");
        fieldSet.innerHTML = "<legend>Trip " + (i + 1) + "</legend>" +
            "<label for='origin_" + containerId + "_" + i + "'>Origin:</label>" +
            "<input type='text' id='origin_" + containerId + "_" + i + "' name='origin_" + containerId + "[]'><br><br>" +
            "<label for='destination_" + containerId + "_" + i + "'>Destination:</label>" +
            "<input type='text' id='destination_" + containerId + "_" + i + "' name='destination_" + containerId + "[]'><br><br>" +
            "<label for='duration_" + containerId + "_" + i + "'>Duration of stay (days):</label>" +
            "<input type='number' id='duration_" + containerId + "_" + i + "' name='duration_" + containerId + "[]'><br><br>" +
            "<label for='employees_" + containerId + "_" + i + "'>Number of employees that travelled:</label>" +
            "<input type='number' id='employees_" + containerId + "_" + i + "' name='employees_" + containerId + "[]'><br><br>";
        container.appendChild(fieldSet);
    }
}

document.getElementById("AirTripCount").addEventListener("change", function() {
    var count = parseInt(this.value);
    createFields("AirTripFields", count);
});

document.getElementById("RailTripCount").addEventListener("change", function() {
    var count = parseInt(this.value);
    createFields("RailTripFields", count);
});

document.getElementById("RoadTripCount").addEventListener("change", function() {
    var count = parseInt(this.value);
    createFields("RoadTravelFields", count);
});