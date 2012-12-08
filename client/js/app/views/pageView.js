define([
		 'jquery', 
		 'underscore',
		 'backbone',
		 '/js/app/views/loginView.js',
		 '/js/app/views/questionView.js',
		 '/js/app/views/quizView.js',
		 '/js/app/models/loginModel.js',
		 '/js/app/models/quizModel.js',
		 '/js/app/collections/questionCollection.js'
		], function($, _, Backbone,LoginView,QuestionView,QuizView,LoginModel,QuizModel,Questions){

	var pageView = Backbone.View.extend({
	
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
			that.initQuizView();
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			
		},
		
		initQuizView:function(){
			//create quiz Model 
			var quizModel = new QuizModel();
			var quizView = new QuizView({model:quizModel});
		}
		
	
	});
	
	return pageView;
	
});