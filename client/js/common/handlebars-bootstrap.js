/**
 * Returns Handlebars with a couple global helpers already applied:
 *      - Template Inheritance (block, partial)
 *      - I18n (msg)
 *
 * Should be used instead of regular Handlebars in all projects
 */
define([
    'handlebarslib'
], function(Handlebars) {

    /**************************************************
     * Template Inheritance helpers
     * 
     * More info here: http://thejohnfreeman.com/blog/2012/03/23/template-inheritance-for-handlebars.html
     **************************************************/
    Handlebars.loadPartial = function (name) {
        var partial = Handlebars.partials[name];
        if (typeof partial === "string") {
            partial = Handlebars.compile(partial);
            Handlebars.partials[name] = partial;
        }
        return partial;
    };

    // Denotes a section in a base template that can be overridden by a deriving template
    Handlebars.registerHelper("block", function (name, options) {
        var partial = Handlebars.loadPartial(name) || options.fn;
        return partial(this, { data : options.hash });
    });

    // Used in a derviving template to override a block in the base template
    Handlebars.registerHelper("partial", function (name, options) {
        Handlebars.registerPartial(name, options.fn);
    });


    /**************************************************
     * I18n Helper
     * 
     * Usage: {{msg "bundleFile.key" "replacementVar1"}}
     * 
     * Currently up to 9 replacement vars can be used
     *
     * IMPORTANT: The bundleFile must have already been 'required' in the project prior to compiling the template 
     * that uses this helper
     **************************************************/
    Handlebars.registerHelper('msg', function (bundle_key, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        bundle_key = bundle_key.split('.');
        var bundle = bundle_key[0];
        var key = bundle_key[1];
        var translations = require('i18n!locales/' + bundle);
        var message = translations[key];
        
        for (var i = 1; i < arguments.length && typeof(arguments[i]) == 'string'; i++) {
            message = message.replace(new RegExp("%"+i, 'g'), arguments[i]); 
        }
        
        return message;
    });

    return Handlebars;
});