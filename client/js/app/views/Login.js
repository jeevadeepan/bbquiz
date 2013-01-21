/**
 * Creators : Pradeep S,Janani J
 * 
 * <ul>
 * <li>Hey, I am a dumb guy :(, I will just listen or notify, I cannot take
 * decision or do any logic. Sorry, if your disappointed about me, but this is
 * what I am and how I am supposed to be :)</li>
 * <li>1)Shows the login screen to the user by communicating with template
 * engine</li>
 * <li>2)Listens to the validation error triggered by the model</li>
 * <li>3)Notifies the start game button click handler to the Router</li>
 * <li>4)Notifies the help button click handler to the Router</li>
 * <li>5)Please destroy me, before creating the next view, otherwise i will become Zombie
 *       and eat your alive views :)
 * </ul>
 */

define( [ 'jquery', 'underscore', 'backbone', '/js/app/templates/login.js','i18n!locales/QuizText' ],
        function($, _, Backbone, loginTemplate, QuizText) {
            var Login = Backbone.View.extend( {

                tagName : 'div',

                id : 'loginWrapper',

                // Define all the events here,In backbone all the events
                // use event delegation
                events : {
                    'click #startGame' : 'startQuiz',
                    'click #help' : 'showHelp',
                    'keyup #inputWrapper > input' : 'updateUserName',
                    'change :input' : 'updateLanguage'
                },

                /*
                 * this function will be called while creating the new instance
                 * of the view. All the thirdparty code corresponding to the
                 * view. should be initialized here
                 */
                initialize : function() {
                    this.listenTo(this.model,'change:userName',function(model,userName){
                    	this.toggleStartGameButton(false);
                    });
                    this.listenTo(this.model, 'error', function(model, error) {
                    	this.toggleStartGameButton(true);
                        alert(error);
                    });
                },

                /*
                 * All the templating updation should be done here, only this
                 * should talk to the template
                 */
                render : function() {
                	var that = this;
                    this.$el.html(loginTemplate.login);
                    setTimeout(function(){
                    	 that.$el.find('input:first').focus();
                    },1);
                },
                

                /**
                 * function to start the model
                 * 
                 * @returns
                 */
                startQuiz : function() {
                    var that = this;
                    this.model.save({'userName' : $('#inputWrapper > input').val()},{
                    		error : function(){
                    			alert("Please enter a valid userName");
                    			return;
                    }});
                },

                /**
                 * function to show help page
                 * 
                 * @returns
                 */
                showHelp : function() {
                    // show the help
                    Backbone.history.navigate('/help', {
                        trigger : true
                    });
                },

                /**
                 * function to update user name
                 * 
                 * @returns
                 */
                updateUserName : function(e) {
                    this.model.set('userName', $(e.target).val());
                },
                
                updateLanguage : function(e){
                	Language = $(e.target).val();
                	//add logic to update the language and reload the app
                },
                
                /**
                 * function to enable/disable start game button
                 * @param disabled
                 * @returns
                 */
                toggleStartGameButton: function(disabled){
                	if(disabled){
                		this.$el.find('#startGame').attr("disabled", "disabled");
                	}else{
                		this.$el.find('#startGame').removeAttr("disabled");
                	}
                },

                /**
                 * method to unbind all event handlers and remove the view from
                 * the DOM
                 * Marionette region manager calls close() method, before showing
                 * next view/ closing the current view
                 * @returns
                 */
                close : function() {
                    this.remove();
                }

            });

            return Login;

        });