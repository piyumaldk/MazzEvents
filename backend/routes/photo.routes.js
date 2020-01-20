let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = './public/';
let Photo = require('../models/signupcustomer.model');
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

//Add profile Img (hari)
router.post('/addprofileimg/:id', upload.single('profileImg'),(req, res, next)=>{
    const url = req.protocol+'://'+req.get('host')
    let ownerId = req.params.id;
        Photo.findById(req.params.id, function(err, photo) {
        //Photo.findById({ownerId: ownerId}, function(err, photo){
        console.log("Update!");
        //photo.ownerId = req.params.id;
        photo.profileImg = url+'/public/'+req.file.filename;
        photo.save().then(photo => {})      
        });   
    })

router.post('/addbusinessimg/:id', upload.single('businessImg'),(req, res, next)=>{
    const url = req.protocol+'://'+req.get('host')
    let ownerId = req.params.id;
        Photo.findById(req.params.id, function(err, photo) {
        //Photo.findById({ownerId: ownerId}, function(err, photo){
        console.log("Update!");
        //photo.ownerId = req.params.id;
        photo.businessImg = url+'/public/'+req.file.filename;
        photo.save().then(photo => {})      
        });   
    })

// //weradi
// router.post('/addbusinessimg/:id', upload.single('businessImg'),(req, res, next)=>{
//     const url = req.protocol+'://'+req.get('host')
//     let ownerId = req.params.id;
//         Photo.findOne({ownerId: ownerId}, function(err, photo){
//             if(!photo){
//                 //new
//                 console.log("Added!");
//                 const photo = new Photo({
//                     _id: new mongoose.Types.ObjectId(),
//                     ownerId: req.params.id,
//                     businessImg: url+'/public/'+req.file.filename
//                 }); 
//                 photo.save().then(result => {})
//                 .catch(err => {
//                     console.log("Error"),
//                     res.status(500).json({
//                     error: err
//                     });
//                 })
//             }
//             else{
//                 console.log("Update!");
//                 photo.ownerId = req.params.id;
//                 photo.businessImg = url+'/public/'+req.file.filename;
//                 photo.save().then(photo => {})  
//             }
//         });   
//     })


//weradi
// router.route('/getimg').get(function(req, res) {
//     Photo.find(function(err, photo) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(photo);
//         }
//     });
// });

// //Get Business Img (weradi)
// router.route('/getbusinessimg/:id').get(function(req, res) {
//     let id = req.params.id;
//     Photo.findOne({ownerId: id}, function(err, photo) {
//         res.json(photo);
//     });
// });

module.exports = router;