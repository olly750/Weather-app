const request=require('request');
var getweather =(lat,log,callback)=>{
request({
  url:`https://api.darksky.net/forecast/c3f4b092b9f7646fc8e0d338cf13f4bd/${lat},${log}`,
  json:true
},(error,response,body)=>{
  if(!error && response.statusCode === 200){
    callback(undefined,{
      curtemp:body.currently.temperature,
      apptemp:body.currently.apparentTemperature
    });
  }else{
    callback('Ntabwo Igerayo!');
  }
});
};
module.exports.getweather=getweather;
