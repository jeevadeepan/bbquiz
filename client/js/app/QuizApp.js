/**
 * Quiz App is global app object (but this is not a global object), handles everything
 */
define( [ 'jquery', 'backbone','/js/app/models/Login.js',
          '/js/app/views/Login.js','/js/app/models/Quiz.js',
          '/js/app/views/Quiz.js', '/js/app/collections/Questions.js',
          '/js/app/models/Result.js', '/js/app/views/Result.js', '/js/app/views/Help.js','lib/backbone.marionette.min'], function($, Backbone,
        		LoginModel,LoginView, QuizModel, QuizView, QuestionsCollection, ResultModel, ResultView, HelpView) {
	/**
	 * is the hub of your composite application. 
	 * It organizes, initializes and coordinates the various pieces of your app
	 */
	var QuizApp = new Backbone.Marionette.Application();
	
	QuizApp.addRegions({
		contentRegion : '#main-content'
	});
	
	QuizApp.addInitializer(function(options){
		 QuizApp.vent.trigger("showLogin");
	});
	
	QuizApp.vent.on("showLogin",function(){
		var loginModel = new LoginModel();
        loginView = new LoginView( {
            model : loginModel
        });
        QuizApp.contentRegion.show(loginView);
	});
	
	QuizApp.vent.on("showQuiz",function(loginModel){
		var quizModel = new QuizModel();
		 console.log(QuizView);
        var quizView = new QuizView({
        	model : quizModel
        });
        QuizApp.contentRegion.show(quizView);
        quizModel.fetch();
	});
	
	QuizApp.vent.on("showResult",function(resultModel){
		var resultModel = new ResultModel(resultModel);
        var resultView = new ResultView( {
            model : resultModel
        });
       QuizApp.contentRegion.show(resultView);
	});
	
	QuizApp.vent.on("showHelp",function(resultModel){
        var helpView = new HelpView();
       QuizApp.contentRegion.show(helpView);
	});
	
	
    return QuizApp;
});