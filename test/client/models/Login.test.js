define( [ 'jquery', 'underscore', 'backbone', '/js/app/models/Login.js' ],
        function($, _, Backbone, LoginModel) {
            module('Testing Login Model', {
                setup : function() {
                    this.loginModel = new LoginModel();
                },
                teardown : function() {
                    this.loginModel = null;
                }
            });

            test('Test init properties in login model', function() {
                equal(this.loginModel.get("userName"), '',
                        'Default user name is empty');
                notEqual(this.loginModel.get("userName"), 'test',
                        'Default user name is empty');

            });

            test('Test setting the properties of login Model', function() {
                this.loginModel.set("userName", "$$$$");
                equal(this.loginModel.get("userName"), '$$$$',
                        'username is set');
                notEqual(this.loginModel.get("userName"), '####',
                        'username is set');

            });

            test('Testing the validate method with empty username', function() {
                this.loginModel.set("userName", "");
                var validate = this.loginModel
                        .validate(this.loginModel.attributes);
                equal('Please enter User Name', validate, 'username is empty');
                notEqual('', validate, 'username is empty');
            });

            test('Testing the validate method after setting username',
                    function() {
                        this.loginModel.set("userName", "$$$");
                        var validate = this.loginModel
                                .validate(this.loginModel.attributes);
                        equal(undefined, validate, 'username is set');
                        notEqual('Please enter User name', validate,
                                'username is set');

                    });

        });