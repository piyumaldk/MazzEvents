const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
//Signup Model
const Services = require('../../models/service.model');

//@route    POST api/services
//@desc     Add a new Customer : Any
//@access   Public
router.post('/Add_photographer', (req, res) => {
  const {Name, Email, Phone_number, City, Website, Fackbook_link} = req.body;
  //Simple Validation (Emty Form)
  if(!Name || !Email || !Phone_number || !City || !Website || !Fackbook_link){
    return res.status(400).json({ msg: 'Please fill all fileds!'});
  }
  //add to model
  else{
    let service = new Services(req.body);
    service.save()
      .then(service => {
          res.status(200).json({'service': 'service added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new service failed');
      });
    }
});

router.post('/Add_Music', (req, res) => {
  const {Name, Email, Phone_number, City, Website, Fackbook_link, Youtube_link} = req.body;
  //Simple Validation (Emty Form)
  if(!Name || !Email || !Phone_number || !City || !Website || !Youtube_link || !Fackbook_link){
    return res.status(400).json({ msg: 'Please fill all fileds!'});
  }
  //add to model
  else{
    let service = new Services(req.body);
    service.save()
      .then(service => {
          res.status(200).json({'service': 'service added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new service failed');
      });
    }
});


router.post('/Add_Vehicle', (req, res) => {
  const {Name, Email, Phone_number, City, Website, Brand, Type} = req.body;
  //Simple Validation (Emty Form)
  if(!Name || !Email || !Phone_number || !City || !Website || !Brand|| !Type){
    return res.status(400).json({ msg: 'Please fill all fileds!'});
  }
  //add to model
  else{
    let service = new Services(req.body);
    service.save()
      .then(service => {
          res.status(200).json({'service': 'service added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new service failed');
      });
    }
});


router.post('/adddj', (req, res) => {
  const {Name, Email, Phone_number, City, Website, Fackbook_link} = req.body;
  //Simple Validation (Emty Form)
  if(!Name || !Email || !Phone_number || !City || !Website || !Fackbook_link){
    return res.status(400).json({ msg: 'Please fill all fileds!'});
  }
  //add to model
  else{
    let service = new Services(req.body);
    service.save()
      .then(service => {
          res.status(200).json({'service': 'service added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new service failed');
      });
    }
});

router.post('/Add_Flower', (req, res) => {
  const {Name, Email, Phone_number, City, Website, Fackbook_link} = req.body;
  //Simple Validation (Emty Form)
  if(!Name || !Email || !Phone_number || !City || !Website || !Fackbook_link){
    return res.status(400).json({ msg: 'Please fill all fileds!'});
  }
  //add to model
  else{
    let service = new Services(req.body);
    service.save()
      .then(service => {
          res.status(200).json({'service': 'service added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new service failed');
      });
    }
});



module.exports = router;