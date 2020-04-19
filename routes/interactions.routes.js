'use strict';

module.exports = function(app) {
	var InteractionsController = require('../controllers/interactions.controller');
	
	app.route('/interactions')
		.get(InteractionsController.get)
		.post(InteractionsController.createInteraction);

	app.route('/interactions/:eventId')
		.get(InteractionsController.getById)
		.put(InteractionsController.updateInteraction)
		.delete(InteractionsController.deleteInteraction);
};
