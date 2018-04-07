$( document ).ready(function() {

    current_color_class = "darkgoldenrod";

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

        console.log("mode: " + mode);

        if (mode == "Basic") {
            $.BasicOut();
        } else if (mode == "Welcome"){
            $.WelcomeOut();
        } else if (mode == "Wisdom"){
            $.WisdomOut();
        }  else if (mode == "Music"){
            $.MusicOut();
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
        }  else if (mode == "Music"){
            $.MusicIn();
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
        //$(".jumbotron").addClass('darkgoldenrod');
        $(".picture").addClass("animated fadeInLeft");
        $("h1").addClass("animated fadeInDown");

        $( ".jumbotron" ).find("li").each(function( index ) {
            console.log(index);
            $(this).delay(150*index).queue(function() {
                $(this).addClass('animated fadeInRight').dequeue();
            });
        });

    };

    $.WelcomeOut = function(){
        $("body").css("overflow", "hidden");
        console.log("welcome out");
        $("h1").addClass("animated fadeOutUp");
        $(".picture").addClass("animated fadeOutLeft");

        $($( ".jumbotron" ).find("li").get().reverse()).each(function( index ) {
            console.log(index);
            $(this).delay(150*index).queue(function() {
                $(this).addClass('animated fadeOutRight').dequeue();
            });
        });
    };

    //wisdom
    $.WisdomIn = function(){

        console.log("wisdom in");
        //$(".jumbotron").css({ backgroundColor: '#CD5C5C' });
        //$(".jumbotron").addClass('indianred')
    };

    $.WisdomOut = function(){

    };

    //music
    $.MusicIn = function(){
        console.log("music in");

        $(".picture").addClass("animated fadeInDown");
        $("h1").addClass("animated fadeInDown");

        $( ".jumbotron" ).find("li").each(function( index ) {

            $(this).delay(150*index).queue(function() {
                $(this).addClass('animated fadeInUp').dequeue();
            });
        });
    };

    $.MusicOut = function(){
        console.log("music out");

        $("h1").addClass("animated fadeOutUp");
        $(".picture").addClass("animated fadeOutUp");

        $($( ".jumbotron" ).find("li").get().reverse()).each(function( index ) {
            console.log(index);
            $(this).delay(5*index).queue(function() {
                $(this).addClass('animated fadeOutDown').dequeue();
            });
        });
    };


    $('a').click(function (e) {
        e.preventDefault();// prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href
        var backgroundcolor = this.getAttribute("backgroundcolor");

        $(".jumbotron").attr('class','jumbotron ' + backgroundcolor);
        // do something while timeOut ticks ...

        $.TransitionOut($("#transition").text());

        setTimeout(function(){
            window.location = goTo;
        },500);
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


