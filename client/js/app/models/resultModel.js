define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
	var resultModel = Backbone.Model.extend({
		//Set all the default properties here
		defaults:{
			score:0,
			display:true
		}
	});
	return resultModel;
});