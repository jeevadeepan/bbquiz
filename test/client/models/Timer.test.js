define(['jquery', 
        'underscore', 
        'backbone',
        '/js/app/models/Timer.js'], function($, _, Backbone,TimerModel){
	module('Testing Timer Model',
	{
			setup:function()
			{
				this.timerModel = new TimerModel();
			},
			teardown:function()
			{
				this.timerModel = null;
            }
	});
	
	test('Testing the calls of formatted Time and covert To degree methids of model',function(){
			/**
			 * sinonjs spies are used to test the method invocation
			 */
			this.spy(this.timerModel,"getFormattedTime");
			this.spy(this.timerModel,"covertToDegree");
			this.spy(this.timerModel,"validate");
			this.spy(this.timerModel,"decrementTime");
			this.timerModel.set("totalTime",200);
			this.timerModel.decrementTime();
			ok(this.timerModel.getFormattedTime.calledOnce);
			ok(this.timerModel.covertToDegree.calledOnce);
			ok(this.timerModel.validate.called);
			ok(this.timerModel.decrementTime.calledOnce);
			
	});
	
	
	test('Test init properties in timer model',function(){
			this.timerModel.set("totalTime",200);
			this.timerModel.set("time",200);
			this.timerModel.set("degree",0);
			equal(this.timerModel.get("time"),200,"time is initialized");
			notEqual(this.timerModel.get("time"),0,"time is initialized");
			equal(this.timerModel.getFormattedTime(200),"03:20","formatted time is set");
			this.timerModel.covertToDegree();
			equal(this.timerModel.get("degree"),"1.8","formatted total time is set");
     });
	
	test('Test decrement counter in timer model',function(){
			this.timerModel.set("totalTime",200);
			this.timerModel.set("time",200);
			this.timerModel.set("degree",0);
			this.timerModel.decrementTime();
			equal(this.timerModel.get("time"),199,"time is updated");
			notEqual(this.timerModel.get("time"),0,"time is updated");
			equal(this.timerModel.get("formattedTime"),"03:19","formatted total time is updated");
			equal(this.timerModel.get("degree"),1.8,"degree is updated");
			notEqual(this.timerModel.get("degree"),456,"degree is updated");
		});
	
	test('Testing validate method being called on changing the time',function(){
			this.spy(this.timerModel,"validate");
			this.timerModel.set("time",0);
			ok(this.timerModel.validate.calledOnce);
	});
	
	
	
});