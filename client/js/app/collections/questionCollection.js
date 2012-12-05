define([
    'jquery',
    'underscore',
    'backbone',
    '/js/app/models/questionModel.js'
], function($, _, Backbone,question){
    var questionList = Backbone.Collection.extend({
        model: question
    });

    return questionList;
});