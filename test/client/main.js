Language = "en";
includeCommonConfig();
require( [ 'jquery', 'backbone', '/js/app/QuizApp.js','/client/models/User.test.js','/client/models/Quiz.test.js',
        '/client/views/Quiz.test.js', 
        '/client/views/Login.test.js', 
        '/client/models/Timer.test.js', '/client/views/Timer.test.js' ],
        function($, Backbone) {
        });