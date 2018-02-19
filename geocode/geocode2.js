var request = require('request');
var yargs = require('yargs');

var geocodeAddress = (address) =>{
  return new Promise((resolve, reject)=>{
    request({
      url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)},&Key=AIzaSyAe8SrjO02i7-QMHLndJQ3feRE9MZY6uno`,
      json: true
    },(error, response, body) =>{
      if(error){
        reject('Unable to Connect to Google Servers')
      }else{
        resolve({
        Address : body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
        })
      }
    })
  })
}



module.exports.geocodeAddress = geocodeAddress;
