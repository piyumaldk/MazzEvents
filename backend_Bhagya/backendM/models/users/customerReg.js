// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const schema = mongoose.Schema;

// const customerRegSchema = new schema({

//     username:{type:String,required:true},
//     name:{type:String,required:true},
//     email:{type:String,required:true},
//     password:{type:String,required:true}
// });


// const Customer = module.exports = mongoose.model("Customer",customerRegSchema);

// //save data from mongoose
// module.exports.saveCustomer = function(newCustomer,callback){
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash(newCustomer.password, salt, function(err, hash) {
            
//             console.log(hash);

//             newCustomer.password = hash;

//             if (err) throw err;
//             newCustomer.save(callback);

//         });
//     });
    
// };

// module.exports.findByEmail = function(email,callback){

//         const query = {email:email};
//         Customer.findOne(query,callback); 
// };


// module.exports.passwordCheck = function(plainpassword, hash,callback){
//     bcrypt.compare(plainpassword, hash, function(err, res) {
//         // res === true
//         //console.log(res);
//         if(err) throw err;

//         if(res){
//             callback(null,res);
//         }
//     });
// };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
    signup_firstName: {
        type: String
    },
    signup_lastName: {
        type: String
    },
    signup_email: {
        type: String
    },
    signup_password: {
        type: String
    },
    signup_aPassword: {
        type: String
    },
    signup_number: {
        type: String
    },
    signup_location: {
        type: String
    },
    signup_completed: {
        type: Boolean
    }
});
module.exports = mongoose.model('Customer', Customer);