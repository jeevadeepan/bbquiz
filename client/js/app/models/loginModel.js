define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var loginModel = Backbone.Model.extend({
		//Set all the default properties here
		default:{
			userName:''
		}
		

	});
	return loginModel;
});