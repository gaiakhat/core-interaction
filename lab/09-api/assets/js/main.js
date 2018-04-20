// Insert your actual API request URL below

fetch('http://api.openweathermap.org/data/2.5/weather?zip=10009&APPID=af01dd27fddeb72d967a5f554010ba09&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
    });


// RENDER FUNCTION SETUP

var tempSpan = document.querySelector('.temp')
var windSpeedSpan = document.querySelector('.wind-speed')
var windDegSpan = document.querySelector('.wind-deg')
var weatherVane = document.querySelector('.weather-vane')
var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')

function render (data) {
  // LOG THE DATA IN IT'S ENTIRETY
  console.log(data);
  // LOG THE CURRENT TEMPERATURE
  console.log(data.main.temp);
  // INSERT THE TEMPERATURE
  tempSpan.innerText = data.main.temp

  // LOG THE CURRENT WINDSPEED
  console.log(data.wind.speed)
  //INSERT THE WIND SPEED
  windSpeedSpan.innerText = data.wind.speed

  // LOG THE CURRENT WIND DEGREE
  console.log(data.wind.deg)
  //INSERT THE WIND DEGREES
  windDegSpan.innerText = data.wind.deg

  // SET BACKGROUND COLOR BASED ON TEMPERATURE
  document.body.style.backgroundColor = "hsl("+ data.wind.deg +",50%,50%)"

  // ROTATE THE WEATHER VANE BASED ON WIND DIRECTION
  weatherVaneWrapper.style.transform="rotate("+data.wind.deg+"deg)"

  // SET ANIMATION DURATION OF WEATHER VANE BASED ON WIND SPEED
  weatherVane.style.animationDuration = 5 / data.wind.speed + 's'

}
