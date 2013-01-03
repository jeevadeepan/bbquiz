/**
 * Creators : Pradeep S,Janani J
 * 
 * <ul>
 * <li>Hey, I am a composite view, who can manage other views. So i am little intelligent 
 * </li>
 * <li>1)creates a timer, based on the time set</li>
 * <li>2)shuffles the questions, if randomised is true</li>
 * <li>3)Show the first question</li>
 * <li>4)Create the Quit,Pass,Next buttons</li>
 * <li>5)Please destroy me, before creating the next view, otherwise i will become a Zombie
 *       and eat your alive views :)
 * </ul>
 */
define( [ 'jquery', 'underscore', 'backbone',
        '/js/app/collections/Questions.js', '/js/app/models/Question.js',
        '/js/app/models/Quiz.js', '/js/app/models/Timer.js',
        '/js/app/views/Login.js',
        '/js/app/views/Question.js', '/js/app/views/Timer.js',
        '/js/app/views/Result.js',
        '/js/app/collections/Questions.js', '/js/app/Models/Answer.js', '/js/app/templates/quiz.js' ], function($, _, Backbone,
        Questions, QuestionModel, QuizModel, TimerModel, 
        LoginView, QuestionView, TimerView, ResultView,
        QuestionsCollection, Answer ,QuizTemplate) {

    var Quiz = Backbone.View.extend( {
        tagName : 'div',
        // Define the element corresponding to the view here
        id : 'quiz-content',

        /**
         * variables to store the current question and timer and to prevent Zombie views
         */
        currentQuestion : null,
        
        timer : null,
        
        events : {
    		'click .quitButton' : 'showResult',
    		'click .nextButton' : 'validateAndShowNextQuestion',
    		'click .passButton' : 'showNextQuestion'
    	},
        
        /*
         * this function will be called while creating the new instance of the
         * view. All the thirdparty code corresponding to the view. should be
         * initialized here
         */
        initialize : function() {
    		var that = this;
    		
    		/**
    		 * view listens to the model,when time is set in the model it creats the timer
    		 */
    		this.listenTo(that.model,"change:time", function(model,time){
    			that.createTimer(time);
    		});
    		
    	
            /**
             * Bind the model current Index with the question
             */
            this.listenTo(that.model, "change:currentIndex", function(model,
                    currentIndex) {
            	var questions = model.get("questions");
            	var question = questions.at(currentIndex);
                question.set("questionNumber", currentIndex + 1);
                question.set("totalQuestions", questions.length);
                //destroy the existin question view and prevent zombies
                if(that.currentQuestion){
                	that.currentQuestion.destroy();
                }
                that.currentQuestion = new QuestionView( {
                    model : question
                });
            });
    		
            /**
             * validation error if all the questions are answered
             */
            this.listenTo(that.model, "error", function(model, error) {
                alert(error);
                that.remove();
                that.showResult();
            });
      
            this.render();
        },

        /*
         * All the templating updation should be done here, only this should
         * talk to the template
         */
        render : function() {
        	this.$el.html(QuizTemplate.quiz);
        },
        
       /**
        * create timer with the given time
        * @param time
        * @returns
        */
        createTimer : function(time){
        	var that = this;
        	var timerModel = new TimerModel({
        		"totalTime" : time,
        		"time" : time
        	});
            this.timer = new TimerView( {
                model : timerModel,
                quizModel : that.model
            });
        },

        /**
         * method to unbind all event handlers and remove the view from the DOM
         * 
         * @returns
         */
        destroy : function() {
            this.stopListening();
            this.remove();
        },
        
        /**
         * evaluate the answers and  show result
         * @returns
         */
        showResult : function(){
        	var that = this;
        	var answers = {
        		userName : that.model.get("userName"),
        		answeredQuestions : this.model.get("questions").getAnswers()
        	};
        	that.timer.destroy();
        	that.destroy();
        	QuizApp.vent.trigger('showResult',answers);
        },
        
        /**
         * validate if the current question is answered and show next question
         * @returns
         */
        validateAndShowNextQuestion : function(){
        	if(!this.currentQuestion.model.isAnswered()){
        		this.showNextQuestion();
        	}else{
        		alert("Please answer the question to proceed");
        	}
        },
        
        /**
         * just show next question
         * @returns
         */
        showNextQuestion : function(){
        	var currentIndex = this.model.get("currentIndex")+1;
        	this.model.set("currentIndex",currentIndex);
        }

    });

    return Quiz;

});