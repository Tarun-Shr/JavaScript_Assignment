/*
2. Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C

 */

"use strict"

function toFahrenheit(celsius){
    return 32 + (9*celsius)/5;
}
function toCelsius(fahrenheit){
    return ((fahrenheit-32)*5)/9;
}

console.log('60°C is %d °F',toFahrenheit(60))
console.log('45°F is %d °C',toCelsius(45))