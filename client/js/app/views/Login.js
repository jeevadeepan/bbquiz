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
 * </ul>
 */

define( [ 'jquery', 'underscore', 'backbone', '/js/app/templates/login.js' ],
        function($, _, Backbone, loginTemplate) {

            var Login = Backbone.View.extend( {

                tagName : 'div',

                id : 'loginWrapper',

                // Define all the events here,In backbone all the events
                // use
                // event delegation
                events : {
                    'click #startGame' : 'startQuiz',
                    'click #help' : 'showHelp',
                    'keyup #inputWrapper > input' : 'updateUserName'
                },

                /*
                 * this function will be called while creating the new instance
                 * of the view. All the thirdparty code corresponding to the
                 * view. should be initialized here
                 */
                initialize : function() {
                    this.render();
                    this.model.on('error', function(model, error) {
                        alert(error);
                    });
                },

                /*
                 * All the templating updation should be done here, only this
                 * should talk to the template
                 */
                render : function() {
                    this.$el.html(loginTemplate.loginHeader
                            + loginTemplate.login + loginTemplate.loginButton);
                    this.$el.find('input:first').focus();
                },

                /**
                 * function to start the model
                 * 
                 * @returns
                 */
                startQuiz : function() {
                    var that = this;
                    this.model.save( {
                        'userName' : $('#inputWrapper > input').val()
                    }, {
                        success : function(model, response) {
                            that.trigger('startQuiz');
                            that.destroy();
                            return;
                        },
                        error : function(model, error) {
                            alert(error);
                        }
                    });
                },

                /**
                 * function to show help page
                 * 
                 * @returns
                 */
                showHelp : function() {
                    this.remove();
                    this.trigger('showHelp');
                },

                /**
                 * function to update user name
                 * 
                 * @returns
                 */
                updateUserName : function(e) {
                    this.model.set('userName', $(e.target).val());
                },

                /**
                 * function to undelegate all the events binded and remove the
                 * view
                 * 
                 * @returns
                 */
                destroy : function() {
                    this.undelegateEvents();
                    this.$el.html('');
                }

            });

            return Login;

        });