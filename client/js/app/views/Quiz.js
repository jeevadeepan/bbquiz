define(
        [ 'jquery', 'underscore', 'backbone', '/js/app/models/Login.js',
                '/js/app/collections/Questions.js',
                '/js/app/models/Question.js', '/js/app/models/Quiz.js',
                '/js/app/models/Timer.js', '/js/app/models/Actions.js',
                '/js/app/models/Result.js', '/js/app/views/Login.js',
                '/js/app/views/Question.js', '/js/app/views/Timer.js',
                '/js/app/views/Actions.js', '/js/app/views/Result.js' ],
        function($, _, Backbone, LoginModel, Questions, Question, QuizModel,
                TimerModel, ActionsModel, ResultModel, LoginView, QuestionView,
                TimerView, ActionsView, ResultView) {

            var Quiz = Backbone.View
                    .extend( {

                        // Define the element corresponding to the view here
                        el : '#main-content',

                        // reference of resultModel
                        resultModel : null,

                        // reference of timerModel
                        timerModel : null,

                        // reference of actionsModel
                        actionsModel : null,

                        // refernce for collection which acts a data source for
                        // the app
                        allQuestions : [],

                        // collection have list of answered Questions
                        answeredQuestions : [],

                        // Define all the events here,In backbone all the events
                        // use event delegation
                        events : {

                        },

                        /*
                         * this function will be called while creating the new
                         * instance of the view. All the thirdparty code
                         * corresponding to the view. should be initialized here
                         */
                        initialize : function() {
                            // Best practice for having reference of the view
                            var that = this;
                            this.on('renderLoginView', that.renderLoginView);
                            this.on('renderResultView', that.renderResultView);

                            that.model
                                    .on(
                                            'change:currentQuestionNumber',
                                            function(model,
                                                    currentQuestionNumber) {
                                                that.updateActions();
                                                that
                                                        .showQuestion(currentQuestionNumber);
                                            });

                            that.model.on('change:questions', function(model,
                                    questions) {
                                that.allQuestions = new Questions(questions);
                                var actionsView = that.createtActionsView();
                                that.$el.append(actionsView.el);
                                that.updateActions();
                                that.model.set('currentQuestionNumber', 0);
                            });

                            that.model.on('change:time', function(model, time) {
                                var timerModel = new TimerModel( {
                                    "totalTime" : time
                                });
                                var timerView = new TimerView( {
                                    model : timerModel
                                });
                                that.$el.append(timerView.el);
                            });

                            that.render();
                        },

                        /*
                         * All the templating updation should be done here, only
                         * this should talk to the template
                         */
                        render : function() {
                            this.trigger('renderLoginView');
                        },

                        /**
                         * Since Login view is the default view and should be
                         * show on rendering the quiz app, the login view will
                         * be initialized and added
                         * 
                         * @returns
                         */
                        renderLoginView : function() {

                        },

                        /**
                         * function to start the quiz by making an ajax request
                         * to the server and getting the list of question and
                         * options
                         */
                        startQuiz : function() {
                            this.model.fetch();
                            this.trigger('renderQuestionView');
                        },

                        renderQuestionView : function() {
                            var question = that.allQuestions.at(0);
                        },

                        /**
                         * function to initialize the action with given data
                         * 
                         * @returns
                         */
                        createtActionsView : function() {
                            var that = this;
                            that.actionsModel = new ActionsModel();
                            return new ActionsView( {
                                model : that.actionsModel,
                                quizModel : that.model
                            });
                        },

                        /**
                         * function that shows next question
                         * 
                         * @returns
                         */
                        showQuestion : function(QuestionNumber) {
                            var that = this;
                            that.$el.find('#questionWrapper').remove();
                            var question = that.getQuestion(QuestionNumber);
                            if (question) {
                                var questionView = new QuestionView( {
                                    model : question,
                                    quizModel : that.model
                                });
                                $(questionView.el).insertAfter(
                                        that.$el.find('#timerWrapper'));
                            }
                        },

                        /**
                         * get the question from the collection to be shown to
                         * the user
                         */
                        getQuestion : function(QuestionNumber) {
                            var that = this;
                            if (that.answeredQuestions.length >= QuestionNumber + 1) {
                                return that.answeredQuestions
                                        .at(QuestionNumber);
                            } else if (that.allQuestions.length > 0) {
                                var question = that.allQuestions.at(0);
                                that.answeredQuestions.push(question);
                                that.allQuestions.remove(question);
                                return question;
                            } else {
                                that.$el.find('#questionWrapper').remove();
                                that.trigger('renderResultView');
                            }

                        },

                        /**
                         * function to enable/disable actions buttons
                         */
                        updateActions : function() {
                            var that = this;
                            var hasPreviousQuestion = (that.model
                                    .get("currentQuestionNumber") > 0) ? true
                                    : false;
                            var hasNextQuestion = (that.model
                                    .get("currentQuestionNumber") <= that.answeredQuestions.length) ? true
                                    : false;
                            that.actionsModel.set("hasPreviousQuestion",
                                    hasPreviousQuestion);
                            that.actionsModel.set("hasNextQuestion",
                                    hasNextQuestion);
                        },

                        /**
                         * function to show result
                         * 
                         * @returns
                         */
                        showResult : function() {
                            var that = this;
                            that.resultModel = new ResultModel();
                            // make an ajax call to evaluate the answers or do
                            // the comparision insie the collection
                            // file the result model with the score
                            var resultView = new ResultView( {
                                model : that.resultModel,
                                quizModel : that.model
                            });
                            that.$el.append(resultView.el);
                        }

                    });

            return Quiz;

        });