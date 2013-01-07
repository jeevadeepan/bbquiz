/**
 * Creators:Pradeep S, Janani J Unit test cases for the model
 */
define(
        [ 'jquery', 'underscore', 'backbone', '/js/app/models/User.js' ],
        function($, _, Backbone, UserModel) {
            module('Testing User Model', {
                setup : function() {
                    this.userModel = new UserModel();
                },
                teardown : function() {
                    this.userModel = null;
                    window.errors = null;
                }
            });

            test('Test init properties in user model', function() {
                notEqual(this.userModel.get("userName"), 'test',
                        'Default user name is empty');
                equal(this.userModel.urlRoot, '/login',
                        'urlRoot set to /login to save model to server');
                notEqual(this.userModel.urlRoot, '',
                        'urlRoot set to /login to save model to server');
            });

            test('Test setting the properties of user Model', function() {
                this.userModel.set("userName", "$$$$");
                equal(this.userModel.get("userName"), '$$$$','username is set');
                notEqual(this.userModel.get("userName"), '####','username is set');
            });

           

            /**
             * Testing the validate method using Sinon JS spies
             */
            test(
                    'Tesing the validate method is called after setting the username',
                    function() {
                        // adding spy on the set method
                        this.spy(this.userModel, "validate");
                        this.userModel.set("userName", "");
                        ok(this.userModel.validate.calledOnce);
                        this.userModel.set("userName", "dd");
                        ok(this.userModel.validate.calledTwice);
                    });
            
            test("Testing the validate error method called",function(){
            		console.log(sinon);
            		var spy = sinon.spy();
            		this.userModel.listenTo(this.userModel,'error',spy);
            		this.userModel.set("userName","");
            		ok(spy.calledOnce);
            		this.userModel.set("userName","dd");
            		ok(spy.calledTwice);
            });

        });