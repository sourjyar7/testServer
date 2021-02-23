const express=require('express');
const router=express.Router();
const saveUser = require('../db/saveUser');


//Endpoint for adding a user
router.post('/',async (req,resp)=>{
    
    const msg=await saveUser(req.body); 
    
    resp.send(msg);    
 })


module.exports=router;