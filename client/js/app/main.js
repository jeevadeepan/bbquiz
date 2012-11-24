includeCommonConfig();
require([
    'jquery',
    'backbone',
	'/js/app/router.js'
], function($, Backbone, Router){
	//initiate the router to update the views
	this.router = new Router();
});