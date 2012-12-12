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
            that.deg = 0;
			that.model.on('change:time',function(model,time){
				//that.$el.find('#timer').html(time);
                that.deg = that.deg+(360/300);
                $('#movingHand').css('-webkit-transform', 'rotate('+that.deg+'deg)');
                $('#movingHand').css('-webkit-transform-origin', '50%100%');
                var counter = that.getCounter(time);
                that.$el.find('#counter').text(counter);

			});
			
			that.model.on('error',function(model,error){
				clearInterval(that.timerId);
				that.options.quizModel.set('display','result');
				//reset 
			});
			that.bindDisplay();
			that.initTimer();
		},
		
        getCounter: function(remainingTime){
            var limit = 60,
                minutes = 0,
                seconds = 0;
            if(remainingTime > limit){
                minutes = Math.floor(remainingTime / limit).toFixed();
                seconds = (remainingTime % limit).toFixed();
            }
            else{
                seconds = (remainingTime * 1).toFixed();
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if(minutes < 10) {
                minutes = "0" + minutes;
            }
            var counter = minutes+':'+seconds;
            return counter;
        },
		
		/*
		* All the templating updation should be done here, only this  should talk to the template
		*/
		render: function(){
			var that = this;
			that.$el.html(QuizTemplate.timer);
            var timer = $(QuizTemplate.timer());
            var totalTime = "05:00";
            var counter = $(QuizTemplate.counter({'remainingTime':totalTime}));
            counter.appendTo(that.$el);

		},
		
		initTimer: function(){
			var that = this;
			//that.$el.find('#timer').html(that.model.get("time"));
			that.timerId = setInterval(function(){
				that.model.decrementTime();
			},1000);
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
	

	return Timer;
	
});