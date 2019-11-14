const express = require('express');
const signupRoutes = express.Router();

//Signup Model
let SignUpCustomer = require('../../models/signupcustomer.model');
let SignUpServiceProvider = require('../../models/signupserviceprovider.model');

//@route    GET api/signups
//@desc     Get all signups
//@access   Public
signupRoutes.route('/').get(function(req, res) {
    SignUp.find(function(err, mazzevents) {
        if (err) {
            console.log(err);
        } else {
            res.json(mazzevents);
        }
    });
});

//@route    GET api/signups
//@desc     Danne naah
//@access   Public
signupRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    SignUp.findById(id, function(err, signup) {
        res.json(signup);
    });
});

//@route    UPDATE api/signups
//@desc     Update all signups
//@access   Public
signupRoutes.route('/update/:id').post(function(req, res) {
    SignUp.findById(req.params.id, function(err, signup) {
        if (!signup)
            res.status(404).send("data is not found");
        else {
            signup.signup_firstName = req.body.signup_firstName;
            signup.signup_lastName = req.body.signup_lastName;
            signup.signup_option = req.body.signup_option;
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

//@route    POST api/signups
//@desc     Add a new signup
//@access   Public
signupRoutes.route('/addcustomer').post(function(req, res) {
    let signup = new SignUpCustomer(req.body);
    signup.save()
        .then(signup => {
            res.status(200).json({'signup': 'signup added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new signup failed');
        });
});

signupRoutes.route('/addserviceprovider').post(function(req, res) {
    let signup = new SignUpServiceProvider(req.body);
    signup.save()
        .then(signup => {
            res.status(200).json({'signup': 'signup added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new signup failed');
        });
});

module.exports = signupRoutes;