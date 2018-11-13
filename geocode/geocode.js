const request=require('request');
var geocodeAddress=(address , callback)=>{
  var encode=encodeURIComponent(address);

  request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=na63ASxGWVZWHSltMN3rnKZgsyaqHrzp&location=${encode}`,
    json:true
  },(error, response, body)=>{
    if(error){
      callback('Unable to connect to the internet');

    }
    else if(body.info.statuscode===400){
      callback('Invalid Address');
    }
    else if (body.info.statuscode===0) {
      callback(undefined,{
        Address:body.results[0].providedLocation.location,
        Latutide:body.results[0].locations[0].latLng.lat,
        Longitide:body.results[0].locations[0].latLng.lng
      }
    );

  }else{
    console.log(error);
  }

  });
};
module.exports={
  geocodeAddress
};
//c3f4b092b9f7646fc8e0d338cf13f4bd
