/*global define */

define([
    'jquery',
    'backbone',
    '/js/app/models/Quiz.js',
    '/js/app/views/Quiz.js'
], function($, Backbone,QuizModel,QuizView){
		var QuizRouter = Backbone.Router.extend({


			initialize: function(){
				//Tells backbone to start watch for hash change events
				Backbone.history.start();
			},

			//All the backbone routes
			routes:{
				//Default method to be called with out any hash tags in the url
				"":"home"
			},

			/**
			 *	Initialize the quiz view
			 */
			home:function(){
				var quizModel = new QuizModel();
				var quizView = new QuizView({model:quizModel});
			}
		});

		return QuizRouter;
});