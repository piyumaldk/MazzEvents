const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
//Signup Model
let SignUpCustomer = require('../../models/signupcustomer.model');
let SignUpServiceProvider = require('../../models/signupserviceprovider.model');

//@route    POST api/signups
//@desc     Add a new signup
//@access   Public
router.post('/addcustomer', (req, res) => {
    const {signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location} = req.body;
    //Simple Validation
    if(!signup_firstName || !signup_lastName || !signup_email || !signup_password || !signup_aPassword || !signup_number || !signup_location){
        return res.status(400).json({ msg: 'Please enter all fileds'});
    }
    //Check for existing signupcustomer
    SignUpCustomer.findOne({ signup_firstName })
        .then(signupcustomer => {
            if(signupcustomer) return res.status(400).json({ msg: 'SignUpCustomer already exists'});
            const newSignUpCustomer = new SignUpCustomer({
                signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location
            });
            
            //Create salt & Hash
            newSignUpCustomer.save()
                .then(signup => {
                    res.status(200).json({'signup': 'signup added successfully'});
                })
        })
});
router.route('/addserviceprovider').post(function(req, res) {
    let signup = new SignUpServiceProvider(req.body);
    signup.save()
        .then(signup => {
            res.status(200).json({'signup': 'signup added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new signup failed');
        });
});

module.exports = router;