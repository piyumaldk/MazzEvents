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
    }
});

module.exports = Services = mongoose.model('service', ServiceSchema);