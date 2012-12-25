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
                that.navigate('quiz', {
                    trigger : true
                });
            }, this);
            loginView.on('showHelp', function() {
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
            var that = this;
            var quizModel = new QuizModel();
            // make an ajax call and get the data
            var req = quizModel.fetch();
            // create the view on getting the data from server
            req.done(function(response) {
                var questions = new QuestionsCollection(response.questions);
                quizModel.set(response);
                var quizView = new QuizView( {
                    model : quizModel,
                    collection : questions
                });
                quizView.on('showResult', function() {
                    that.navigate('result', {
                        trigger : true
                    });

                }, this);
                $('#main-content').append(quizView.el);
            });
        },

        /**
         * shows the help view to help new users for playing the quiz
         * 
         * @returns
         */
        showHelp : function() {
            var helpView = new HelpView();
            // binding the events
            helpView.on('startQuiz', function() {
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
            var resultModel = new ResultModel();
            var resultView = new ResultView( {
                model : resultModel
            });
            // binding the events
            resultView.on('showLogin', function() {
                this.navigate('login', {
                    trigger : true
                });
            }, this);
            $('#main-content').append(resultView.el);
        }

    });

    return QuizRouter;
});