'use strict';

module.exports = function(app) {
	var EventsController = require('../controllers/events.controller');

	app.route('/')
	.get(EventsController.get);
	
	app.route('/events')
		.get(EventsController.get)
		.post(EventsController.createEvent);

	app.route('/events/:eventId')
		.get(EventsController.getById)
		.put(EventsController.updateEvent)
		.delete(EventsController.deleteEvent);
};
