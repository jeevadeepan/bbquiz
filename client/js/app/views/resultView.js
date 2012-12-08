define([
				'jquery', 
				'underscore',
				'backbone',
				'/js/app/templates/result.js'
				], function($, _, Backbone,ResultTemplate){

	var resultView = Backbone.View.extend({
		tagName:'div',
		
		id:'resultWrapper',
		
		//Define all the events here,In backbone all the events use event delegation
		events :{
			'click #restartGame':'restartQuiz'
		},
		
		/*this function will be called while creating the new instance of the view. All the thirdparty 
		* code corresponding to the view. should be initialized here
		*/
		initialize: function(){
			//Best practice for having reference of the view
			var that = this;
			that.render();
			that.bindDisplay();
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			var that = this;
			that.$el.html(ResultTemplate.resultHeader+ResultTemplate.result+ResultTemplate.resultButton);
		},
	
		/**
		 * function to start the model
		 * @returns
		 */
		restartQuiz: function(){
			var that = this;
			var quizModel = that.options.quizModel;
			quizModel.set('display','login');
			that.model.set('display',false);
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

	return resultView;
	
});