'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubscriberSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Subscriber', SubscriberSchema);