
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSelection = new Schema({
    customerId: {type: String},
    servicePId: {type: String},
    servicePName: {type: String}
});

module.exports = mongoose.model('CustomerSelection', CustomerSelection);
