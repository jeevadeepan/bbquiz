module('Module Name', {
    setup : function() {
        /*
         * setup logic should be written is done here,called before each test
         * case (test() method) this — – refers to the module. this.variableName —
         * to add a variable,which can be accessed inside the test case Add Html
         * elements,if needed for testing
         */
    },
    teardown : function() {
        /*
         * clean up is done here, called after each test case execution (test()
         * method) this.variableName = null — to remove the variables,added
         * during the setup method Remove Html elements added while setup
         */
    }
});

test('Name of test case ', function() {
    // Assertions
    equal(A, E, M);
    notEqual(A, E, M);
});