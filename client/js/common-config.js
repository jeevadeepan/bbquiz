function includeCommonConfig() {
    require.config( {
        baseUrl : '/js',
        paths : {
            jquery : 'lib/jquery-1.7.2.min',
            jqueryui : 'lib/jqueryui',
            underscore : 'lib/underscore-min',
            backbone : 'lib/backbone-min',
            handlebarslib : 'lib/handlebars-1.0.rc.1',
            handlebars : 'common/handlebars-bootstrap'
        },
        shim : {
            underscore : {
                exports : '_'
            },
            backbone : {
                deps : [ 'underscore', 'jquery' ],
                exports : 'Backbone'
            },
            handlebarslib : {
                exports : 'Handlebars'
            },
            'lib/backbone.marionette.min' : [ 'backbone' ]
        }
    });
    
    require.config({
        i18n: {
            locale: Language
        }
    });
}