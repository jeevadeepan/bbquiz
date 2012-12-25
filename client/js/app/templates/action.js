/*global define */
define( [ 'handlebars', 'text!/js/app/templates/action.hbs' ], function(
        Handlebars, action) {
    return {
        buttons : Handlebars.compile(action)
    };
});