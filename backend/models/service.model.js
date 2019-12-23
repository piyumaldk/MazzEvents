const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
let ServiceSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },Name: {
        type: String
    },Email: {
        type: String
    },City: {
        type: String
    },Website: {
        type: String
    },Fackbook_link: {
        type: String
    },Phone_number: {
        type: String
    },Brand: {
        type: String
    },Type: {
        type: String
    },Type: {
        Youtube_link: String
    },completed: {
        type: Boolean
    }
});

module.exports = Services = mongoose.model('service', ServiceSchema);