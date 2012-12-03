/*global define */

define([
    'jquery',
    'backbone',
    '/js/app/views/pageView.js'
], function($, Backbone,PageView){
		var Router = Backbone.Router.extend({


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
			 *	intialize the appview
			 */
			home:function(){
				var pageView = new PageView();
			}
		});

		return Router;
});