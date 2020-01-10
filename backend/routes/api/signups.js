const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
//Signup Model
let User = require('../../models/signupcustomer.model');


router.route('/').get(function(req, res) {
  User.find(function(err, user) {
      if (err) {
          console.log(err);
      } else {
          res.json(user);
      }
  });
});
router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
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
    //Check for existing user
    User.findOne({ signup_email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'An user with this email already exists'});
            const newUser = new User({
              signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_category, signup_number, signup_location, signup_address, signup_text, signup_daymax, signup_nightmax, signup_company, signup_address2, signup_city, signup_state, signup_zip,signup_package1name,signup_package1text,signup_package1price,signup_max1,signup_package2name,signup_package2text,signup_package2price,signup_max2,signup_package3name,signup_package3text,signup_package3price,signup_max3
            });
            
            //Create salt & Hash (Need Decryption here)
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.signup_password, salt, (err, hash) => {
                  if(err) throw err;
                  newUser.signup_password = hash;
                  newUser.save()
                    .then(user => {
                      jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                          if(err) throw err;
                          res.json({
                            token,
                            user: {
                              id: user.id,
                              type: user.signup_type,
                              firstName: user.signup_firstName,
                              lastName: user.signup_lastName,
                              email: user.signup_email,
                              category: user.signup_category,
                              number: user.signup_number,
                              location: user.signup_location,
                              address: user.signup_address,
                              text : user.signup_text,
                              daymax : user.signup_daymax,
                              nightmax : user.signup_nightmax,
                              company : user.signup_company,
                              address2: user.signup_address2,
                              city: user.signup_city,
                              state: user.signup_state,
                              zip: user.signup_zip,
                              package1: user.signup_package1name,
                              signup_package1text: user.signup_package1text,
                              package1price: user.signup_package1price,
                              max1: user.signup_max1,
                              package2: user.signup_package2name,
                              signup_package2text: user.signup_package2text,
                              package2price: user.signup_package2price,
                              max2: user.signup_max2,
                              package3: user.signup_package3name,
                              signup_package3text: user.signup_package3text,
                              package3price: user.signup_package3price,
                              max3: user.signup_max3,
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
  User.findById(req.params.id, function(err, user) {
      if (!user){
          res.status(404).send("data is not found");
      }
      else
        user.signup_firstName = req.body.signup_firstName;
        user.signup_lastName = req.body.signup_lastName;
        user.signup_email = req.body.signup_email;
        user.signup_number = req.body.signup_number;
        user.signup_location = req.body.signup_location;
        user.signup_address = req.body.signup_address;
        user.signup_address2 = req.body.signup_address2;
        user.signup_city = req.body.signup_city;
        user.signup_state = req.body.signup_state;
        user.signup_zip = req.body.signup_zip;
        user.signup_package1name = req.body.signup_package1name;
        user.signup_package1text = req.body.signup_signup_package1text;
        user.signup_package1price = req.body.signup_package1price;
        user.signup_max1 = req.body.signup_max1;
        user.signup_package2name = req.body.signup_package2name;
        user.signup_package2text = req.body.signup_signup_package2text;
        user.signup_package2price = req.body.signup_package2price;
        user.signup_max2 = req.body.signup_max2;
        user.signup_package3name = req.body.signup_package3name;
        user.signup_package3text = req.body.signup_signup_package3text;
        user.signup_package3price = req.body.signup_package3price;
        user.signup_max3 = req.body.signup_max3;
        user.signup_completed = req.body.signup_completed;
          
          user.save().then(user => {
              
          })
          .catch(err => {
              res.status(400).send("Update not possible");
              console.log("ded");
          });
  });
});

module.exports = router;