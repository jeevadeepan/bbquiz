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
            currentQuestionNumber:0
		},
		urlRoot:'/client/quiz.json',
		parse:function(response){
			console.log(response);
			this.set("randomized",response.randomized);
			this.set("time",response.time);
			this.set("questions",response.questions);
		}
	});
	return Quiz;
});