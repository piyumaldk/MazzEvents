const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
//Signup Model
const SignUpCustomer = require('../../models/signupcustomer.model');
let SignUpServiceProvider = require('../../models/signupserviceprovider.model');
const StreamChat = require('stream-chat').StreamChat;

//@route    POST api/auth
//@desc     Auth Customer : Any
//@access   Public
router.post('/', (req, res) => {
    const {signup_email, signup_password} = req.body;
    //Simple Validation (Emty Form)
    if(!signup_email || !signup_password){
        return res.status(400).json({ msg: 'Please fill all fileds!'});
    }
    //Check for existing Customer : Any
    SignUpCustomer.findOne({ signup_email })
        .then(signupcustomer => {
            if(!signupcustomer) return res.status(400).json({ msg: 'This email does not have an account!'});
            
            //Validate password
            bcrypt.compare(signup_password, signupcustomer.signup_password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Check your password again!'});
                    
                    var n = signup_email.indexOf("@");
                    var name = signup_email.slice(0, n);

                    const client = new StreamChat('', 'tfsrg5j8wfxsmempavenh3fztd2ju48vazsyeensazma5tmxmnntzwdycs4rqf6z');
                    const chatToken = client.createToken(name);

                    jwt.sign(
                        { id: signupcustomer.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                                res.json({
                                    token,
                                    chatToken,
                                    signupcustomer: {
                                        id: signupcustomer.id,
                                        type: signupcustomer.signup_type,
                                        firstName: signupcustomer.signup_firstName,
                                        lastName: signupcustomer.signup_lastName,
                                        aPassword: signupcustomer.signup_aPassword,
                                        email: signupcustomer.signup_email,
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
                })
        })
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