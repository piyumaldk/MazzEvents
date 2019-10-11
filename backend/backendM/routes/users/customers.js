const express = require('express');
const router = express.Router();
const Customer = require('../../models/users/customerReg');


router.post("/register", (req,res)=>{
     //res.send("welcome to register page");
     //console.log(req.body);

    const newCustomer = new Customer({

        username:req.body.username,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    //save data from mongoose
    Customer.saveCustomer(newCustomer, function(err,customerReg){
        if(err){
            res.json({state:false, msg:"data not inserted"});
        }if(customerReg){
            res.json({state:true, msg:"data inserted"});
        }
    })
   
});

router.post("/login", (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;


    Customer.findByEmail(email, function(err,customerReg){

        if(err) throw err;

        if(customerReg){
            console.log(customerReg);
        }

    });


});

module.exports = router;