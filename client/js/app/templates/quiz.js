/*global define */
	define([
		'handlebars',
		'text!/js/app/templates/quiz.hbs',
        'text!/js/app/templates/timer.hbs',
        'text!/js/app/templates/counter.hbs'
	],function(Handlebars, quiz, timer, counter,actions){
		return {
			quiz : Handlebars.compile(quiz),
			timer : Handlebars.compile(timer),
            counter : Handlebars.compile(counter)
		};
	});