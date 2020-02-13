const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    customerId: {
        type: String
    },
    spId: {
        type: String
    },
    rate: {
        type: String
    },
})

module.exports = mongoose.model('Rating', userSchema)