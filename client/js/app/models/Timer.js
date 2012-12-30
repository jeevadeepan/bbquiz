define( [ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
    var Timer = Backbone.Model.extend( {
        // Set all the default properties here
        defaults : {
            time : 0,
            degree : 0,
            totalTime : 0
        },
        

        /**
         * formats the given time and returns the time that can be displayed
         * 
         * @returns
         */
        getFormattedTime : function(time) {
        	 var limit = 60, minutes = 0, seconds = 0, remainingTime = time;
             if (remainingTime > limit) {
                 minutes = Math.floor(remainingTime / limit).toFixed();
                 seconds = (remainingTime % limit).toFixed();
             } else {
                 seconds = (remainingTime * 1).toFixed();
             }

             if (seconds < 10) {
                 seconds = "0" + seconds;
             }

             if (minutes < 10) {
                 minutes = "0" + minutes;
             }
             return minutes + ':' + seconds;
        },

        /**
         * get degress to be rotated based on the time value, to be upated in
         * the UI
         */
        covertToDegree : function() {
            var degree = this.get("degree") + (360 / this.get("totalTime"));
            this.set("degree", degree);
        },

        /**
         * validate the timer. if the timer time is "0", then error has to be
         * throws, which will hide the questions view and shows the results
         * 
         * @param attrs
         * @returns
         */
        validate : function(attrs) {
            if (attrs.time === 0) {
                return "Time's up !!";
            }
        },

        /**
         * function to decrement the time
         * 
         * @returns
         */
        decrementTime : function() {
            var time = this.get("time") - 1;
            this.set("time", time);
            this.set("formattedTime", this.getFormattedTime(time));
            this.covertToDegree();
        }
    });
    return Timer;
});