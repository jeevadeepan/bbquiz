define([
    'jquery',
    'underscore',
    'backbone',
    '/js/app/models,quizModel'
], function($, _, Backbone,quiz){
    var questionList = Backbone.Collection.extend({
        model: question,
        url: '/questions.json',  /* needs to be updated with correct name/url from config.json?*/
        parse: function(response) {
            return response;
        }
    });

    return questionList;
});