var request = require('request');
var yargs = require('yargs');

var geocodeAddress = (address, testnum , callback) =>{
  console.log(testnum)
  request({
    url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)},&Key=AIzaSyAe8SrjO02i7-QMHLndJQ3feRE9MZY6uno`,
    json: true

  },(error, response, body)=>{
    //console.log(body)
    if(error){
      callback('Unable to connect to Google servers')
      // console.log('Unable to connect to Google servers');
    }else if (body.status ==='Zero_Result') {
      callback('Unable to find that address');
    }else
    {
      callback(undefined, {
        Address : body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      })
      // console.log(`Address: ${body.results[0].formatted_address}`);
      // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      // console.log(`Logitude: ${body.results[0].geometry.location.lng}`);
    }
  })
}

module.exports.geocodeAddress = geocodeAddress;
