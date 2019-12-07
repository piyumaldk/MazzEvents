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

router.post('/adddj', (req, res) => {
  const {name1, name2} = req.body;
  //Simple Validation (Emty Form)
  if(!name1 || !name2){
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