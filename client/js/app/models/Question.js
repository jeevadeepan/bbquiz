define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
    var Question = Backbone.Model.extend({
        //Set all the default properties here
        defaults:{
    		question: "Two ducks and two dogs have a total of fourteen legs.",
    		answers: [],
    		weight: 0,
    		type: ""
        }
    });
    return Question;
});