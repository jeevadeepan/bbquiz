/*global define */
	define([
		'handlebars',
        'text!/js/app/templates/timer.hbs',
        'text!/js/app/templates/counter.hbs',
	],function(Handlebars, timer, counter){
		return {
			timer:Handlebars.compile(timer),
            counter: Handlebars.compile(counter),
			buttons:'<div id="actions"><button id="next">Next</button></div>'
		};
	});