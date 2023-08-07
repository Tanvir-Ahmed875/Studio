
$(document).ready(function(){
     $('.menu-icon').click(function(){
        $('.menu').slideToggle( 1000);
     });


    // owl carousel

     $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
     });
    // // popup
   
    $('#popupVideo').magnificPopup({
        type:'iframe'
    });
    // wow js
     new WOW().init();
 



});

