var Language = "en";
includeCommonConfig();
require( [ 'jquery', 'backbone', '/js/app/QuizRouter.js' ], function($,
        Backbone, QuizRouter) {
		var router = new QuizRouter();
		// show the login page
		router.navigate('quiz', {
			trigger : true
		});
});