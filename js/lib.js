$(document).ready(function(){
    /*$('#recipeCarousel').carousel();
    
    $('.estrategias .carousel-item').each(function(){
            var minPerSlide = 4;
            var next = $(this).next();
            if (!next.length) {
            next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            
            for (var i=0;i<minPerSlide;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                
                next.children(':first-child').clone().appendTo($(this));
            }
    });
*/
    
    changeCssMenu ($(document).scrollTop());
    
    $(".nav-link").css("color", "#FFFFFF"); 
    $(".navbar-brand").css("color", "#FFFFFF");
    $(window).scroll(function() {
        changeCssMenu ($(document).scrollTop());
    });
});

var changeCssMenu = function(scroll) {
    if(parseInt(scroll) > 50.0) { 
        
        $("#menu1").css("background-color", "#ffffff"); 
        $(".nav-link").css("color", "#000000");
        $(".cuenta").css("color", "#ffffff");
        $(".navbar-brand").css("color", "#000000");
        $("#logo").attr("src","images/logo-nav-sticky.png");


    } else {
        
        $("#menu1").css("background-color", "transparent"); 
        $(".nav-link").css("color", "#FFFFFF"); 
        $(".navbar-brand").css("color", "#FFFFFF");
        $("#logo").attr("src","images/logo-nav.png");

    }
};