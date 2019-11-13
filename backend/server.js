const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const signupRoutes = express.Router();
const PORT = 4000;
let SignUp = require('./signup.model');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/mazzevents', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
signupRoutes.route('/').get(function(req, res) {
    SignUp.find(function(err, mazzevents) {
        if (err) {
            console.log(err);
        } else {
            res.json(mazzevents);
        }
    });
});
signupRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    SignUp.findById(id, function(err, signup) {
        res.json(signup);
    });
});
signupRoutes.route('/update/:id').post(function(req, res) {
    SignUp.findById(req.params.id, function(err, signup) {
        if (!signup)
            res.status(404).send("data is not found");
        else {
            signup.signup_firstName = req.body.signup_firstName;
            signup.signup_lastName = req.body.signup_lastName;
            signup.signup_email = req.body.signup_email;
            signup.signup_password = req.body.signup_password;
            signup.signup_aPassword = req.body.signup_aPassword;
            signup.signup_number = req.body.signup_number;
            signup.signup_location = req.body.signup_location;
            signup.signup_completed = req.body.signup_completed;
            signup.save().then(signup => {
                res.json('signup updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
           
    });
});
signupRoutes.route('/add').post(function(req, res) {
    let signup = new SignUp(req.body);
    signup.save()
        .then(signup => {
            res.status(200).json({'signup': 'signup added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new signup failed');
        });
});
app.use('/mazzevents', signupRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
