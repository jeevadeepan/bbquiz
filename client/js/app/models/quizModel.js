define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var quiz = Backbone.Model.extend({
		//Set all the default properties here
		defaults:{
            id:null,
            score: '0',
		    attempts: '0',
            maxAttempts: '3',
            time:null,
            randomized:false
		}
	});
	return quiz;
});