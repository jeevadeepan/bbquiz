/*global define */
define( [ 'handlebars', 'text!/js/app/templates/result.hbs' ], function(
        Handlebars, result) {
    return {
        result : Handlebars.compile(result)
    };
});