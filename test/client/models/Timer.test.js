define(['jquery', 
        'underscore', 
        'backbone',
        '/js/app/models/Timer.js'], function($, _, Backbone,TimerModel){
	module('Testing Timer Model',
	{
			setup:function()
			{
				this.timerModel = new TimerModel({totalTime:200});
			},
			teardown:function()
			{
				this.timerModel = null;
            }
	});
	
	test('Testing the initialze method that calls formatted Time and covert To degree methids of model',function(){
			/**
			 * sinonjs spies are used to test the method invocation
			 */
			this.spy(this.timerModel,"getFormattedTime");
			this.spy(this.timerModel,"getFormattedTotalTime");
			this.spy(this.timerModel,"covertToDegree");
			this.timerModel.initialize();
			ok(this.timerModel.getFormattedTime.calledOnce);
			ok(this.timerModel.getFormattedTotalTime.calledOnce);
	});
	
	
	test('Test init properties in timer model',function(){
		
			equal(this.timerModel.get("time"),200,"time is initialized");
			notEqual(this.timerModel.get("time"),0,"time is initialized");
			
			equal(this.timerModel.get("degree"),1.8,"degree is intialized");
			notEqual(this.timerModel.get("degree"),456,"degree is initalized");
			
			equal(this.timerModel.get("totalTime"),200,"total time is initialized");
			notEqual(this.timerModel.get("totalTime"),456,"total time is initialized");
					
			equal(this.timerModel.get("formattedTime"),"03:20","formatted time is set");
			equal(this.timerModel.get("formattedTotalTime"),"03:20","formatted total time is set");
     });
	
	test('Test decrement counter in timer model',function(){
			this.timerModel.decrementTime();
			equal(this.timerModel.get("time"),199,"time is updated");
			notEqual(this.timerModel.get("time"),0,"time is updated");
		
			equal(this.timerModel.get("formattedTime"),"03:19","formatted total time is updated");
		
			equal(this.timerModel.get("degree"),3.6,"degree is updated");
			notEqual(this.timerModel.get("degree"),456,"degree is updated");
		});
	
	test('Testing validate method being called on changing the time',function(){
			this.spy(this.timerModel,"validate");
			this.timerModel.set("time",0);
			ok(this.timerModel.validate.calledOnce);
	});
	
	
	
});