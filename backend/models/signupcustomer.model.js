const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
let SignUpSchema = new Schema({
    signup_type: {
        type: String,
        
    },
    signup_firstName: {
        type: String,
        
    },
    signup_lastName: {
        type: String,
        
    },
    signup_option: {
        type: String,
        
    },
    signup_email: {
        type: String,
        
    },
    signup_password: {
        type: String,
        
    },
    signup_category: {
        type: String
    },
    signup_number: {
        type: String,
        
    },
    signup_location: {
        type: String
    },
    signup_address: {
        type: String
    },
    signup_text: {
        type: String
    },
    signup_daymax: {
        type: String
    },
    signup_nightmax: {
        type: String
    },
    signup_company: {
        type: String
    },
    signup_address2: {
        type: String
    },
    signup_city: {
        type: String
    },
    signup_state: {
        type: String
    },
    signup_zip: {
        type: String
    },
    signup_package1name: {
        type: String
    },
    signup_package1text: {
        type: String
    },
    signup_package1price: {
        type: String
    },
    signup_max1: {
        type: String
    },
    signup_package2name: {
        type: String
    },
    signup_package2text: {
        type: String
    },
    signup_package2price: {
        type: String
    },
    signup_max2: {
        type: String
    },
    signup_package3name: {
        type: String
    },
    signup_package3text: {
        type: String
    },
    signup_package3price: {
        type: String
    },
    signup_max3: {
        type: String
    },
    profileImg: {
        type: String
    },
    businessImg: {
        type: String
    },
    sumRate: {
        type: Number
    },
    rateTime: {
        type: Number
    },
    signup_date: {
        type: Date,
        default: Date.now
    },
    signup_completed: {
        type: Boolean
    }
});

module.exports = SignUp = mongoose.model('user', SignUpSchema);
