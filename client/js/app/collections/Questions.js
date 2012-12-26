/**
 * collection correspoding to all the questions
 */
define( [ 'jquery', 'underscore', 'backbone', '/js/app/models/Question.js' ],
        function($, _, Backbone, Question) {
            var Questions = Backbone.Collection.extend( {
               
            	model : Question,
                
            	/**
            	 * function to get list of answered questions
            	 * @returns
            	 */
                getAnsweredQuestions: function(){
            		return _.filter(this.toJSON(),function(value){
            			return value.selectedAnswer !== null;
            		});
            	}
            });
            return Questions;
        });