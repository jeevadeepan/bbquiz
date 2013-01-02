define(
        [ 'handlebars' , 'text!/js/app/templates/help.hbs',
          'i18n!locales/QuizText'],
        function(HandleBars,help) {
            return {
                help : HandleBars.compile(help)
            };
        });