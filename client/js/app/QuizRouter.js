/*global define */

define( [ 'jquery', 'backbone', '/js/app/models/Login.js',
        '/js/app/views/Login.js', '/js/app/models/Quiz.js',
        '/js/app/views/Quiz.js', '/js/app/models/Result.js',
        '/js/app/views/Result.js', '/js/app/views/Help.js' ], function($,
        Backbone, LoginModel, LoginView, QuizModel, QuizView, ResultModel,
        ResultView, HelpView) {
    var QuizRouter = Backbone.Router.extend( {

        initialize : function() {
            // Tells backbone to start watch for hash change events
            Backbone.history.start();
        },

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
            var that = this;
            var loginModel = new LoginModel();
            var loginView = new LoginView( {
                model : loginModel
            });
            // binding the events
            loginView.on('startQuiz', function() {
                console.log("inside the start Quiz");
                that.navigate('quiz', {
                    trigger : true
                });
            }, this);
            loginView.on('showHelp', function() {
                console.log("inside the Help page");
                that.navigate('help', {
                    trigger : true
                });
            }, this);
            $('#main-content').append(loginView.el);
        },

        /**
         * starts quiz by showing questions with options
         * 
         * @returns
         */
        startQuiz : function() {
            console.log("redirecting to the quiz page");
            var quizModel = new QuizModel();
            console.log(quizModel);
            var quizView = new QuizView( {
                model : quizModel
            });
        },

        /**
         * shows the help view to help new users for playing the quiz
         * 
         * @returns
         */
        showHelp : function() {
            console.log("redirecting to the help page");
            var helpView = new HelpView();
            // binding the events
            helpView.on('startQuiz', function() {
                console.log("inside the start Quiz");
                this.navigate('quiz', {
                    trigger : true
                });
            }, this);
            $('#main-content').append(helpView.el);
        },

        /**
         * show result page based on the correctly answered questions
         * 
         * @returns
         */
        showResult : function() {
            console.log("redirecting to the result page");
            var resultModel = new ResultModel();
            var resultView = new ResultModel( {
                model : resultModel
            });
            // binding the events
            resultView.on('showLogin', function() {
                this.navigate('login', {
                    trigger : true
                });
            }, this);

        }

    });

    return QuizRouter;
});