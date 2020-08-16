$(document).ready(function(){
    changeCssMenu ($(document).scrollTop());
    var windowsize = $(window).width();
        if (windowsize > 991) {
            $(".nav-link").css("color", "#FFFFFF"); 
            $(".navbar-brand").css("color", "#FFFFFF");
        }
        else{
            $(".nav-link").css("color", "#6A6A6A"); 
            $(".navbar-brand").css("color", "#6A6A6A");
        }
    $(window).scroll(function() {
         changeCssMenu ($(document).scrollTop());
    });
    $( window ).resize(function() {
        changeCssMenu ($(document).scrollTop());
      });
});

var changeCssMenu = function(scroll) {
    if(parseInt(scroll) > 50.0) { 
        
        $("#menu1").css("background-color", "#ffffff"); 
        $(".nav-link").css("color", "#6A6A6A");
        $(".cuenta").css("color", "#ffffff");
        $(".navbar-brand").css("color", "#6A6A6A");
        $("#logo").attr("src","images/logo-nav-sticky.png");


    } else {
        var windowsize = $(window).width();
        if (windowsize > 991) {
            $("#menu1").css("background-color", "transparent");
            $(".nav-link").css("color", "#FFFFFF"); 
            $(".navbar-brand").css("color", "#FFFFFF");
        }
        else{
            $("#menu1").css("background-color", "transparent");
            $(".nav-link").css("color", "#6A6A6A"); 
            $(".navbar-brand").css("color", "#6A6A6A");
            
        }
        $("#logo").attr("src","images/logo-nav.png");

    }
};


