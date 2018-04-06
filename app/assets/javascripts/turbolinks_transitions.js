$( document ).ready(function() {


    $('a').click(function (e) {
        e.preventDefault();                   // prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href

        // do something while timeOut ticks ...
        console.log( "bounce!" );
        $("#change").addClass("animated bounce");
        setTimeout(function(){
            window.location = goTo;
        },3000);
    });


});


