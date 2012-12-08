define([
				'jquery', 
				'underscore',
				'backbone',
				'/js/app/templates/question.js'
				], function($, _, Backbone,QuestionTemplate){

	var questionView = Backbone.View.extend({
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
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			this.$el.html(QuestionTemplate.details+
					QuestionTemplate.questionWrapper+
					QuestionTemplate.optionsWrapper);
		}
	
	});

	return questionView;
	
});