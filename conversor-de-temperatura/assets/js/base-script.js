function radioClick() {

    var optionSelected = document.querySelector('input[name="convert-temperature"]:checked').value;

    if (optionSelected == "opt-c2f")
        document.getElementById("temperature").placeholder = "Informe a temperatura em ºC";
    else
        document.getElementById("temperature").placeholder = "Informe a temperatura em ºF";

}

function celsiusParaFahrenheit(temperaturaCelsius) {

    return (9 * temperaturaCelsius / 5) + 32;

}

function fahrenheitParaCelsius(temperaturaFahrenheit) {

    return 5 * (temperaturaFahrenheit - 32) / 9;

}