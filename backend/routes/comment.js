const express = require('express');
const router = express.Router();
let Comment = require('../models/comment');

//Get 
router.route('/').get(function(req, res) {
    console.log("Comment requested");
    Comment.find(function(err, comment) {
        if (err) {
            console.log(err);
        } else {
            res.json(comment);
            
        }
    });
});

//Add to Comment
router.route('/addcomment').post(function(req, res) {
  Comment.findOne({customerId: req.body.customerId, spId: req.body.spId},function(err, comment) {
    if(!comment){
      console.log("Not yet")
      var comment = new Comment({ customerId: req.body.customerId, customerFName: req.body.customerFName, customerLName: req.body.customerLName, customerEmail: req.body.customerEmail, spId: req.body.spId, comment: req.body.comment });
      comment.save()
        .then(comment=> {
          res.status(200).json({ 'Comment':'Comment added successfully'});
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
      comment.comment = req.body.comment;
      comment.save().then(comment => {        
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

module.exports = router;