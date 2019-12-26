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
    signup_date: {
        type: Date,
        default: Date.now
    },
    signup_completed: {
        type: Boolean
    }
});

module.exports = SignUp = mongoose.model('user', SignUpSchema);
