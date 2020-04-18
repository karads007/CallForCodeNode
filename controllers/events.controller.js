'use strict';

var mongoose = require('mongoose'),
Event = mongoose.model('Events');

exports.get = function(req, res) {
    Event.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.createEvent = function(req, res) {
  console.log(req);
  var newevent = new Event(req.body);
  console.log(newevent);
  newevent.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.getById = function(req, res) {
  Event.findById(req.params.eventId, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.updateEvent = function(req, res) {
  Event.findOneAndUpdate({_id:req.params.eventId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};
// Task.remove({}).exec(function(){});
exports.deleteEvent = function(req, res) {

    Event.remove({
    _id: req.params.eventId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
