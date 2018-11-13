
const yargs=require('yargs');
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');
const argv=yargs.option({
  a:{
    demand:true,
    alias:'address',
    describe:'address to fetch weather',
    string:true
  }
}).help().alias('h','help').argv;
geocode.geocodeAddress(argv.a,(errorMessage,results)=>{
  if(errorMessage){
    console.log(errorMessage);
  }else if(results){
    console.log(results.Address);
    weather.getweather(results.Latutide,results.Longitide,(errorMsg,weatherresults)=>{
      if(errorMsg)
      {
        console.log(errorMsg);
      }else if(results){
        console.log(`Ubushyuhe buriho ubu ${weatherresults.curtemp}.Buri hafi Ya ${weatherresults.apptemp} Murakoze!`);
      }
    });

  }
});
