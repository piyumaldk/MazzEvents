let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = './public/';
let SignUpCustomer = require('../models/User');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

// User model
let User = require('../models/User');
router.post('/user-profile/:id', upload.single('profileImg'),(req, res, next)=>{
    const url = req.protocol+'://'+req.get('host')
    let ownerId = req.params.id;
        User.findOne({ownerId: ownerId}, function(err, user){
            if(!user){
                //new
                console.log("Added!");
                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    ownerId: req.params.id,
                    profileImg: url+'/public/'+req.file.filename
                });
                user.save().then(result => {})
                .catch(err => {
                    console.log(err),
                    res.status(500).json({
                    error: err
                    });
                })
            }
            else{
                console.log("Update!");
                user.ownerId = req.params.id;
                user.profileImg = url+'/public/'+req.file.filename;
                user.save().then(user => {})  
            }
        });   
    })

router.route('/').get(function(req, res) {
    SignUpCustomer.find(function(err, signupcustomer) {
        if (err) {
            console.log(err);
        } else {
            res.json(signupcustomer);
        }
    });
    });

    router.route('/:id').get(function(req, res) {
        let id = req.params.id;
        SignUpCustomer.findOne({ownerId: id}, function(err, signupcustomer) {
            res.json(signupcustomer);
        });
    });

module.exports = router;