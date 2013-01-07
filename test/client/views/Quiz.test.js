define( [ 'jquery', 'underscore', 'backbone', '/js/app/models/Quiz.js',
        '/js/app/collections/Questions.js', '/js/app/views/Quiz.js' ],
        function($, _, Backbone, QuizModel, QuestionsCollection, QuizView) {

            /**
             * 1) whether they are bound to correct model or collection
             */
            module('Testing Quiz View, bound to model/collection', {
                setup : function() {
                    this.quizModel = new QuizModel();
                    this.quizView = new QuizView( {
                        model : this.quizModel,
                        collection : new QuestionsCollection( [])
                    });
                },
                teardown : function() {
                    this.quizModel = null;
                    this.quizView = null;
                }
            });

            test('test model bound to view', function() {
                deepEqual(this.quizView.model, this.quizModel, "model binded");
            });

            /**
             * 2) whether they are bound to correct dom element, while creating
             */
            module('Testing Quiz View, bound to dom element', {
                setup : function() {
                    this.quizModel = new QuizModel();
                    this.quizView = new QuizView( {
                        model : this.quizModel
                    });
                },
                teardown : function() {
                    this.quizModel = null;
                    this.quizView = null;
                }
            });

            test('test model bound to view', function() {
                deepEqual(this.quizView.model, this.quizModel, "model binded");
            });

            /**
             * 3) whether they render the correct templates
             */
            module('Testing Quiz View, correct templates are rendered', {
                setup : function() {
                    this.quizModel = new QuizModel();
                    this.quizView = new QuizView( {
                        model : this.quizModel
                    });
                },
                teardown : function() {
                    this.quizModel = null;
                    this.quizView = null;
                }
            });

            test('test model bound to view',
                    function() {
                        equal(this.quizView.el.tagName.toLowerCase(), 'div',
                                'bounded todiv');
                        equal(this.quizView.el.id, 'quiz-content',
                                'bound div with id');
                    });

            /**
             * 4)whether the wiring of view methods and dom elements is done
             */
            module('Testing Quiz View, wiring the dom element is done', {
                setup : function() {
                    this.quizModel = new QuizModel();
                    this.quizView = new QuizView( {
                        model : this.quizModel
                    });
                },
                teardown : function() {
                    this.quizModel = null;
                    this.quizView = null;
                }
            });

            /*
             * test('test model bound to view', function() {
             * deepEqual(this.quizView.model, this.quizModel, "modelbinded");
             * });
             */
        });
