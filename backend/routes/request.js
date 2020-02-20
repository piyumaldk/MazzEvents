const express = require('express');
const router = express.Router();

let Request = require('../models/request');
//let SignUpCustomer = require('../models/signupcustomer.model');

//Get 
router.route('/').get(function(req, res) {
    console.log("Request requested");
    Request.find(function(err, request) {
        if (err) {
            console.log(err);
        } else {
            res.json(request);
            
        }
    });
});
//Get with Id
router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    //console.log(id);
    Request.findById(req.params.id, function (err, request) {
        res.json(request);
        console.log(request);
    });
});

//Add to request
router.route('/addrequest').post(function(req, res) {
    
        var request = new Request({ customerId: req.body.customerId, customerFName: req.body.customerFName, customerLName: req.body.customerLName, customerEmail: req.body.customerEmail, spId: req.body.spId, name: req.body.name, subject: req.body.subject, text: req.body.text });
        request.save()
          .then(request=> {
            res.status(200).json({ 'Request':'Request added successfully'});
          })
          
          .catch(err=> {
            res.status(400).send(
              "Unable"
            );
          });
      
});


module.exports = router;