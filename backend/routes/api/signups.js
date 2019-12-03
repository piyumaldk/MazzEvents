const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
//Signup Model
const SignUp = require('../../models/signupcustomer.model');
const SignUpServiceProvider = require('../../models/signupserviceprovider.model');

//@route    POST api/signups
//@desc     Add a new signup
//@access   Public
router.post('/addcustomer', (req, res) => {
    const {signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location} = req.body;
    //Simple Validation (Emty Form)
    if(!signup_firstName || !signup_lastName || !signup_email || !signup_password || !signup_aPassword || !signup_number || !signup_location){
        return res.status(400).json({ msg: 'Please fill all fileds!'});
    }
    if(signup_password !== signup_aPassword){
      return res.status(400).json({ msg: 'Passwords are not matching!'});
    }
    //Check for existing signup
    SignUp.findOne({ signup_email })
        .then(signup => {
            if(signup) return res.status(400).json({ msg: 'An user with this email already exists'});
            const newSignUp = new SignUp({
              signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_number, signup_location
            });
            
            //Create salt & Hash (Need Decryption here)
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newSignUp.signup_password, salt, (err, hash) => {
                  if(err) throw err;
                  newSignUp.signup_password = hash;
                  newSignUp.save()
                    .then(signup => {
                      jwt.sign(
                        { id: signup.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                          if(err) throw err;
                          res.json({
                            token,
                            signup: {
                              id: signup.id,
                              type: signup.signup_type,
                              firstName: signup.signup_firstName,
                              lastName: signup.signup_lastName,
                              email: signup.signup_email,
                              number: signup.signup_number,
                              location: signup.signup_location
                            }
                          });
                        }
                      )
                    });
                })
              })
        })
});


/*
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
*/
module.exports = router;