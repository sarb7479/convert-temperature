
function convertTemperature() {
    var temperatureType = document.querySelector('input[name="temperatureType"]:checked').value;
    var temperature = parseFloat(document.getElementById("temperature").value);
    var result;
    
    if (isNaN(temperature)) {
        alert("Please enter a valid temperature value.");
        return;
    }
    if (temperatureType === "Celsius") {
        result = (temperature - 32) * 5 / 9;
        document.getElementById("temperatureResultDisplay").textContent = result.toFixed(2) + " °C";
    } else if (temperatureType === "Fahrenheit") {
        result = (temperature * 9 / 5) + 32;
        document.getElementById("temperatureResultDisplay").textContent = result.toFixed(2) + " °F";
    }
    
    return result;
}

function overallGrade() {
    var assignmentGrade = parseFloat(document.getElementById("assignmentGrade").value);
    var midtermGrade = parseFloat(document.getElementById("midtermGrade").value);
    var finalProjectGrade = parseFloat(document.getElementById("finalProjectGrade").value);
    var participationGrade = parseFloat(document.getElementById("participationGrade").value);
    var largest = Math.max(assignmentGrade, midtermGrade, finalProjectGrade, participationGrade);

    var overallGrade = ((0.30 * assignmentGrade) + (0.25 * midtermGrade) + (0.30 * finalProjectGrade) + (0.10 * participationGrade) + (0.05 * largest));
    document.getElementById("gradeResultDisplay").textContent = overallGrade.toFixed(2);
    return overallGrade
}
