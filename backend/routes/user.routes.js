let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = './public/';

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

router.get("/:id", (req, res, next) => {
    User.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
});

module.exports = router;