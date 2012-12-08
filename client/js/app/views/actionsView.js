define([
        'jquery', 
		'underscore',
		'backbone',
		'/js/app/templates/quiz.js',
		], function($, _, Backbone,QuizTemplate){

	var actionsView = Backbone.View.extend({
	
	  //Define the element corresponding to the view here
		tagName:'div',
		
		id:'actionsWrapper',
		
		//Define all the events here,In backbone all the events use event delegation
		events :{
			'click .previous': 'showPreviousQuestion',
			'click .next': 'showNextQuestion'
		},
		
		/*this function will be called while creating the new instance of the view. All the thirdparty 
		* code corresponding to the view. should be initialized here
		*/
		initialize: function(){
			//Best practice for having reference of the view
			var that = this;
			that.render();
			this.model.on("change:hasPreviousQuestion",function(model,hasPreviousQuestion){
					that.showNextQuestion(hasPreviousQuestion);
				});
			this.model.on("change:hasNextQuestion",function(model,hasNextQuestion){
					that.toggleNextButton(hasNextQuestion);
			});
			that.bindDisplay();
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			this.$el.html(QuizTemplate.buttons);
		},
		
		togglePreviousButton: function(hasPreviousQuestion){
			var that = this;
			console.log(this);
			if(hasPreviousQuestion){
				that.$el.find('.previous').removeClass('hide');
			}else{
				that.$el.find('.previous').addClass('hide');
			}
		},
		
		toggleNextButton: function(hasNextQuestion){
			var that = this;
			if(hasNextQuestion){
				that.$el.find('.next').removeClass('hide');
			}else{
				that.$el.find('.next').addClass('hide');
			}
		},
		
		showPreviousQuestion: function(){
			var that = this;
		},
		
		showNextQuestion: function(){
			var that = this;
		},
		
		bindDisplay: function(){
			var that = this;
			that.model.on("change:display",function(model,display){
				if(display){
					that.$el.removeClass('hide');
				}else{
					that.$el.addClass('hide');
				}
			});
		}
	
	});

	return actionsView;
	
});