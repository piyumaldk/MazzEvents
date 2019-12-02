const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
//Signup Model
const SignUpCustomer = require('../../models/signupcustomer.model');
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
    //Check for existing signupcustomer
    SignUpCustomer.findOne({ signup_email })
        .then(signupcustomer => {
            if(signupcustomer) return res.status(400).json({ msg: 'An user with this email already exists'});
            const newSignUpCustomer = new SignUpCustomer({
              signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_number, signup_location
            });
            
            //Create salt & Hash (Need Decryption here)
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newSignUpCustomer.signup_password, salt, (err, hash) => {
                  if(err) throw err;
                  newSignUpCustomer.signup_password = hash;
                  newSignUpCustomer.save()
                    .then(signupcustomer => {
                      jwt.sign(
                        { id: signupcustomer.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                          if(err) throw err;
                          res.json({
                            token,
                            signupcustomer: {
                              id: signupcustomer.id,
                              type: signupcustomer.signup_type,
                              firstName: signupcustomer.signup_firstName,
                              lastName: signupcustomer.signup_lastName,
                              email: signupcustomer.signup_email,
                              number: signupcustomer.signup_number,
                              location: signupcustomer.signup_location
                            }
                          });
                        }
                      )
                    });
                })
              })
        })
});

//@route    POST api/signups
//@desc     Add a new signup
//@access   Public
router.post('/addserviceprovider', (req, res) => {
  const {signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location} = req.body;
  //Simple Validation (Emty Form)
  if(!signup_firstName || !signup_lastName || !signup_email || !signup_password || !signup_aPassword || !signup_number || !signup_location){
      return res.status(400).json({ msg: 'Please fill all fileds!'});
  }
  if(signup_password !== signup_aPassword){
    return res.status(400).json({ msg: 'Passwords are not matching!'});
  }
  //Check for existing signupcustomer
  SignUpCustomer.findOne({ signup_email })
      .then(signupcustomer => {
          if(signupcustomer) return res.status(400).json({ msg: 'An user with this email already exists'});
          const newSignUpCustomer = new SignUpCustomer({
            signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_number, signup_location
          });
          
          //Create salt & Hash (Need Decryption here)
          bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newSignUpCustomer.signup_password, salt, (err, hash) => {
                if(err) throw err;
                newSignUpCustomer.signup_password = hash;
                newSignUpCustomer.save()
                  .then(signupcustomer => {
                    jwt.sign(
                      { id: signupcustomer.id },
                      config.get('jwtSecret'),
                      { expiresIn: 3600 },
                      (err, token) => {
                        if(err) throw err;
                        res.json({
                          token,
                          signupcustomer: {
                            id: signupcustomer.id,
                            type: signupcustomer.signup_type,
                            firstName: signupcustomer.signup_firstName,
                            lastName: signupcustomer.signup_lastName,
                            email: signupcustomer.signup_email,
                            number: signupcustomer.signup_number,
                            location: signupcustomer.signup_location
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