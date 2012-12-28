function includeCommonConfig() {
    require.config( {
        baseUrl : '/js',
        paths : {
            jquery : 'lib/jquery-1.7.2.min',
            jqueryui : 'lib/jqueryui',
            underscore : 'lib/underscore-1.3.3',
            backbone : 'lib/backbone-min',
            backbone_routefilter : 'lib/backbone.routefilter.min',
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
            backbone_routerfilter : [ 'backbone' ]
        }
    });

}