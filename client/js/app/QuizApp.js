/**
 * Creators : Pradeep S, Janani J Quiz App is global app object (but this is not
 * a global object), handles everything
 */
define( [ 'jquery', 'backbone', '/js/app/models/User.js',
        '/js/app/views/Login.js', '/js/app/models/Quiz.js',
        '/js/app/views/Quiz.js', '/js/app/collections/Questions.js',
        '/js/app/models/Answer.js', '/js/app/views/Result.js',
        '/js/app/views/Help.js', 'lib/backbone.marionette.min' ], function($,
        Backbone, UserModel, LoginView, QuizModel, QuizView,
        QuestionsCollection, AnswerModel, ResultView, HelpView) {
    /**
     * This is the hub of our application. It organizes, initializes and
     * coordinates the various pieces of this app
     */
    var QuizApp = new Backbone.Marionette.Application();

    /**
     * cached QuizModel
     */
    QuizApp.cachedQuizProps = null;

    /**
     * Adding the regions of the application that need to be managed, Adding the
     * regions for the timer and Question(which will be part of Quiz View)
     */
    QuizApp.addRegions( {
        contentRegion : '#main-content',
        timerRegion : '#timerWrapper',
        questionRegion : '#questionWrapper'
    });

    /**
     * Initialization by default show the login screen in the region
     */
    QuizApp.addInitializer(function(options) {
        QuizApp.vent.trigger("showLogin");
    });

    /**
     * Aggregated event to show the login page using Backbone Marionette event
     * aggregator
     */
    QuizApp.vent.on("showLogin", function() {
        var userModel = new UserModel();
        loginView = new LoginView( {
            model : userModel
        });
        QuizApp.contentRegion.show(loginView);
    });

    /**
     * Aggregated event to show the quiz page (Composite view) using Backbone
     * Marionette event aggregator
     */
    QuizApp.vent.on("showQuiz", function(user) {
        // Update user name and start quiz
        var quizModel = new QuizModel();
        quizModel.set("userName", user.userName);
        var quizView = new QuizView( {
            model : quizModel
        });
        /**
         * reset all the regions, since we are showing same regions again
         */
        QuizApp.timerRegion.reset();
        QuizApp.questionRegion.reset();
        QuizApp.contentRegion.show(quizView);
        quizModel.fetch();
    });

    /*
     * Aggregated event to replay the quiz again with same set of questions
     */
    QuizApp.vent.on("replayQuiz", function() {
        var quizModel = new QuizModel();
        var quizView = new QuizView( {
            model : quizModel
        });
        /**
         * reset all the regions, since we are showing same regions again
         */
        QuizApp.timerRegion.reset();
        QuizApp.questionRegion.reset();
        QuizApp.contentRegion.show(quizView);
        quizModel.updateQuizProps();
    });

    /**
     * Aggregated event to show the result page, using Backbone Marionette event
     * aggregator
     */
    QuizApp.vent.on("showResult", function(answerModel) {
        var answerModel = new AnswerModel(answerModel);
        var resultView = new ResultView( {
            model : answerModel
        });
        answerModel.save( {}, {
            success : function(response) {
                QuizApp.contentRegion.show(resultView);
            }
        });
    });

    /**
     * Aggregated event to show the help page, using Backbone Marionette event
     * aggregator
     */
    QuizApp.vent.on("showHelp", function(resultModel) {
        var helpView = new HelpView();
        QuizApp.contentRegion.show(helpView);
    });

    return QuizApp;
});