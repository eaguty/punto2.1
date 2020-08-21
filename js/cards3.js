$(document).ready(function(){

    /*$('#myCarousel').carousel({
      interval: 50000000
    });*/
  
    // Control buttons
    $('#btn_next').click(function () {
        $('#myCarousel').carousel('next');
        return false;
    });
    $('#btn_prev').click(function () {
        $('#myCarousel').carousel('prev');
        return false;
    });
  
    // On carousel scroll
    $("#myCarousel").on("slide.bs.carousel", function (e) {
      var windowsize = $(window).width();
     
      altov=$(window).height();
      anchov=$(window).width();
      //alert("Ventana: alto = "+altov+"ancho = "+anchov);
      altod=$(document).height();
      anchod=$(document).width();
      //alert("Documento: alto = "+altod+", ancho = "+anchod);
      altop=screen.height;
      anchop=screen.width;
      //alert("Pantalla: ancho = "+anchop);
      
          var $e = $(e.relatedTarget);
          var idx = $e.index();
          var itemsPerSlide = 4;
          var totalItems = $(".estrategias .carousel-item").length;
          if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide -
                (totalItems - idx);
            for (var i = 0; i < it; i++) {
              // append slides to end 
              if (e.direction == "left") {
                $(".estrategias .carousel-item").eq(i).appendTo(".estrategias");
              } else {
                $(".estrategias .carousel-item").eq(0).appendTo(".estrategias");
              }
            }
        }
        
        
    });
  });