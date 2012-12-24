( {
    // Only copy js files to a
    appDir : ".",
    baseUrl : ".",
    dir : "../js-build",

    // Don't copy hidden files or directories (like .svn)
    fileExclusionRegExp : /^\./,

    // Get shim configs from common
    mainConfigFile : './common-config.js',

    // Choose optimization method
    optimize : 'uglify',

    // Set up simple paths
    // NOTE: Most of this property should be directly copied from
    // common-config.js
    paths : {
        jquery : 'lib/jquery-1.7.2.min',
        jqueryui : 'lib/jqueryui',
        underscore : 'lib/underscore-1.3.3',
        backbone : 'lib/backbone-0.9.2',
        handlebarslib : 'lib/handlebars-1.0.rc.1',
        handlebars : 'common/handlebars-bootstrap',

        // Specific to app.build
        requireLib : 'require'
    },

    // Adds a namespace to the build to avoid conflicts with PS using requirejs
    namespace : 'bmdev',

    // Add modules here
    modules : [ {
        // Build the require.js file with the namespace
        name : "require",
        include : [ 'requireLib' ]
    }, {
        name : "admin/freemarker/main"
    }, {
        name : "admin/pricing/profileMain"
    }, {
        name : "admin/pricing/contractMain"
    }, {
        name : "admin/template-engine/emailTemplatesMain"
    }, {
        name : "admin/template-engine/templateEditorMain"
    }, {
        name : "admin/formula-management/formulaMain"
    } ]
})