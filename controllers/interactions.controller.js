'use strict';

var mongoose = require('mongoose'),
Interaction = mongoose.model('Interactions');

exports.get = function(req, res) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Interaction.find({}, null, { sort: '-createdAt' }, function(err, interaction) {
    if (err)
      res.send(err);
    res.json(interaction);
  });
};

exports.createInteraction = function(req, res) {
  console.log(req.body);
  var newinteraction = new Interaction(req.body);
  console.log(newinteraction);
  newinteraction.save(function(err, interaction) {
    if (err)
      res.send(err);
    res.json(interaction);
  });
};

exports.getById = function(req, res) {
    Interaction.findById(req.params.eventId, function(err, interaction) {
    if (err)
      res.send(err);
    res.json(interaction);
  });
};

exports.updateInteraction = function(req, res) {
    Interaction.findOneAndUpdate({_id:req.params.eventId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};
// Task.remove({}).exec(function(){});
exports.deleteInteraction = function(req, res) {

    Interaction.remove({
    _id: req.params.eventId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
