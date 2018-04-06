$( document ).ready(function() {

    $.MyFunction = function()
    {
        console.log("yeeeha");
    };


    $.Transition = function()
    {
        console.log("argument");
        $("#change").addClass("animated bounce");
    };

    $.TransitionOut = function(mode)
    {
        console.log("Out");

        mode = mode || "Basic";

        console.log("In");

        if (mode == "Basic") {
            $.BasicOut();
        }
    };


    $.TransitionIn = function(mode)
    {
        mode = mode || "Basic";

        console.log("In");

        if (mode == "Basic") {
            $.BasicIn();
        }

    };

    $.BasicIn = function(){
      console.log("basic");
        $(".maincontent").addClass("animated fadeInDown");
    };

    $.BasicOut = function(){
        console.log("basic");
        $(".maincontent").addClass("animated fadeOutUp");
    };

    $('a').click(function (e) {
        e.preventDefault();// prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href

        // do something while timeOut ticks ...

        $.TransitionOut();

        setTimeout(function(){
            window.location = goTo;
        },1000);
    });





    (function ( $ ) {

        $.fn.greenify = function( options ) {

            // This is the easiest way to have default options.
            var settings = $.extend({
                // These are the defaults.
                color: "#556b2f",
                backgroundColor: "white"
            }, options );

            // Greenify the collection based on the settings variable.
            return this.css({
                color: settings.color,
                backgroundColor: settings.backgroundColor
            });

        };

    }( jQuery ));

});


