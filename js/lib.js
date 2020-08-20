$(document).ready(function(){
    var collapse = false;
    $('#menu1').on('show.bs.collapse', function () {
        $("#menu1").css("background-color", "#ffffff"); 
        $(".nav-link").css("color", "#6A6A6A");
        $(".cuenta").css("color", "#ffffff");
        $(".navbar-brand").css("color", "#6A6A6A");
        $("#logo").attr("src","images/logo-nav-sticky.svg");
        $(".navbar-toggler-icon").addClass('hidden');
        $("#navbar-close").removeClass('hidden');
        collapse=true;
        

    })
    $('#menu1').on('hidden.bs.collapse', function () {
        changeCssMenu ($(document).scrollTop());
        $(".navbar-toggler-icon").removeClass('hidden');
        $("#navbar-close").addClass('hidden');
        collapse=false;
    })
      
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
         changeCssMenu ($(document).scrollTop(), collapse);
    });
    $( window ).resize(function() {
        changeCssMenu ($(document).scrollTop(), collapse);
    });
});

var openNav = function(){
    $("#menu1").css("display", "none");
    $("#myNav").css("display", "flex");
    $("#myNav").css("height", "100%");
    $("#btn_productos").css("display", "none");

    

};
var closeNav = function(){
    $("#menu1").css("display", "flex");
    $("#myNav").css("height", "0%");
    $("myNav").css("display", "none")
    $(".overlay").css("display", "none")
    $("#btn_productos").css("display", "block");
};
var changeCssMenu = function(scroll, collapse) {
    if(parseInt(scroll) > 50.0) { 
        
        $("#menu1").css("background-color", "#ffffff"); 
        $(".nav-link").css("color", "#6A6A6A");
        $(".cuenta .nav-link").css("color", "#ffffff");
        $(".navbar-brand").css("color", "#6A6A6A");
        $("#logo").attr("src","images/logo-nav-sticky.svg");


    } else {
        var windowsize = $(window).width();
        if (windowsize > 991) {
            $("#menu1").css("background-color", "transparent");
            $(".nav-link").css("color", "#FFFFFF"); 
            $(".navbar-brand").css("color", "#FFFFFF");
            $("#logo").attr("src","images/logo-nav.svg");
        }
        else{
            if(collapse){
                $(".navbar-brand").css("color", "#FFFFFF");
                $("#logo").attr("src","images/logo-nav-sticky.svg");
            }
            else{
                $("#logo").attr("src","images/logo-nav.svg");
                $("#menu1").css("background-color", "transparent");
            }

            $(".nav-link").css("color", "#6A6A6A"); 
            $(".navbar-brand").css("color", "#6A6A6A");
        }
        

    }
};


