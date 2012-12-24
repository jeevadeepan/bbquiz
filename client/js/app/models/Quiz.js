define( [ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
    var Quiz = Backbone.Model.extend( {
        // Set all the default properties here
        defaults : {
            time : null,
            randomized : false,
            questions : null,
            currentQuestionNumber : null
        },
        urlRoot : '/client/quiz.json',
        initialize : function() {
            this.fetch();
        },
        parse : function(response) {
            this.set("randomized", response.randomized);
            this.set("time", response.time);
            this.set("questions", response.questions);
        }
    });
    return Quiz;
});