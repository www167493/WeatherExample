var yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const weather = require('./geocode/weather.js');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv.address);


geocode.geocodeAddress(argv.address).then((res)=>{
  console.log(res)
  return weather.getWeather(res.Latitude, res.Longitude)
}).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err)
})


// geocode.geocodeAddress(argv.address, '23',(err, res)=>{
//   if(err){
//     console.log(err);
//   } else{
//     console.log(JSON.stringify(res, undefined, 2));
//     weather.getWeather(res.Latitude,res.Longitude,(err,weatherRes) =>{
//       if(err){
//         console.log(err);
//       }else{
//         console.log(JSON.stringify(weatherRes, undefined, 2));
//       }
//     })
//   }
// });


//https://api.darksky.net/forecast/c87dfa124da064bbb5a0a817a9eb3336

// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1%20University%20Ave,%20Illionais',
//   json: true
// }, (error, response, body) => {
//   console.log(body);
// });
