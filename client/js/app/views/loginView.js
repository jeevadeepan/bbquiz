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
			'keypress input':'updateUserName'
		
		},
		
		/*this function will be called while creating the new instance of the view. All the thirdparty 
		* code corresponding to the view. should be initialized here
		*/
		initialize: function(){
			//Best practice for having reference of the view
			var that = this;
			var loginModel = that.model;
			that.render();
			loginModel.on("change:userName",function(model,name){
				that.$el.find('#main-content input').val(name);
			});
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			var that = this;
			that.$el.find('#main-header hgroup h1').html(loginTemplate.loginHeader);
			that.$el.find('#main-content').html(loginTemplate.login);
			that.$el.find('#actions').html(loginTemplate.loginButton);
		},
		
		updateUserName:function(e){
			var that = this;
			that.model.set("userName",$(e.target).val());
		}
	
	});

	return loginView;
	
});