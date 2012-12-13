define(['jquery', 
        'underscore', 
        'backbone',
        '/js/app/models/Result.js'], function($, _, Backbone,ResultModel){
	module('Testing Result Model',
	{
			setup:function()
			{
				this.resultModel = new ResultModel();
			},
			teardown:function()
			{
				this.resultModel = null;
            }
	});
	
	test('Test init properties in result model',function(){
				equal(this.resultModel.get("score"),0,"Default score is 0"); 
				/*equal(A,E,M);
				notEqual(A,E,M);*/
     });
});