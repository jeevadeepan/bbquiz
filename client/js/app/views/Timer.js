define([
				'jquery', 
				'underscore',
				'backbone',
				'/js/app/templates/quiz.js',
				], function($, _, Backbone,QuizTemplate){

	var Timer = Backbone.View.extend({
	
	   //Define the div that should be created
		tagName:'div',
		
		id:'timerWrapper',
		
		timerId:null,
		
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
			
            //Update the total time 
			that.model.on('change:time',function(model,time){
				that.model.covertToDegree();
                that.$el.find('#counter').text(that.model.getFormattedTime());
			});
			
			that.model.on('change:degree',function(model,degree){
				 console.log(degree);
				 $('#movingHand').css('-webkit-transform', 'rotate('+degree+'deg)');
	             $('#movingHand').css('-webkit-transform-origin', '50%100%');
			});
			
			that.model.on('error',function(model,error){
				clearInterval(that.timerId);
				that.trigger('showResult');
				that.remove();
				//reset 
			});
			that.initTimer();
		},
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			var that = this;
			that.$el.html(QuizTemplate.timer);
            var timer = $(QuizTemplate.timer());
            var counter = $(QuizTemplate.counter({'remainingTime':that.model.getFormattedTotalTime()}));
            counter.appendTo(that.$el);
		},
		
		/**
		 * initialize the timer
		 * @returns
		 */
		initTimer: function(){
			var that = this;
			//that.$el.find('#timer').html(that.model.get("time"));
			that.timerId = setInterval(function(){
				that.model.decrementTime();
			},1000);
		}
		
	
	});
	

	return Timer;
	
});