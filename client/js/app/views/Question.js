define([
				'jquery', 
				'underscore',
				'backbone',
				'/js/app/templates/question.js'
				], function($, _, Backbone,QuestionTemplate){

	var Question = Backbone.View.extend({
		/*spectify the tag to be created for this view*/
		tagName:'div',
		
		id:'questionWrapper',
		
		//Define all the events here,In backbone all the events use event delegation
		events :{
	
		},
		
		/*this function will be called while creating the new instance of the view. All the thirdparty 
		* code corresponding to the view. should be initialized here
		*/
		initialize: function(){
			//Best practice for having reference of the view
			var that = this;
			that.render();
			that.showQuestion();
			that.showOption();
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			this.$el.html(QuestionTemplate.details+
					QuestionTemplate.questionWrapper+
					QuestionTemplate.optionsWrapper);
		},
		
		showQuestion: function(){
			var that = this;
			that.$el.find('#question').html(that.model.get("question"));
		},
		
		showOption:function(){
			var that = this;
			var answers = that.model.get("answers")
			var answer = '';
			for(var i=0,j=answers.length;i<j;i++){
				answer += '<div>'+answers[i]+'</div>';
			}
			that.$el.find('#optionsWrapper').html(answer);
		}
	
	});

	return Question;
	
});