var request = require('request');

var Longitude = -87.86479609999999;
var Latitude = 41.1908177;

// var getWeather = (Latitude, Longitude, callback) =>{
//   request({
//     url:`https://api.darksky.net/forecast/c87dfa124da064bbb5a0a817a9eb3336/${Latitude},${Longitude}`,
//     json: true
//   },(error, response, body) =>{
//     console.log(body.currently.temperature);
//     if(error){
//       callback('Unable to connect to Google servers')
//     }else if (body.code ===400) {
//       callback(body.error);
//     }else
//     {
//
//       callback(undefined, {
//         'Current Weather': body.currently.temperature
//       })
//     }
//   })
// }

var getWeather = (Latitude, Longitude)=>{
  return new Promise((resolve, reject)=>{
    request({
       url:`https://api.darksky.net/forecast/c87dfa124da064bbb5a0a817a9eb3336/${Latitude},${Longitude}`,
       json: true
     },(error, response, body) =>{
       if(error){
         reject('Unable to Connect to darksky')
       }else{
         resolve(body.currently.temperature)
       }
     }
   )})}

module.exports.getWeather = getWeather;
