/**
 * collection correspoding to all the questions
 */
define( [ 'jquery', 'underscore', 'backbone', '/js/app/models/Question.js' ],
        function($, _, Backbone, Question) {
            var Questions = Backbone.Collection.extend( {
                model : Question
            });

            return Questions;
        });