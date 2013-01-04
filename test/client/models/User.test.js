define( [ 'jquery', 'underscore', 'backbone', '/js/app/models/User.js' ],
        function($, _, Backbone, UserModel) {
            module('Testing User Model', {
                setup : function() {
                    this.userModel = new UserModel();
                },
                teardown : function() {
                    this.userModel = null;
                }
            });
            
            
            test('Test init properties in user model', function() {
                equal(this.userModel.get("userName"), '',
                        'Default user name is empty');
                notEqual(this.userModel.get("userName"), 'test',
                        'Default user name is empty');
                equal(this.userModel.urlRoot,'/login',
                		'urlRoot set to /login to save model to server');
                notEqual(this.userModel.urlRoot,'','urlRoot set to /login to save model to server');
            });

            test('Test setting the properties of user Model', function() {
                this.userModel.set("userName", "$$$$");
                equal(this.userModel.get("userName"), '$$$$',
                        'username is set');
                notEqual(this.userModel.get("userName"), '####',
                        'username is set');

            });

            test('Testing the validate method with empty username', function() {
                this.userModel.set("userName", "");
                var validate = this.userModel
                        .validate(this.userModel.attributes);
                equal('Please enter User Name', validate, 'username is empty');
                notEqual('', validate, 'username is empty');
            });

            test('Testing the validate method after setting username',
                    function() {
                        this.userModel.set("userName", "$$$");
                        var validate = this.userModel
                                .validate(this.userModel.attributes);
                        equal(undefined, validate, 'username is set');
                        notEqual('Please enter User name', validate,
                                'username is set');

            });
            
            /**
             * Testing the validate method using Sinon JS spies
             */
            test('Tesing the validate method is called after setting the username',function(){
            	//adding spy on the set method
            	this.spy(this.userModel,"validate");
            	this.userModel.set("userName","$$$");
            	ok(this.userModel.validate.calledOnce);
            	this.userModel.set("userName","");
            	ok(this.loginModel.validate.calledTwice);
            });

        });