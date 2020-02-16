const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


const Notifications = require('../models/notification.model');

router.route('/').get(function(req, res) {
    Notifications.find(function(err, notification) {
        if (err) {
            console.log(err);
        } else {
            res.json(notification);
        }
    }).sort({$natural:-1}).limit(5);
  });

router.post('/addnotification', (req, res) => {
    console.log("bhagya");
    
    const {time, topic, detail} = req.body;
    //Simple Validation (Emty Form)
    
    //add to model
    
      let notification = new Notifications(req.body);
      notification.save()
        .then(notification => {
            res.status(200).json({'Notification': 'Notification added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new notification failed');
        });
      
  });

  module.exports = router;