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
    }).sort({$natural:-1}).limit(8);
});

router.route('/dfdf').get(function(req, res) {
    Events.find(function(err, event) {
        if (err) {
            console.log(err);
        } else {
            res.json(event);
        }
    }).sort({$natural:-1});
});

router.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Events.findById(id, function (err, events) {
      res.json(events);
    });
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

router.route('/updateevent/:id').post(function (req, res) {
    Events.findById(req.params.id, function (err, event) {
      if (!event) {
        res.status(404).send("data is not found");
      }
      else
        event.eventName = req.body.eventName;
        event.location = req.body.location;
        event.time = req.body.time;
        event.link = req.body.link;
        event.event_completed = req.body.event_completed;
        event.save().then(event => {
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
  });

router.delete('/removeevent/:id', function (req, res) { 
    Events.findByIdAndRemove({ _id: req.params.id })
    .then(function (docs) {
      res.send({message: "User successfully deleted!", state: true});
    }); 
});

module.exports = router;