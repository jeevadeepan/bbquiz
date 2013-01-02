/**
 * Creators : Pradeep S, Janani J
 * Quiz App is global app object (but this is not a global object), handles everything
 */
define( [ 'jquery', 'backbone','/js/app/models/Login.js',
          '/js/app/views/Login.js','/js/app/models/Quiz.js',
          '/js/app/views/Quiz.js', '/js/app/collections/Questions.js',
          '/js/app/models/Result.js', '/js/app/views/Result.js', '/js/app/views/Help.js','lib/backbone.marionette.min'], function($, Backbone,
        		LoginModel,LoginView, QuizModel, QuizView, QuestionsCollection, ResultModel, ResultView, HelpView) {
	/**
	 * This is the hub of our application. 
	 * It organizes, initializes and coordinates the various pieces of this app
	 */
	var QuizApp = new Backbone.Marionette.Application();
	
	
	/**
	 * Adding the regions of the application that need to be managed
	 */
	QuizApp.addRegions({
		contentRegion : '#main-content'
	});
	
	
	/**
	 * Initialization
	 * by default show the login screen in the region
	 */
	QuizApp.addInitializer(function(options){
		 QuizApp.vent.trigger("showLogin");
	});
	
	/**
	 * Aggregated event to show the login page using 
	 * Backbone Marionette event aggregator
	 */
	QuizApp.vent.on("showLogin",function(){
		var loginModel = new LoginModel();
        loginView = new LoginView( {
            model : loginModel
        });
        QuizApp.contentRegion.show(loginView);
	});
	
	/**
	 * Aggregated event to show the quiz page (Composite view)
	 * using Backbone Marionette event aggregator
	 */
	QuizApp.vent.on("showQuiz",function(loginModel){
		var quizModel = new QuizModel();
		 console.log(QuizView);
        var quizView = new QuizView({
        	model : quizModel
        });
        QuizApp.contentRegion.show(quizView);
        quizModel.fetch();
	});
	
	/**
	 * Aggregated event to show the result page,
	 * using Backbone Marionette event aggregator
	 */
	QuizApp.vent.on("showResult",function(resultModel){
		var resultModel = new ResultModel(resultModel);
        var resultView = new ResultView( {
            model : resultModel
        });
       QuizApp.contentRegion.show(resultView);
	});
	
	/**
	 * Aggregated event to show the help page,
	 * using Backbone Marionette event aggregator
	 */
	QuizApp.vent.on("showHelp",function(resultModel){
        var helpView = new HelpView();
       QuizApp.contentRegion.show(helpView);
	});
	
	
    return QuizApp;
});