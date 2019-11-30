const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');
const app = express();
const cors = require('cors');
app.use(cors());

//Bodyparser Middleware
app.use(express.json());

//DB Config
//const db = config.get('mongoURI');
const db = require('./config/keys').mongoURI;
//Connect to Mongo
mongoose.connect(db, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//Use Routes
app.use('/mazzevents', require('./routes/api/signups'));

app.use('/mazzevents/auth', require('./routes/api/auth'));

const PORT = 4000;
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


