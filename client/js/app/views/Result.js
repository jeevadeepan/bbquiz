define( [ 'jquery', 'underscore', 'backbone', '/js/app/templates/result.js' ],
        function($, _, Backbone, ResultTemplate) {

            var Result = Backbone.View.extend( {
                tagName : 'div',

                id : 'resultWrapper',

                // Define all the events here,In backbone all the events use
                // event delegation
                events : {
                    'click #restartGame' : 'restartQuiz'
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
                    this.$el.html(ResultTemplate.result);
                    this.$el.find('#score').html(this.model.get("score"));
                },

                /**
                 * function to start the model
                 * 
                 * @returns
                 */
                restartQuiz : function() {
                	QuizApp.vent.trigger("showLogin");
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