$( document ).ready(function() {
    
    console.log("carregou tudinho");
    $(".spinner").fadeOut();

    setTimeout(function () {
        $(".everythingloaded").fadeIn();
        $("#map").fadeIn();
        $(".slider-temporal").fadeIn();
    }, 500);


    setTimeout(function () {
        $(".spinner1").fadeOut();
        $(".loading_hoverlay").fadeOut();
        gototop();
    }, 1300);


});


function gototop() {
    $(window).scrollTop(0);
}