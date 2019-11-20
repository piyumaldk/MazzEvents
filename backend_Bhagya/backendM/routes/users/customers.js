// const express = require('express');
// const router = express.Router();
// const Customer = require('../../models/users/customerReg');


// router.post("/register", (req,res)=>{
//      //res.send("welcome to register page");
//      //console.log(req.body);

//     const newCustomer = new Customer({

//         username:req.body.username,
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//     });
//     //save data from mongoose
//     Customer.saveCustomer(newCustomer, function(err,customerReg){
//         if(err){
//             res.json({state:false, msg:"data not inserted"});
//         }if(customerReg){
//             res.json({state:true, msg:"data inserted"});
//         }
//     })
   
// });

// router.post("/login", (req,res)=>{
//     const email = req.body.email;
//     const password = req.body.password;


//     Customer.findByEmail(email, function(err,customerReg){

//         if(err) throw err;

//         if(!customerReg){
//             //console.log(customerReg);
//             res.json({state:false, msg:"No user found"});
//         }

//         Customer.passwordCheck(password,customerReg.password, function(err, match){

//             if(err) throw err;

//             if(match){
//                 console.log("email, password combination worked")
//             }
//         });

//     });


// });

// module.exports = router;


const express = require('express');
const signupRoutes = express.Router();

const Customer = require('../../models/users/customerReg');



signupRoutes.route('/').get(function(req, res) {
    Customer.find(function(err, mazzevent) {
        if (err) {
            console.log(err);
        } else {
            res.json(mazzevent);
        }
    });
});

signupRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Customer.findById(id, function(err, signup) {
        res.json(signup);
    });
});
signupRoutes.route('/update/:id').post(function(req, res) {
    Customer.findById(req.params.id, function(err, signup) {
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
    let customers = new Customer(req.body);
    console.log(req.body);
    
    customers.save()
        .then(signup => {
            res.status(200).json({'signup': 'signup added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new signup failed');
        });
});



module.exports = signupRoutes;