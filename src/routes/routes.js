const addUser = require('./saveUser');
const getUsers = require('./getUsers');
//Initialises all the route

module.exports=function(app){
  
   app.use('/addUser',addUser);
   app.use('/getUsers',getUsers);
   
   
}
