define([
				'jquery', 
				'underscore',
				'backbone',
				'/js/app/models/loginModel.js',
				'/js/app/collections/questionCollection.js',
				'/js/app/models/questionModel.js',
				'/js/app/models/quizModel.js',
				'/js/app/models/timerModel.js',
				'/js/app/models/actionsModel.js',
				'/js/app/models/resultModel.js',
				'/js/app/views/loginView.js',
				'/js/app/views/questionView.js',
				'/js/app/views/timerView.js',
				'/js/app/views/actionsView.js',
				'/js/app/views/resultView.js'
				], function($, _, Backbone,LoginModel,Questions,Question,QuizModel,TimerModel,ActionsModel,ResultModel,
							LoginView,QuestionView,TimerView,ActionsView,ResultView){

	var quizView = Backbone.View.extend({
	
	  //Define the element corresponding to the view here
		el:'#main-content',
		
		//reference of loginModel
		loginModel:null,
		
		//reference of resultModel
		resultModel:null,
		
		//reference of timerModel
		timerModel:null,
		
		//reference of actionsModel
		actionsModel:null,
		
		//refernce for collection which acts a data source for the app
		allQuestions:null,
		
		//collection have list of answered Questions
		answeredQuestions:null,
		
		
		//Define all the events here,In backbone all the events use event delegation
		events :{
			
		},
		
		/*this function will be called while creating the new instance of the view. All the thirdparty 
		* code corresponding to the view. should be initialized here
		*/
		initialize: function(){
			//Best practice for having reference of the view
			var that = this;
			that.showLoginView();
			that.bindDisplay();
			that.model.on('change:currentQuestionNumber',function(model,currentQuestionNumber){
					that.updateActions();
					that.showQuestion(currentQuestionNumber);
			});
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			
		},
		
		/**
		 * function to show login page view, which shows the logic details for the user
		 */
		showLoginView:function(){
			var that = this;
		    that.loginModel = new LoginModel();
			var loginView = new LoginView({
					model:that.loginModel,
					quizModel:that.model
			});
			that.$el.append(loginView.el);
		},
		
		/**
		 * view display update function, based on the display set in the model
		 */
		bindDisplay: function(){
			var that = this,
			quizModel = that.model;
			quizModel.on("change:display",function(model,display){
				if(display == 'quiz'){
					that.loginModel.set("display",false);
					that.startQuiz();
				}else if(display == 'result'){
					that.timerModel.set("display",false);
					that.actionsModel.set("display",false);
					that.showResult();
				}else if(display == 'login'){
					that.resultModel.set("display",false);
					that.showLoginView();
				}
			});
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
				  success: function(data){
					  that.getAllQuestions(data);
					  that.updateActions();
					  that.showQuestion(0);
				  }
				});
		},
		
		/**
		 * popuplate all the questions into a collection and create actions and timer view
		 * @param data
		 * @returns
		 */
		getAllQuestions: function(data){
			var that=this;
			//storing all the questions into the view.
			that.allQuestions = new Questions(data.questions);
			that.answeredQuestions = new Questions();
			timerView = that.createTimerView(data);
			actionsView = that.createtActionsView();
			this.$el.append(timerView.el);
			this.$el.append(actionsView.el);
		},
		
		
		/**
		 *function to initialize the timer with the given data
		 */
		createTimerView: function(){
			var that =this;
			that.timerModel = new TimerModel();
			return new TimerView({model:that.timerModel,
								  quizModel:that.model
								});
		},
		
		/**
		 * function to initialize the action with given data
		 * @returns
		 */
		createtActionsView: function(){
			var that = this;
			that.actionsModel = new ActionsModel();
			return new ActionsView({
										model:that.actionsModel,
										quizModel: that.model
								   });
		},
		
		
		/**
		 * function that shows next question
		 * @returns
		 */
		showQuestion:function(QuestionNumber){
			var that=this;
			that.$el.find('#questionWrapper').remove();
			var question = that.getQuestion(QuestionNumber);
			if(question){
				var questionView = new QuestionView({model:question,quizModel:that.model});
				$(questionView.el).insertAfter(that.$el.find('#timerWrapper'));
			}
		},
		
		/**
		 * get the question from the collection to be shown to the user
		 */
		getQuestion:function(QuestionNumber){
			var that = this;
			if(that.answeredQuestions.length >= QuestionNumber+1){
				return that.answeredQuestions.at(QuestionNumber);
			}else if(that.allQuestions.length > 0){
				var question = that.allQuestions.at(0);
				that.answeredQuestions.push(question);
				that.allQuestions.remove(question);
				return question;
			}else{
				that.$el.find('#questionWrapper').remove();
				that.model.set('display','result');
			}
			
		},
		
		
		/**
		 * function to enable/disable actions buttons
		 */
		updateActions: function(){
			var that = this;
			var hasPreviousQuestion = (that.model.get("currentQuestionNumber") > 0) ? true:false;
			var hasNextQuestion = (that.model.get("currentQuestionNumber") <= that.answeredQuestions.length) ? true:false;
			that.actionsModel.set("hasPreviousQuestion",hasPreviousQuestion);
			that.actionsModel.set("hasNextQuestion",hasNextQuestion);
		},
		
		
		/**
		 * function to show result
		 * @returns
		 */
		showResult:function(){
			var that = this;
			that.resultModel = new ResultModel();
			//make an ajax call to evaluate the answers or do the comparision insie the collection 
			//file the result model with the score 
			var resultView = new ResultView({model:that.resultModel,quizModel:that.model});
			that.$el.append(resultView.el);
		}
	
	});

	return quizView;
	
});