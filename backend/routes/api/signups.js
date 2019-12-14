const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
//Signup Model
const SignUpCustomer = require('../../models/signupcustomer.model');

//@route    POST api/signups
//@desc     Add a new Customer : Any
//@access   Public
router.post('/addcustomer', (req, res) => {
    const {signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_category, signup_number,signup_location, signup_address, signup_address2, signup_city, signup_state, signup_zip } = req.body;
    //Simple Validation (Emty Form)
    
      if(!signup_firstName || !signup_lastName || !signup_email || !signup_password || !signup_aPassword || !signup_number){
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
              signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_category, signup_number, signup_location, signup_address, signup_address2, signup_city, signup_state, signup_zip 
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
                              category: signupcustomer.signup_category,
                              number: signupcustomer.signup_number,
                              location: signupcustomer.signup_location,
                              address: signupcustomer.signup_address,
                              address2: signupcustomer.signup_address2,
                              city: signupcustomer.signup_city,
                              state: signupcustomer.signup_state,
                              zip: signupcustomer.signup_zip,
                            }
                          });
                        }
                      )
                    });
                })
              })
        })
});

module.exports = router;