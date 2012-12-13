define([
				'jquery', 
				'underscore',
				'backbone',
				'/js/app/templates/login.js'
				], function($, _, Backbone,loginTemplate){

	var Login = Backbone.View.extend({
		tagName:'div',
		
		id:'loginWrapper',
		
		//Define all the events here,In backbone all the events use event delegation
		events :{
			'click #startGame':'startQuiz'
		},
		
		/*this function will be called while creating the new instance of the view. All the thirdparty 
		* code corresponding to the view. should be initialized here
		*/
		initialize: function(){
			//Best practice for having reference of the view
			var that = this;
			that.render();
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			var that = this;
			that.$el.html(loginTemplate.loginHeader+loginTemplate.login+loginTemplate.loginButton);
		},
	
		/**
		 * function to start the model
		 * @returns
		 */
		startQuiz: function(){
			this.remove();
			this.trigger('startQuiz');
		}
		
	});

	return Login;
	
});