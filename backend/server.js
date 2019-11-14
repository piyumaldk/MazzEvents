const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const signups = require('./routes/api/signups');
const app = express();
const cors = require('cors');
app.use(cors());

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;
//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true });
//Use Routes
app.use('/mazzevents', signups);

const PORT = 4000;
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


