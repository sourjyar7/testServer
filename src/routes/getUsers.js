const express=require('express');
const router=express.Router();
const getUsers = require('../db/getUsers');

//Endpoint for fetching the users
router.get('/',async (req,resp)=>{
   const users = await getUsers();
   resp.send(users);
    
});


module.exports=router;