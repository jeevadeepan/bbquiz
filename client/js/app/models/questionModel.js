define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
    var question = Backbone.Model.extend({
        //Set all the default properties here
        defaults:{
            id:null,
            questionText: '',
            options:[],
            weight: '1',
            correctAnswer:'',
            userAnswer:'',
            type:''
        },

        setAnswer: function(_userAnswer){
            if (!this.get("answered")){
                this.set({answered: true, userAnswer: _userAnswer});
            }
        }
    });
    return question;
});