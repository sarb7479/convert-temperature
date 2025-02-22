
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
        document.getElementById("resultDisplay").textContent = result.toFixed(2) + " °C";
    } else if (temperatureType === "Fahrenheit") {
        result = (temperature * 9 / 5) + 32;
        document.getElementById("resultDisplay").textContent = result.toFixed(2) + " °F";
    }
    
    return result;
}