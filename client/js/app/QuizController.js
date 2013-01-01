/**
 * Quiz App is global app object (but this is not a global object), handles everything
 */
define( [ 'jquery', 'backbone','/js/app/models/Quiz.js',
          '/js/app/views/Quiz.js', '/js/app/collections/Questions.js',
          '/js/app/models/Result.js', '/js/app/views/Result.js', '/js/app/views/Login.js'], function($,
        		  Backbone, QuizModel, QuizView, QuestionsCollection, ResultModel, ResultView, LoginView) {
	
	console.log(QuizModel);
	console.log(QuizView)
	console.log(QuestionsCollection);
	console.log(ResultModel);
	console.log(ResultView);
	console.log(LoginView);
	
	/**
	 * is the hub of your composite application. 
	 * It organizes, initializes and coordinates the various pieces of your app
	 */
	var quizController = new Backbone.Model();
	console.log(quizController);
	
	
	quizController.on("showQuiz",function(quizModel){
		 
	});
	
	quizController.on("showResult",function(resultModel){
		var resultModel = new ResultModel();
        var resultView = new ResultView( {
            model : resultModel
        });
        $('#main-content').append(resultView.el);
	});
	
	return quizController;
});