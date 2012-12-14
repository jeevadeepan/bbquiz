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
				this.timerView = new TimerView({model:this.timerModel});
			},
			teardown:function()
			{
				this.timerView = null;
				this.timerModel = null;				
            }
	});
	
	test('Test init properties in timer View',function(){
			/*Neeed to improve it using Sinon JS or using asynchronous start() and stop () methods of Quinit , 
			 *Spy it and test the call backs
			*/
			deepEqual(this.timerView.model,this.timerModel,"timer view with model is initialized");
     });
	
});