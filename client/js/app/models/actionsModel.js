define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var actionsModel = Backbone.Model.extend({
		//Set all the default properties here
		/**
		 * if there is a previous question, then show the previous button
		 * if there is a next question, then show the next button
		 */
		defaults:{
			hasPreviousQuestion:false,
			hasNextQuestion:false
		}
	});
	return actionsModel;
});