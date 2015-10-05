'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: String,
    email: String,
    location: String,
    reason: String,
    phoneNumber: String,
    messageInput: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Client', ClientSchema);