const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
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