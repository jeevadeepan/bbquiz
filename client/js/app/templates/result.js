/*global define */
	define([
		'handlebars'
	],function(Handlebars, loginHeader){
		return {
			resultHeader:'<div id="resultHeader"><div></div></div>',
			result:'<div id="scoreWrapper"><div id="scoreHeader">Your score</div><div id="score"><span></span></div></div>',
			resultButton:'<div id="resultActions"><button id="restartGame">ReStart Game</button>'
		};
	});