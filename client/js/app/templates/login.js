/*global define */
define(
        [ 'handlebars',
          'text!/js/app/templates/login.hbs',
          'i18n!locales/QuizText' ],
        function(Handlebars,login) {
            return {
               login: Handlebars.compile(login)
            };
        });