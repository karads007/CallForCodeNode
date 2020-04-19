'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InteractionSchema = new Schema({
  eventId: {
    type: Number,
    Required: 'Enter event Id'
  },
  email: {
    type: String,
    Required: 'Kindly enter the email of the user'
  },
  deviceId: {
    type: String,
    Required: 'Enter event Id'
  }
});

module.exports = mongoose.model('Interactions', InteractionSchema);