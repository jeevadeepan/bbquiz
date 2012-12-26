includeCommonConfig();
require( [ 'jquery', 'backbone', '/client/models/Quiz.test.js',
        '/client/views/Quiz.test.js', '/client/models/Login.test.js',
        '/client/views/Login.test.js', '/client/models/Result.test.js',
        '/client/models/Timer.test.js', '/client/views/Timer.test.js' ],
        function($, Backbone) {
        });