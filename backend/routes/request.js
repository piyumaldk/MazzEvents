const express = require('express');
const router = express.Router();

let Request = require('../models/request');
//let SignUpCustomer = require('../models/signupcustomer.model');

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
//Get with Id
router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Rating.find({ id: req.body.spId},function(err, rating) {
        res.json(rating);
    });
});
//Add to rating
router.route('/addrequest').post(function(req, res) {
    // Rating.findOne({customerId: req.body.customerId, spId: req.body.spId},function(err, rating) {
      // if(!rating){
      //   console.log("Not yet")
        var request = new Request({ customerId: req.body.customerId, customerFName: req.body.customerFName, customerLName: req.body.customerLName, customerEmail: req.body.customerEmail, spId: req.body.spId, name: req.body.name, subject: req.body.subject, text: req.body.text });
        request.save()
          .then(rating=> {
            res.status(200).json({ 'Request':'Request added successfully'});
          })
          // res.status(200).send({
          //   already: false
          // })
          .catch(err=> {
            res.status(400).send(
              "Unable"
            );
          });
        // }
      // else{
      //   console.log("Already there");
      //   rating.rate = req.body.rating;
      //   rating.save().then(rating => {        
      //   })
      //   // res.status(200).send({
      //   //   already: true
      //   // })
      //   .catch(err => {
      //     res.status(400).send("Update not possible");
      //   });
      // }
    // })
});
//Add to user
// router.route('/addrating2').post(function(req, res) {
//     SignUpCustomer.findOne({ _id: req.body.spId},function(err, user) {
//       if(user){
//         console.log("Okay");
//         user.sumRate = req.body.sumRate;
//         user.rateTime = req.body.rateTime;
//         user.save().then(user => {        
//         })
//         .catch(err => {
//           res.status(400).send("Update not possible");
//         });
//       }
//     })
// });

module.exports = router;