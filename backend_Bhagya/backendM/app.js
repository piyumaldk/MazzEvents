const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 4002;

//read the body as jason
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const config = require('./config/database');
const customer = require('./routes/users/customers');

const connection = mongoose.connect(config.database, {useNewUrlParser: true});
if(connection){
    console.log("database connected");
}else{
    console.log("database is not connected");
}

//path for static files
app.use(express.static(path.join(__dirname,"public")));

app.use('/customer', customer);

app.get("/", (reg,res)=>{
    res.send("hello world");
});

app.listen(port, () => {
    console.log("listening to port " + port);

});