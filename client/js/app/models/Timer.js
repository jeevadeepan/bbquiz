define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var Timer = Backbone.Model.extend({
		//Set all the default properties here
		defaults:{
			time:300,
			display:true,
            totalTime: 300
		},
		
		/**
		 * valiate the timer. if the timer time is "0", then error has to be throws, which will
		 * hide the questions view and shows the results
		 * @param attrs
		 * @returns
		 */
		validate:function(attrs){
			if(attrs.time == 0){
				return "Quiz time finished";
			}
		},
		
		/**
		 * function to decrement the time
		 * @returns
		 */
		decrementTime:function(){
			var time = this.get("time")-1;
			this.set("time",time);
		}
	});
	return Timer;
});