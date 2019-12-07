const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
let ServiceSchema = new Schema({
    name1: {
        type: String
    },
    name2: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean
    }
});

module.exports = Services = mongoose.model('service', ServiceSchema);