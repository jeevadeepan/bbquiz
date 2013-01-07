define( [ 'jquery', 'underscore', 'backbone', '/js/app/models/User.js',
        '/js/app/views/Login.js' ], function($, _, Backbone, LoginModel,
        LoginView) {
    module('Testing Login View', {
        setup : function() {
            this.loginModel = new LoginModel();
            this.loginView = new LoginView( {
                model : this.loginModel
            });
        },
        teardown : function() {
            this.loginView = null;
            this.loginModel = null;
        }
    });

    test('Test init properties in login View', function() {
        /*
         * Neeed to improve it using Sinon JS or using asynchronous start() and
         * stop () methods of Quinit , Spy it and test the call backs
         */
        deepEqual(this.loginView.model, this.loginModel,
                "login view with model is initialized");
    });

});