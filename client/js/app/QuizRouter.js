/*global define */

define( [ 'jquery', 'backbone', '/js/app/models/Login.js',
        '/js/app/views/Login.js', '/js/app/models/Quiz.js',
        '/js/app/views/Quiz.js', '/js/app/collections/Questions.js',
        '/js/app/models/Result.js', '/js/app/views/Result.js',
        '/js/app/views/Help.js', 'lib/backbone.routefilter.min' ], function($,
        Backbone, LoginModel, LoginView, QuizModel, QuizView,
        QuestionsCollection, ResultModel, ResultView, HelpView) {
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
         * function called before the route ** provided by route filter plugin **
         */
        before : function(route) {
            this.destroyCurrentView();
        },

        /**
         * show login page
         */
        login : function() {
            var loginModel = new LoginModel();
            this.currentView = new LoginView( {
                model : loginModel
            });
            $('#main-content').append(this.currentView.el);
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
            quizModel
                    .fetch( {
                        update : true,
                        success : function(model, response) {
                            var questions = model.get("questions");
                            var questionsCollection = new QuestionsCollection(
                                    questions);
                            questionsCollection.update(questions);
                            that.currentView = new QuizView( {
                                model : model,
                                collection : questionsCollection
                            });
                            $('#main-content').append(that.currentView.el);
                        }
                    });
        },

        /**
         * shows the help view to help new users for playing the quiz
         * 
         * @returns
         */
        showHelp : function() {
            this.currentView = new HelpView();
            $('#main-content').append(this.currentView.el);
        },

        /**
         * show result page based on the correctly answered questions
         * 
         * @returns
         */
        showResult : function() {
            var resultModel = new ResultModel();
            this.currentView = new ResultView( {
                model : resultModel
            });
            $('#main-content').append(this.currentView.el);
        },

        /**
         * destroy current view
         * 
         * @returns
         */
        destroyCurrentView : function() {
            if (this.currentView) {
                this.currentView.destroy();
            }
        }

    });

    return QuizRouter;
});