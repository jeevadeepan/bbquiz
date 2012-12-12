define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var Result = Backbone.Model.extend({
		//Set all the default properties here
		defaults:{
			score:0,
			display:true
		}
	});
	return Result;
});