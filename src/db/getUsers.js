const User=require('../db/models');


const getUsers=async ()=>{
    const users=await User.find({},{'_id':0, '__v':0});
    return users;
}

module.exports=getUsers;