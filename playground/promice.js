
var assync= (a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a==='number' && typeof b==='number')
      {
        resolve(a+b);
      }
      else{
        reject("the input is not a number")
      }
    });
  });
}

// var somepromises = new Promise((resolve,reject)=>{
// setTimeout(()=>{
//   resolve('Byakunze');
// },2500)
//
//   // reject('byanze');
// });

// somepromises.then((message)=>{
//   console.log(message);
// },(errorMessage)=>{
//   console.log(errorMessage);
// });
assync(3,'7').then((message)=>{
  console.log(message);
  return assync(message,33);
}).then((message)=>{
  console.log('now is', message);

}).catch((error)=>{
  console.log('Ntabwo ari umubare');
});
