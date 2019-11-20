
const express = require('express');
const CustSelections = express.Router();
const CustomerSelection = require('../../models/users/customerSelections');

// CustSelections.route('/').get(function(req, res) {
//     CustomerSelection.find(function(err, mazzevent) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(mazzevent);
//         }
//     });
// });


CustSelections.route('/add').post(function(req, res) {
    let customerSelections = new CustomerSelection(req.body);

    console.log(req.body);
    
    customerSelections.save()
        .then(data => {
            res.json({state: true, msg : "Successfully added..!"});
        })
        .catch(err => {
            res.json({state: false, msg : "Unsuccessfull..!"});
        });
});


module.exports = CustSelections;