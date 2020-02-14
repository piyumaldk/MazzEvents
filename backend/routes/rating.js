const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

let Rating = require('../models/rating');

router.route('/').get(function(req, res) {
    console.log("saka kaka");
    Rating.find(function(err, rating) {
        if (err) {
            console.log(err);
        } else {
            res.json(rating);
            
        }
    });
});

router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Rating.find({ id: req.body.spId},function(err, rating) {
        res.json(rating);
    });
});

module.exports = router;