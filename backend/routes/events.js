const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


const Events = require('../models/event.model');

router.route('/').get(function(req, res) {
    Events.find(function(err, event) {
        if (err) {
            console.log(err);
        } else {
            res.json(event);
        }
    }).sort({$natural:-1}).limit(5);
  });

router.post('/addevent', (req, res) => {
    const {eventName, location, time, link} = req.body;
    //Simple Validation (Emty Form)
    
    //add to model
    
      let event = new Events(req.body);
      event.save()
        .then(event => {
            res.status(200).json({'service': 'service added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new service failed');
        });
      
  });

  module.exports = router;