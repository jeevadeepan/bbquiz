/*global define */
	define([
		'handlebars',
		'text!/js/app/templates/question.hbs'
	],function(Handlebars,question){
		return {
			question:Handlebars.compile(question),
			imageWrapper:'<div id="imageWrapper"><img src=""/></div>',
			radioAnswer:'<label><input type="radio" name="answer"></input><label>',
			fillinAnswer:'<input type="text" name="answer">'
		};
	});