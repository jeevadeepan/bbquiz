define([
		 'jquery', 
		 'underscore',
		 'backbone',
		 '/js/app/views/loginView.js',
		 '/js/app/views/questionView.js',
		 '/js/app/models/loginModel.js',
		 '/js/app/collections/questionCollection.js'
		], function($, _, Backbone,LoginView,QuestionView,LoginModel,Questions){

	var pageView = Backbone.View.extend({
	
	  //Define the element corresponding to the view here
		el:'#content',
		
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
			that.showLoginView();
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
		},
		
		/**
		 * function to start the quiz by making an ajax request to the server and getting the list of 
		 * question and options
		 */
		startQuiz: function(){
			var that = this;
			$.ajax({
				  url: 'client/quiz.json',
				  dataType: 'json',
				  data: {},
				  success: function(data){that.getAllQuestions(data);}
				});
			
		},
		
		getAllQuestions:function(data){
			var that=this;
			//storing all the questions into the view.
			that.options.questions = new Questions(data);
			that.createQuestionView(that.options.questions.at(0));
		},
		
		showLoginView:function(){
			var loginModel = new LoginModel();
			var loginView = new LoginView({model:loginModel});
		},
		
		createQuestionView:function(questionModel){
			var questionView = new QuestionView({model:questionModel});
		},
		
		showNextQuestion:function(){
			
		},
		
		showResult:function(){
			
		}
		
	
	});
	
	return pageView;
	
});