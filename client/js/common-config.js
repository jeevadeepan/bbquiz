function includeCommonConfig() {
    require.config({
        baseUrl: '/theme/js',
        paths: {
            jquery: 'lib/jquery-1.7.2.min',
            jqueryui: 'lib/jqueryui',
            underscore: 'lib/underscore-1.3.3',
            backbone: 'lib/backbone-0.9.2',
            handlebarslib: 'lib/handlebars-1.0.rc.1',
            handlebars: 'common/handlebars-bootstrap'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            handlebarslib: {
                 exports: 'Handlebars'
            },
            'lib/toastr': {
                deps: ['jquery'],
                exports: 'toastr'
            },
            'lib/colorbox-min': ['jquery'],
            'lib/jquery.simplePagination': ['jquery'],
            'lib/jquery.editable': ['jquery'],
            'lib/jquery.liveFilter': ['jquery'],
            'lib/jquery.multi-select': ['jquery'],
            'lib/jquery.tipsy': ['jquery'],
            'lib/jquery.tzCheckbox': ['jquery'],
            'lib/jquery.liveUpdate': ['jquery']
        }
    });
    // Separate config to hide from build script
    require.config({
        i18n: {
            locale: _BM_USER_LANGUAGE
        }
    });
}