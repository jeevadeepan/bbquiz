define([
				'jquery', 
				'underscore',
				'backbone',
				'/js/app/templates/login.js'
				], function($, _, Backbone,loginTemplate){

	var loginView = Backbone.View.extend({
	
	  //Define the element corresponding to the view here
		el:'#content',
		
		//Define all the events here,In backbone all the events use event delegation
		events :{
		
		
		},
		
		/*this function will be called while creating the new instance of the view. All the thirdparty 
		* code corresponding to the view. should be initialized here
		*/
		initialize: function(){
			//Best practice for having reference of the view
			var that = this;
			console.log(loginTemplate);
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			
		}
	
	});

	return loginView;
	
});