define( [ 'jquery', 'underscore', 'backbone', '/js/app/models/User.js',
        '/js/app/views/Login.js' ], function($, _, Backbone, UserModel,
        LoginView) {
    module('Testing Login View ', {
        setup : function() {
            this.userModel = new UserModel();
            this.loginView = new LoginView( {
                model : this.userModel
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
        deepEqual(this.loginView.model, this.userModel,
                "login view with model is initialized");
        this.spy(this.loginView, "startQuiz");
        console.log(this.loginView.$el.find('#startGame'));
        this.loginView.$el.find('#startGame').trigger('click');
        ok(this.loginView.startQuiz.calledOnce);
    });

});