const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RequestSchema = new Schema({
    customerId: {
        type: String
    },
    customerFName: {
        type: String
    },
    customerLName: {
        type: String
    },
    customerEmail: {
        type: String
    },
    spId: {
        type: String
    },
    name: {
        type: String
    },
    subject: {
        type: String
    },
    text: {
        type: String
    },
})

module.exports = Request = mongoose.model('Requst', RequestSchema)