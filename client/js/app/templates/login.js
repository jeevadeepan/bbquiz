/*global define */
	define([
		'handlebars'
	],function(Handlebars){
		return {
			loginHeader:'<div id="login-header"><div></div></div>',
			login:'<div id="loginName">Enter your Name</div><div id="inputWrapper"><input type="text" /></div>',
			loginButton:'<div id="actions"><button id="startGame">Start Game</button><button id="help">Help</button></div>'
		};
	});