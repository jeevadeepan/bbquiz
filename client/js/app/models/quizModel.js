define(['jquery', 'underscore', 'backbone',], function($, _, Backbone){
	var quiz = Backbone.Model.extend({
		//Set all the default properties here
		defaults:{
            score: '0',
		    attempts: '0',
            maxAttempts: '3',
            time:null,
            randomized:false,
            display:'login',
            currentQuestion:null
		}
	});
	return quiz;
});