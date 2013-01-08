/*global define */

define( [ 'jquery', 'backbone',  '/js/app/QuizApp.js'  ], function($,
        Backbone, QuizApp) {
    var QuizRouter = Backbone.Router.extend( {

        initialize : function() {
    		window.QuizApp = QuizApp;
            // Tells backbone to start watch for hash change events
            Backbone.history.start();
        },


        // All the backbone routes
        routes : {
            // Default method to be called with out any hash tags in url
            "quiz" : "login",
            "help" : "showHelp"
        },

        /**
         * show login page
         */
        login : function() {
        	QuizApp.vent.trigger("showLogin");
        },

        
        /**
         * shows the help view to help new users for playing the quiz
         * 
         * @returns
         */
        showHelp : function() {
        	QuizApp.vent.trigger("showHelp");
        }


    });

    return QuizRouter;
});