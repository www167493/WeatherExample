const yargs = require('yargs');
const axios = require('axios');


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

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)},&Key=AIzaSyAe8SrjO02i7-QMHLndJQ3feRE9MZY6uno`;

axios.get(geocodeUrl).then((response) =>{
  console.log(response);
})
