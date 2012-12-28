/*global define */

define( [ 'jquery', 'backbone', '/js/app/models/Login.js',
        '/js/app/views/Login.js', '/js/app/models/Quiz.js',
        '/js/app/views/Quiz.js', '/js/app/collections/Questions.js',
        '/js/app/models/Result.js', '/js/app/views/Result.js',
        '/js/app/views/Help.js' ], function($, Backbone, LoginModel, LoginView,
        QuizModel, QuizView, QuestionsCollection, ResultModel, ResultView,
        HelpView) {
    var QuizRouter = Backbone.Router.extend( {

        initialize : function() {
            // Tells backbone to start watch for hash change events
            Backbone.history.start();
        },
        
        currentView : null,

        // All the backbone routes
        routes : {
            // Default method to be called with out any hash tags in url
            "login" : "login",
            "quiz" : "startQuiz",
            "help" : "showHelp",
            "result" : "showResult"
        },

        /**
         * show login page
         */
        login : function() {
        	this.destroyCurrentView();
            var loginModel = new LoginModel();
            thisdestroyCurrentView();
            this.currentView = new LoginView( {
                model : loginModel
            });
            $('#main-content').append(loginView.el);
        },

        /**
         * starts quiz by showing questions with options
         * 
         * @returns
         */
        startQuiz : function() {
        	this.destroyCurrentView();
            var quizModel = new QuizModel();
            // make an ajax call and get the data
            var req = quizModel.fetch();
            // create the view on getting the data from server
            req.done(function(response) {
                var questions = new QuestionsCollection(response.questions);
                quizModel.set(response);
                	this.currentView = new QuizView( {
                    model : quizModel,
                    collection : questions
                });
                $('#main-content').append(quizView.el);
            });
        },

        /**
         * shows the help view to help new users for playing the quiz
         * 
         * @returns
         */
        showHelp : function() {
        	 this.destroyCurrentView();
             this.currentView = new HelpView();
            $('#main-content').append(helpView.el);
        },

        /**
         * show result page based on the correctly answered questions
         * 
         * @returns
         */
        showResult : function() {
        	this.destroyCurrentView();
            var resultModel = new ResultModel();
            this.currentView = new ResultView( {
                model : resultModel
            });
            $('#main-content').append(resultView.el);
        },
        
        /**
         * destroy current view 
         * @returns
         */
        destroyCurrentView : function(){
        	if(this.currentView){
        		this.currentView.destroy();        	
        	}
        }

    });

    return QuizRouter;
});