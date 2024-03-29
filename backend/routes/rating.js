const express = require('express');
const router = express.Router();

let Rating = require('../models/rating');
let SignUpCustomer = require('../models/signupcustomer.model');

//Get 
router.route('/').get(function(req, res) {
    console.log("Rating requested");
    Rating.find(function(err, rating) {
        if (err) {
            console.log(err);
        } else {
            res.json(rating);
            
        }
    });
});

//Check rating
router.route('/checkrating').post(function(req, res){
  Rating.findOne({customerId: req.body.customerId, spId: req.body.spId})
    .then(response => {
      if(response){
        res.status(200).send({
          success: true,
          response_body: response,
          message: "Already have",
        })
      }
      else{
        console.log("Not there");
        res.status(200).send({
          success: false
        })
      }
    })
});

//Add to rating
router.route('/addrating').post(function(req, res) {
    Rating.findOne({customerId: req.body.customerId, spId: req.body.spId},function(err, rating) {
      if(!rating){
        console.log("Not yet")
        var rating = new Rating({ customerId: req.body.customerId, customerFName: req.body.customerFName, customerLName: req.body.customerLName, customerEmail: req.body.customerEmail, spId: req.body.spId, rate: req.body.rating });
        rating.save()
          .then(rating=> {
            res.status(200).json({ 'Rating':'Rating added successfully'});
          })
          // res.status(200).send({
          //   already: false
          // })
          .catch(err=> {
            res.status(400).send(
              "Unable"
            );
          });
        }
      else{
        console.log("Already there");
        rating.rate = req.body.rating;
        rating.save().then(rating => {        
        })
        // res.status(200).send({
        //   already: true
        // })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
      }
    })
});

//Add to user
router.route('/addrating2').post(function(req, res) {
    SignUpCustomer.findOne({ _id: req.body.spId},function(err, user) {
      if(user){
        console.log("Okay");
        user.sumRate = req.body.sumRate;
        user.rateTime = req.body.rateTime;
        user.rate = req.body.rate;
        user.save().then(user => {        
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
      }
    })
});

module.exports = router;