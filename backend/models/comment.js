const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
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
    comment: {
        type: String
    },
})

module.exports = Comment = mongoose.model('Comment', CommentSchema)