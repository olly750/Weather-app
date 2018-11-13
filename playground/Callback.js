var getUser=(id,callback)=>{
  user={
    id:id,
    name:'Caleb'
  };
  setTimeout(()=>{
    callback(user);
  },3000);

};

getUser(31,(userObject)=>{
  console.log(userObject);
});
