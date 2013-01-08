define( [ 'jquery', 'underscore', 'backbone', '/js/app/models/User.js',
        '/js/app/views/Login.js' ], function($, _, Backbone, UserModel,
        LoginView) {
    module('Testing Login View ', {
        setup : function() {
            this.userModel = new UserModel();
        },
        teardown : function() {
            this.loginModel = null;
        }
    });

    test('Test init properties in login View', function() {
        /*
         * Neeed to improve it using Sinon JS or using asynchronous start() and
         * stop () methods of Quinit , Spy it and test the call backs
         */
    	 var that = this;
    	 var init = LoginView.prototype.initialize;
    	 LoginView.prototype.initialize = function() {
    	        that.spy(this, 'startQuiz');
    	        init.apply(this,arguments);
    	 };
    	 this.loginView = new LoginView(this.userModel);
    	 console.log(this.loginView);
         deepEqual(this.loginView.model, this.userModel,
                "login view with model is initialized");
         console.log(this.loginView.$el.find('#startGame'));
         this.loginView.$el.find('#startGame').trigger('click');
         ok(this.loginView.startQuiz.calledOnce);
    });

});