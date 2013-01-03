/**
 * Creator : Pradeep S, Janani J
 * 
 * <ul>
 * <li>Hey, I play only with data. Don't mess with me by providing wrong data,
 * I will not allow you to proceed furthur. Don't forget, I control that dumb
 * guy (Login view) :)</li>
 * <li>validate username</li>
 * </ul>
 */
define( [ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
    var Answer = Backbone.Model.extend( {
        // Set all the default properties here
        defaults : {
    		userName:'',
            answeredQuestions : [],
            score:''
        },
        /**
         * url for storing the user in server side
         */
        urlRoot : '/answers'

    });
    return Answer;
});