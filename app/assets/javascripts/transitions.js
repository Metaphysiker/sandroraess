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
        console.log("mode: " + mode);

        if (mode == "Basic") {
            $.BasicOut();
        } else if (mode == "Welcome"){
            $.WelcomeOut();
        } else if (mode == "Wisdom"){
            $.WisdomOut();
        }
    };


    $.TransitionIn = function(mode)
    {
        mode = mode || "Basic";

        console.log("In");
        console.log("mode: " + mode);

        if (mode == "Basic") {
            $.BasicIn();
        } else if (mode == "Welcome"){
            $.WelcomeIn();
        } else if (mode == "Wisdom"){
            $.WisdomIn();
        }

    };

    //basic
    $.BasicIn = function(){
      console.log("basic");
        $(".basic").addClass("animated fadeInDown");
    };

    $.BasicOut = function(){
        console.log("basic");
        $(".basic").addClass("animated fadeOutUp");
    };

    //welcome
    $.WelcomeIn = function(){
        console.log("welcome in");
        $(".jumbotron").addClass('darkgoldenrod');
        $("h1").addClass("animated fadeInDown");

        $( "li" ).each(function( index ) {
            console.log(index);
            $(this).delay(200*index).queue(function() {
                $(this).addClass('animated fadeInRight').dequeue();
            });
        });

    };

    $.WelcomeOut = function(){
        $("body").css("overflow", "hidden");
        console.log("welcome out");
        $("h1").addClass("animated fadeOutUp");

        $($( "li" ).get().reverse()).each(function( index ) {
            console.log(index);
            $(this).delay(200*index).queue(function() {
                $(this).addClass('animated fadeOutRight').dequeue();
            });
        });

    };

    $.WisdomIn = function(){
        console.log("wisdom in");
        //$(".jumbotron").css({ backgroundColor: '#CD5C5C' });
        $(".jumbotron").addClass('indianred')
    };

    $.WisdomOut = function(){

    };


    $('a').click(function (e) {
        e.preventDefault();// prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href

        // do something while timeOut ticks ...

        $.TransitionOut($("#transition").text());

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


