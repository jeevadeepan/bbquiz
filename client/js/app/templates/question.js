/*global define */
	define([
		'handlebars'
	],function(Handlebars){
		return {
			details:'<div id="questionDetails"><div class="index"></div><div class="weight"></div></div>',
			questionWrapper:'<div id="question"></div>',
			imageWrapper:'<div id="imageWrapper"><img src=""/></div>',
			answersWrapper:'<div id="answersWrapper"></div>',
			radioAnswer:'<label><input type="radio" name="answer"></input><label>',
			fillinAnswer:'<input type="text" name="answer">'
		};
	});