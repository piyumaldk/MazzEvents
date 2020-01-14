let express = require('express'),
    Mongoose = require('mongoose'),
    router = express.Router(),
    // moment = require("moment"),
    Customers = require("../models/signupcustomer.model");


router.route("/customeranalytics").post((req, res, next) => {
    console.log(" sachin");
    
    var startDate = req.body.currentDate
        // .startOf("month")
        // .toDate();
    var endDate = req.body.endsDate
        // .endOf("month")
        // .add(1, "days")
    // toDate();

    
    Customers.aggregate([
        {
            $match: {
                signup_date: {
                    $gte: startDate,
                    $lt: endDate
                }
            }
        },
        {
            $group: {
                _id: null,
                total_cus: {
                    $sum: "$signup_type"
                }
            }
        }
    ])
        // .exec((err, result)=>{
        //     if(err){
        //         return next(err);
        //     }else{
        //         var set = {};
        //         set.data = 
        //     }
        // })
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
            res.send.status(500).json({ err: err });

        })

})



//Add profile Img


//Get Profile Img


module.exports = router;