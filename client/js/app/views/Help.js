define( [ 'jquery', 'underscore', 'backbone', '/js/app/templates/help.js' ],
        function($, _, Backbone, HelpTemplate) {

            var Result = Backbone.View.extend( {
                tagName : 'div',

                id : 'helpWrapper',

                // Define all the events here,In backbone all the events use
                // event delegation
                events : {
                    'click #startGame' : 'startQuiz'
                },

                /*
                 * this function will be called while creating the new instance
                 * of the view. All the thirdparty code corresponding to the
                 * view. should be initialized here
                 */
                initialize : function() {
                    // Best practice for having reference of the view
                    var that = this;
                    that.render();
                },

                /*
                 * All the templating updation should be done here, only this
                 * should talk to the template
                 */
                render : function() {
                    var that = this;
                    that.$el.html(HelpTemplate.helpHeader + HelpTemplate.help
                            + HelpTemplate.startGameButton);
                },

                /**
                 * function to start the model
                 * 
                 * @returns
                 */
                startQuiz : function() {
                    this.remove();
                    Backbone.history.navigate('/quiz', {
                        trigger : true
                    });
                },

                /**
                 * method to unbind all event handlers and remove the view from
                 * the DOM
                 * 
                 * @returns
                 */
                destroy : function() {
                    this.stopListening();
                    this.remove();
                }

            });

            return Result;

        });