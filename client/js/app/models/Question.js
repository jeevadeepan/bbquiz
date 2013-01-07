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
            questionNumber : 0,
            totalQuestions : 0,
            type : ""
        },

        isAnswered : function() {
            return (!this.get("selectedAnswer"));
        }
    });
    return Question;
});