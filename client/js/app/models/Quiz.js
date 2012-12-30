define( [ 'jquery', 'underscore', 'backbone', '/js/app/collections/Questions.js' ], function($, _, Backbone, Questions) {
    var Quiz = Backbone.Model.extend( {
        
    	// Set all the default properties here
        defaults : {
            time : null,
            randomized : false,
            questions : new Questions(),
            currentIndex : null
        },
        
        /*
         * url from which the values are loaded
         */
        urlRoot : '/client/quiz.json',

        /**
         * validate method will be called,when all the questions are answered
         * @param attrs
         * @returns
         */
        validate : function(attrs) {
            if (attrs.currentIndex > _.size(attrs.questions) - 1) {
                return "All Questions completed";
            }
        },
        
        /**
         * get answers from the questions
         * @returns
         */
        getAnswers : function(){
        	return this.get("questions").getAnswers();
        },
        
        /**
         * parsing the response and udpating the meodels.
         * parse method will be called as a success callback of fetch/save method
         * @param response
         * @returns
         */
        parse : function(response){
        	if(response.randomized){
        		var questions = _.shuffle(response.questions);
        	}
        	this.set("time",response.time);
        	this.set("questions",new Questions(questions));
        	this.set("currentIndex",0);
        }
    });
    return Quiz;
});