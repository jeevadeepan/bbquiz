define([
				'jquery', 
				'underscore',
				'backbone'
				], function($, _, Backbone){

	var questionView = Backbone.View.extend({
	
	  //Define the element corresponding to the view here
		el:'',
		
		//Define all the events here,In backbone all the events use event delegation
		events :{
		
		
		},
		
		/*this function will be called while creating the new instance of the view. All the thirdparty 
		* code corresponding to the view. should be initialized here
		*/
		initialize: function{
			//Best practice for having reference of the view
			var that = this;
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function{
		}
	
	});

	return questionView;
	
});