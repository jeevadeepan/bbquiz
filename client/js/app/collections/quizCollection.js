define([
				'jquery', 
				'underscore',
				'backbone',
				'/js/app/models,quizModel'
				], function($, _, Backbone,quiz){
    var quizList = Backbone.Collection.extend({
				model:quiz
		});
		
	return quizList;
    });