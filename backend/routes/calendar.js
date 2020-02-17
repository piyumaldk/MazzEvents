const express = require('express');
const router = express.Router();

let SignUpCustomer = require('../models/signupcustomer.model');

router.route('/:id').get(function(req, res){
    SignUpCustomer.findById(req.params.id)
        .then(response => {
            res.status(200).send({
                success: true,
                message: "User data success",
                profile_data: response
            })
            console.log("Get Calendar");
        })
});

router.route('/addcalendar/:id').post(function(req, res){
    SignUpCustomer.findByIdAndUpdate(req.params.id, {$push: {"UnavailableDates":req.body.date}},(err,doc)=>{
        if (err){
            res.send(err)
        }
        res.status(200).send({
            success: true,
            message: "User data update success",
            profile_data: doc
        });
    })
});

module.exports = router;