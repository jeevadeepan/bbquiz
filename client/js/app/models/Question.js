/**
 * Model corresponding to each question
 */
define( [ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
    var Question = Backbone.Model.extend( {
        // Set all the default properties here
        defaults : {
            question : "",
            answers : [],
            weight : 0,
            type : "",
            selectedAnswer : null
        },

        validate : function(attrs) {
            if (attrs.selectedAnswer === null) {
                return "Please Answer the question to proceed";
            }
        },

        isAnswered : function() {
            return (this.get("selectedAnswer") !== null);
        }
    });
    return Question;
});