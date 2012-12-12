includeCommonConfig();
require([
    'jquery',
    'backbone',
	'/js/app/QuizRouter.js'
], function($, Backbone, QuizRouter){
	//initiate the router to update the views
	this.router = new QuizRouter();
});