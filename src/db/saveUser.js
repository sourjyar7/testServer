const User=require('./models');

//Saves the given user to database
const saveUser=async (person)=>{
    try{
        const user=new User(person);
        const duplicate = await User.find({name: user.name, age: user.age}).exec();
        
        if(duplicate.length > 0)
          return "user already exists !";
        else {
          await user.save();
          return "success";
        } 
              
    }
    catch(err){
        return "failure";
    }
}
module.exports=saveUser;