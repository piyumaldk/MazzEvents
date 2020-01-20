const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ownerId: {
        type: String
    },
    profileImg: {
        type: String
    },
    businessImg: {
        type: String
    }
})

module.exports = mongoose.model('Photo', userSchema)