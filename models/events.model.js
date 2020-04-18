'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the event'
  },
  email: {
    type: String,
    Required: 'Kindly enter the email of the event'
  }
});

module.exports = mongoose.model('Events', EventSchema);