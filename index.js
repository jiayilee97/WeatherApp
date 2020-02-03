const request = require('request');

let apiKey = 'c';
//let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const argv = require('yargs').argv;
let city = argv.c || 'portland';

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  let weather = JSON.parse(body)
let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
console.log(message);
  }

});


