const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect=require('./src/db/connector');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(express.json());

app.post('/',(req,resp)=>{
    console.log(req.body);
    resp.send("received");
})

//Connecting to database
dbConnect();

require('./src/routes/routes')(app);

//Start listening
app.listen(process.env.PORT, () => {
    console.log("Server started on "+process.env.PORT);
});