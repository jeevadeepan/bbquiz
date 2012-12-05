/*global define */
	define([
		'handlebars'
	],function(Handlebars, loginHeader){
		return {
			loginHeader:'<div></div>',
			login:'<div id="loginName">Enter your Name</div><div id="inputWrapper"><input type="text" /></div>',
			loginButton:'<button id="startGame">Start Game</button><button id="help">Help</button>'
		};
	});