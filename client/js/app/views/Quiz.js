define( [ 'jquery', 'underscore', 'backbone',
        '/js/app/collections/Questions.js', '/js/app/models/Question.js',
        '/js/app/models/Quiz.js', '/js/app/models/Timer.js',
        '/js/app/models/Result.js', '/js/app/views/Login.js',
        '/js/app/views/Question.js', '/js/app/views/Timer.js',
        '/js/app/views/Actions.js', '/js/app/views/Result.js',
        '/js/app/collections/Questions.js' ], function($, _, Backbone,
        Questions, QuestionModel, QuizModel, TimerModel, ResultModel,
        LoginView, QuestionView, TimerView, ActionsView, ResultView,
        QuestionsCollection) {

    var Quiz = Backbone.View.extend( {
        tagName : 'div',
        // Define the element corresponding to the view here
        id : '#quiz-content',

        /*
         * this function will be called while creating the new instance of the
         * view. All the thirdparty code corresponding to the view. should be
         * initialized here
         */
        initialize : function() {
            /**
             * if the question are randomized then check the shuffle the
             * collection provided by underscore method
             */
            if (this.model.get("randomized")) {
                // _.shuffle(this.collection);
            }
            this.render();
        },

        /*
         * All the templating updation should be done here, only this should
         * talk to the template
         */
        render : function() {
            var that = this;
            /**
             * initialize the timer
             */
            var timerModel = new TimerModel( {
                "totalTime" : this.model.get("time")
            });
            var timerView = new TimerView( {
                model : timerModel
            });
            this.$el.append(timerView.el);

            this.model.listenTo("error", function(model, error) {
                alert(error);
                that.remove();
                console.log(that.collection.at(0).changedAttributes);
                //that.model.save(that.collection.getAnsweredQuestions());
                Backbone.history.navigate("/result",{trigger:true});
            });

            /**
             * Bind the model current Index with the question
             */
            this.model.listenTo("change:currentIndex", function(model, currentIndex) {
                var questionModel = that.collection.at(currentIndex);
                questionModel.set("questionNumber",currentIndex+1);
                questionModel.set("totalQuestions",that.collection.length);
                var questionView = new QuestionView({
                    model : questionModel
                });
                $(questionView.el).insertAfter(that.$el.find('#timerWrapper'));
            });

            var actionsView = new ActionsView();

            actionsView.listenTo("showNext", function() {
                that.$el.find("#questionWrapper").remove();
                that.model.set("currentIndex",
                        that.model.get("currentIndex") + 1);
            });

            actionsView.listenTo("validateAndShowNext", function() {
                var currentQuestion = that.collection.at(that.model
                        .get("currentIndex"));
                if (currentQuestion.isAnswered()) {
                	this.trigger("showNext");
                } else {
                    alert("Please Answer the question to proceed");
                }

            });
            this.$el.append(actionsView.el);

            /**
             * show the question at current Index
             */
            this.model.set("currentIndex", 0);
        },
        
        /**
         * method to unbind all event handlers and remove the view from the DOM
         * @returns
         */
        destroy: function(){
        	this.stopListening();
        	this.remove();
        }

    });

    return Quiz;

});