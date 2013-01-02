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
define( [ 'jquery', 'underscore', 'backbone',  'i18n!locales/QuizText' ], function($, _, Backbone, QuizText) {
    var Login = Backbone.Model.extend( {
        // Set all the default properties here
        defaults : {
            userName : ''
        },
        /**
         * url for storing the user in server side
         */
        urlRoot : '/login',

        /**
         * validation for userName
         * 
         * @param attrs
         * @returns
         */
        validate : function(attrs) {
            if (attrs.userName.length <= 0) {
                return QuizText.pleaseEnterUserName;
            }
        }

    });
    return Login;
});