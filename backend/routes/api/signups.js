const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
//Signup Model
let SignUpCustomer = require('../../models/signupcustomer.model');


router.route('/').get(function(req, res) {
  SignUpCustomer.find(function(err, signupcustomer) {
      if (err) {
          console.log(err);
      } else {
          res.json(signupcustomer);
      }
  });
});
router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    SignUpCustomer.findById(id, function(err, signupcustomer) {
        res.json(signupcustomer);
    });
});
//@route    POST api/signups
//@desc     Add a new Customer : Any
//@access   Public
router.post('/addcustomer', (req, res) => {
    const {signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_category, signup_number,signup_location, signup_address, signup_text, signup_daymax, signup_nightmax, signup_company, signup_address2, signup_city, signup_state, signup_zip,signup_package1name,signup_package1text,signup_package1price,signup_max1,signup_package2name,signup_package2text,signup_package2price,signup_max2,signup_package3name,signup_package3text,signup_package3price,signup_max3 } = req.body;
    //Simple Validation (Emty Form)
         
    if(signup_password !== signup_aPassword){
      return res.status(400).json({ msg: 'Passwords are not matching!'});
    }
    //Check for existing signupcustomer
    SignUpCustomer.findOne({ signup_email })
        .then(signupcustomer => {
            if(signupcustomer) return res.status(400).json({ msg: 'An user with this email already exists'});
            const newSignUpCustomer = new SignUpCustomer({
              signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_category, signup_number, signup_location, signup_address, signup_text, signup_daymax, signup_nightmax, signup_company, signup_address2, signup_city, signup_state, signup_zip,signup_package1name,signup_package1text,signup_package1price,signup_max1,signup_package2name,signup_package2text,signup_package2price,signup_max2,signup_package3name,signup_package3text,signup_package3price,signup_max3
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
                              text : signupcustomer.signup_text,
                              daymax : signupcustomer.signup_daymax,
                              nightmax : signupcustomer.signup_nightmax,
                              company : signupcustomer.signup_company,
                              address2: signupcustomer.signup_address2,
                              city: signupcustomer.signup_city,
                              state: signupcustomer.signup_state,
                              zip: signupcustomer.signup_zip,
                              package1: signupcustomer.signup_package1name,
                              signup_package1text: signupcustomer.signup_package1text,
                              package1price: signupcustomer.signup_package1price,
                              max1: signupcustomer.signup_max1,
                              package2: signupcustomer.signup_package2name,
                              signup_package2text: signupcustomer.signup_package2text,
                              package2price: signupcustomer.signup_package2price,
                              max2: signupcustomer.signup_max2,
                              package3: signupcustomer.signup_package3name,
                              signup_package3text: signupcustomer.signup_package3text,
                              package3price: signupcustomer.signup_package3price,
                              max3: signupcustomer.signup_max3,
                            }
                          });
                        }
                      )
                    });
                })
              })
        })
});

router.route('/updatecustomer/:id').post(function(req, res) {
  SignUpCustomer.findById(req.params.id, function(err, signupcustomer) {
      if (!signupcustomer){
          res.status(404).send("data is not found");
      }
      else
        signupcustomer.signup_firstName = req.body.signup_firstName;
        signupcustomer.signup_lastName = req.body.signup_lastName;
        signupcustomer.signup_email = req.body.signup_email;
        signupcustomer.signup_number = req.body.signup_number;
        signupcustomer.signup_location = req.body.signup_location;
        signupcustomer.signup_address = req.body.signup_address;
        signupcustomer.signup_address2 = req.body.signup_address2;
        signupcustomer.signup_city = req.body.signup_city;
        signupcustomer.signup_state = req.body.signup_state;
        signupcustomer.signup_zip = req.body.signup_zip;
        signupcustomer.signup_package1name = req.body.signup_package1name;
        signupcustomer.signup_package1text = req.body.signup_signup_package1text;
        signupcustomer.signup_package1price = req.body.signup_package1price;
        signupcustomer.signup_max1 = req.body.signup_max1;
        signupcustomer.signup_package2name = req.body.signup_package2name;
        signupcustomer.signup_package2text = req.body.signup_signup_package2text;
        signupcustomer.signup_package2price = req.body.signup_package2price;
        signupcustomer.signup_max2 = req.body.signup_max2;
        signupcustomer.signup_package3name = req.body.signup_package3name;
        signupcustomer.signup_package3text = req.body.signup_signup_package3text;
        signupcustomer.signup_package3price = req.body.signup_package3price;
        signupcustomer.signup_max3 = req.body.signup_max3;
        signupcustomer.signup_completed = req.body.signup_completed;
          
          signupcustomer.save().then(signupcustomer => {
              
          })
          .catch(err => {
              res.status(400).send("Update not possible");
              console.log("ded");
          });
  });
});

module.exports = router;