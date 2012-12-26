define(['jquery', 
        'underscore', 
        'backbone',
        '/js/app/models/Timer.js',
        '/js/app/views/Timer.js'], function($, _, Backbone,TimerModel,TimerView){
	module('Testing Timer View',
	{
			setup:function()
			{
				this.timerModel = new TimerModel({totalTime:200});
				
				//using sinon js fake timers
				this.clock = sinon.useFakeTimers();
			},
			teardown:function()
			{
				this.timerView = null;
				this.timerModel = null;		
				this.clock.restore();
            }
	});
	
	test('Test init properties in timer View',function(){
			this.timerView = new TimerView({model:this.timerModel});
			deepEqual(this.timerView.model,this.timerModel,"timer view with model is initialized");
     });
	
	
	test('Testing timer view initialize method which calls the decrement Time method after 1 sec', function(){
			/**
			 * Spies and fake timers are used to test the decrement time method
			 */
			this.timerView = new TimerView({model:this.timerModel});
			this.spy(this.timerModel,"decrementTime");
			this.clock.tick(1001);
			ok(this.timerModel.decrementTime.calledOnce);
			this.clock.tick(1001);
			ok(this.timerModel.decrementTime.calledTwice);	
	});
	
	
	
});