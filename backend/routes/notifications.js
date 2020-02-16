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

  router.route('/:id').get(function (req, res) {

    let id = req.params.id;
    Notifications.findById(id, function (err, notification) {
      res.json(notification);
    });
  });

router.post('/addnotification', (req, res) => {
    console.log("bhagya");
    
    const {time, topic, detail} = req.body;
    
    
      let notification = new Notifications(req.body);
      notification.save()
        .then(notification => {
            res.status(200).json({'Notification': 'Notification added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new notification failed');
        });
      
  });

  router.route('/updatenotification/:id').post(function (req, res) {
      console.log('zxcvbn');
      
    Notifications.findById(req.params.id, function (err, notification) {
      if (!notification) {
        res.status(404).send("data is not found");
      }
      else
        notification.topic = req.body.topic;
        notification.detail = req.body.detail;
  
        notification.save().then(notification => {
  
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
  });

  router.delete('/removenotification/:id', function (req, res) { 
    console.log(req.params.id);
    
    Notifications.findByIdAndRemove({ _id: req.params.id })
    .then(function (docs) {
      res.send({message: "User successfully deleted!..", state: true});
    }); 
  });

  module.exports = router;