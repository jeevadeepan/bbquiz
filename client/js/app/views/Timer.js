define( [ 'jquery', 'underscore', 'backbone', '/js/app/templates/quiz.js' ],
        function($, _, Backbone, QuizTemplate) {

            var Timer = Backbone.View.extend( {

            	el : '#timerWrapper',
            	
                timerId : null,

                // Define all the events here,In backbone all the events use
                // event delegation
                events : {},

                /*
                 * this function will be called while creating the new instance
                 * of the view. All the thirdparty code corresponding to the
                 * view. should be initialized here
                 */
                initialize : function() {
                    var that = this;
                    that.render();
                    
                    // Update the total time
                    that.listenTo(this.model, 'change:time', function(model,
                            time) {
                        that.$el.find('#counter').text(
                                that.model.get("formattedTime"));
                    });

                    that.listenTo(this.model, 'change:degree', function(model,
                            degree) {
                        $('#movingHand').css('-webkit-transform',
                                'rotate(' + degree + 'deg)');
                        $('#movingHand').css('-webkit-transform-origin',
                                '50%100%');
                    });

                    that.listenTo(this.model, 'error', function(model, error) {
                        clearInterval(that.timerId);
                        alert(error);
                    	var answers = {
                    		userName : that.options.quizModel.get("userName"),
                    		answeredQuestions : that.options.quizModel.get("questions").getAnswers()
                    	};
                        QuizApp.vent.trigger('showResult',answers);
                    });
                    that.initTimer();
                },

                /*
                 * All the templating updation should be done here, only this
                 * should talk to the template
                 */
                render : function() {
                    this.$el.html(QuizTemplate.timer);
                    var timer = $(QuizTemplate.timer());
                    var counter = $(QuizTemplate.counter( {
                        'remainingTime' : this.model.getFormattedTime(this.model.get("totalTime"))
                    }));
                    counter.appendTo(this.$el);
                },

                /**
                 * initialize the timer
                 * 
                 * @returns
                 */
                initTimer : function() {
                    var that = this;
                    that.timerId = setInterval(function() {
                        that.model.decrementTime();
                    }, 1000);
                },

                /**
                 * method to unbind all event handlers and remove the view from
                 * the DOM
                 * Marionette region manager calls close() method, before showing
                 * next view/ closing the current view
                 * @returns
                 */
                close : function() {
                    this.stopListening();
                    this.remove();
                }

            });

            return Timer;

        });