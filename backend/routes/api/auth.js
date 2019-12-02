const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
//Signup Model
const SignUpCustomer = require('../../models/user.model');
let SignUpServiceProvider = require('../../models/signupserviceprovider.model');

//@route    POST api/auth
//@desc     Auth signups
//@access   Public
router.post('/', (req, res) => {
    const {signup_email, signup_password} = req.body;
    //Simple Validation (Emty Form)
    if(!signup_email || !signup_password){
        return res.status(400).json({ msg: 'Please fill all fileds!'});
    }
    //Check for existing signupcustomer
    SignUpCustomer.findOne({ signup_email })
        .then(signupcustomer => {
            if(!signupcustomer) return res.status(400).json({ msg: 'This email does not have an account!'});
            
            //Validate password
            bcrypt.compare(signup_password, signupcustomer.signup_password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Check your password again!'});

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
                                        firstName: signupcustomer.signup_firstName,
                                        lastName: signupcustomer.signup_lastName,
                                        aPassword: signupcustomer.signup_aPassword,
                                        email: signupcustomer.signup_email,
                                        number: signupcustomer.signup_number,
                                        location: signupcustomer.signup_location
                                    }
                                });
                        }
                    )
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

//@route    GET api/auth/signupcustomer
//@desc     Get customer data
//@access   Private
router.get('/signupcustomer', auth, (req, res) => {
    SignUpCustomer.findById(req.user.id)
        .select('-signup_password')
        .then(signupcustomer => res.json(signupcustomer));
});
module.exports = router;