const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RatingSchema = new Schema({
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
    rate: {
        type: Number
    },
})

module.exports = Rating = mongoose.model('Rating', RatingSchema)