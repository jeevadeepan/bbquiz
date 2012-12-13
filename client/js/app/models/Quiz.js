define(['jquery', 'underscore', 'backbone',], function($, _, Backbone){
	var Quiz = Backbone.Model.extend({
		//Set all the default properties here
		defaults:{
            score: '0',
		    attempts: '0',
            maxAttempts: '3',
            time:null,
            randomized:false,
            display:'login',
            questions:null,
            currentQuestionNumber:null
		},
		urlRoot:'/client/quiz.json',
		parse:function(response){
			this.set("randomized",response.randomized);
			this.set("time",response.time);
			this.set("questions",response.questions);
		}
	});
	return Quiz;
});