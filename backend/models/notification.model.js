const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
let notificationSchema = new Schema({
    time: {
        type: String
    },
    topic: {
        type: String
    },
    detail: {
        type: String
    },

});

module.exports = Notifications = mongoose.model('notification', notificationSchema);