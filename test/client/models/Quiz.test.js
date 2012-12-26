define(
        [ 'jquery', 'underscore', 'backbone', '/js/app/models/Quiz.js' ],
        function($, _, Backbone, QuizModel) {

            /**
             * 1) New instances can be created with the expected default values
             */
            module('Testing Quiz Model with Default values', {
                setup : function() {
                    this.quizModel = new QuizModel();
                },
                teardown : function() {
                    this.quizModel = null;
                }
            });

            test('Test Default properties in Quiz model',
                    function() {
                        equal(this.quizModel.get("time"), null,
                                "Default time is null");
                        equal(this.quizModel.get("randomized"), false,
                                "Default Quiz is not randomized");
                        notEqual(this.quizModel.get("randomized"), true,
                                "Default Quiz is not randomized");
                        deepEqual(this.quizModel.get("questions"), [],
                                "Default questions are null");
                        equal(this.quizModel.get("currentIndex"), null,
                                "Current question number is null");
                        /*
                         * equal(A,E,M); notEqual(A,E,M);
                         */
                    });

            /**
             * 2) Attributes can be set and retrieved correctly
             */
            module(
                    'Testing Quiz Model,Attributes can be set and retrieved correctly',
                    {
                        setup : function() {
                            this.quizModel = new QuizModel( {
                                "randomized" : true
                            });
                        },
                        teardown : function() {
                            this.quizModel = null;
                        }
                    });

            test('Test Attributes are properly set and retrived from model',
                    function() {
                        equal(this.quizModel.get("randomized"), true,
                                "Default Quiz is not randomized");
                        notEqual(this.quizModel.get("randomized"), false,
                                "Default Quiz is not randomized");
                    });

            /**
             * 3)Since there are no custom events that will fire on state change
             * of model, corresponding test module doesn't exist.
             */

            /**
             * 4)validation rules are enforced
             */
            module('Testing Quiz Model with Validation and error trigger', {
                setup : function() {
                    this.quizModel = new QuizModel( {
                        "questions" : []
                    });
                },
                teardown : function() {
                    this.quizModel = null;
                }
            });

            test('Test validation method in model', function() {
                var errorCallback = this.spy();
                this.quizModel.bind('error', errorCallback);
                this.quizModel.set('currentIndex', 0);
                ok(errorCallback.called,
                        'validation has failed and error method called');
                notEqual(errorCallback.getCall(0), undefined);
                equal(errorCallback.getCall(0).args[1],
                        "All Questions completed");
            });

        });