define(['jquery', 
        'underscore', 
        'backbone',
        '/js/app/models/Quiz.js'], function($, _, Backbone,QuizModel){
	module('Testing Quiz Model',
	{
			setup:function()
			{
				this.quizModel = new QuizModel();
			},
			teardown:function()
			{
				this.quizModel = null;
            }
	});
	
	test('Test init properties in Quiz model',function(){
				equal(this.quizModel.get("time"),null,"Default time is null"); 
				equal(this.quizModel.get("randomized"),false,"Default Quiz is not randomized");
				notEqual(this.quizModel.get("randomized"),true,"Default Quiz is not randomized");
				equal(this.quizModel.get("questions"),null,"Default questions are null");
				equal(this.quizModel.get("currentQuestionNumber"),null,"Current question number is null");
				/*equal(A,E,M);
				notEqual(A,E,M);*/
     });
});