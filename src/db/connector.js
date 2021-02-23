const mongoose=require('mongoose');

//Connect to DB
const dbConnect=function(){
const url = process.env.ATLAS_connector;  
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database");
}); 
}

module.exports=dbConnect;