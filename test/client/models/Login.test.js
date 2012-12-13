define(['jquery', 
        'underscore', 
        'backbone',
        '/js/app/models/Login.js'], function($, _, Backbone,LoginModel){
	module('Testing Login Model',
	{
			setup:function()
			{
				this.loginModel = new LoginModel();
			},
			teardown:function()
			{
				this.loginModel = null;
            }
	});
	
	test('Test init properties in login model',function(){
				equal(this.loginModel.get("userName"),'',"Default user name is empty"); 
				/*equal(A,E,M);
				notEqual(A,E,M);*/
     });
});