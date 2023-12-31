(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function (radius) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI * (this.radius ** 2);
            return area;
             // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            let area = this.getArea()
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            if(doRounding) {
                area = Math.round(area)
            }

            // Otherwise, output the complete value
            console.log("Area of a circle with radius: " + this.radius + `, is:` + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();