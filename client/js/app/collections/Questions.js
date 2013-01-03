/**
 * collection correspoding to all the questions
 */
define( [ 'jquery', 'underscore', 'backbone', '/js/app/models/Question.js' ],
        function($, _, Backbone, Question) {
            var Questions = Backbone.Collection.extend( {

                model : Question,
                
                /**
                 * shuffle the collection using undescore shuffle method, which has
                 * a best algorithm for shuffling and return shuffle collection
                 * @returns
                 */
                getshuffleQuestions : function(){
            		return _.shuffle(this);
            	},

                /**
                 * function to get list of answered questions
                 * 
                 * @returns
                 */
                getAnswers : function() {
                    var answeredQuestions = _.filter(this.toJSON(), function(value) {
                        						return value.selectedAnswer;
                    						}),
                    	questions = _.pluck(answeredQuestions,'question'),
                    	answers = _.pluck(answeredQuestions,'selectedAnswer'),
                    	answersArray = [];
                    	$.each(questions,function(index,elem){
                    		var obj = {elem : answers[index]};
                    		answersArray.push(obj);
                    	});
                   return answersArray;
                }
            });
            return Questions;
        });