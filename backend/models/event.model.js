const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
let eventSchema = new Schema({
    eventName: {
        type: String
    },
    location: {
        type: String
    },
    time: {
        type: String
    },
    link: {
        type: String
    },
    event_completed: {
        type: Boolean
    }
});

module.exports = Events = mongoose.model('event', eventSchema);