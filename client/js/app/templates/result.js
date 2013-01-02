/*global define */
define( [ 'handlebars', 'text!/js/app/templates/result.hbs','i18n!locales/QuizText' ], function(
        Handlebars, result) {
    return {
        result : Handlebars.compile(result)
    };
});