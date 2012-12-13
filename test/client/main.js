includeCommonConfig();
require([
    'jquery',
    'backbone',
	'/client/models/Quiz.test.js',
	'/client/models/Login.test.js',
	'/client/models/Result.test.js',
], function($, Backbone){
});