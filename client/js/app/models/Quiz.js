define( [ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
    var Quiz = Backbone.Model.extend( {
        // Set all the default properties here
        defaults : {
            time : null,
            randomized : false,
            questions : [],
            currentIndex : null
        },

        validate : function(attrs) {
            if (attrs.currentIndex > attrs.questions.length - 1) {
                return "All Questions completed";
            }
        },

        urlRoot : '/client/quiz.json'
    });
    return Quiz;
});