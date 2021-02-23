const mongoose=require('mongoose');

//Creating User Schema
const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        
        required: true
      },
    age:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('User',userSchema);