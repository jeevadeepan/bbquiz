define( [ 'jquery', 'underscore', 'backbone', '/js/app/templates/action.js' ],
        function($, _, Backbone, ActionTemplate) {

            var Actions = Backbone.View.extend( {

                // Define the element corresponding to the view here
                tagName : 'div',

                id : 'actionsWrapper',

                // Define all the events here,In backbone all the events use
                // event delegation
                events : {
                    'click .quitButton' : 'showResult',
                    'click .nextButton' : 'validateAndShowNextQuestion',
                    'click .passButton' : 'showNextQuestion'
                },

                /*
                 * this function will be called while creating the new instance
                 * of the view. All the thirdparty code corresponding to the
                 * view. should be initialized here
                 */
                initialize : function() {
                    // Best practice for having reference of the view
                    this.render();
                },

                /*
                 * All the templating updation should be done here, only this
                 * should talk to the template
                 */
                render : function() {
                    this.$el.html(ActionTemplate.buttons);
                },

                /**
                 * show result page
                 * 
                 * @returns
                 */
                showResult : function() {
                    Backbone.history.navigate("/result", {
                        trigger : true
                    });
                },

                /**
                 * validate if the question is answered and show next question
                 * 
                 * @returns
                 */
                validateAndShowNextQuestion : function() {
                    this.trigger("validateAndShowNext");
                },

                /**
                 * show next question
                 * 
                 * @returns
                 */
                showNextQuestion : function() {
                    this.trigger("showNext");
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

            return Actions;

        });