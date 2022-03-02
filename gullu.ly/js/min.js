// Sticky header
function stickyHeader () {
    if ($('.header-area').length) {
      var sticky = $('.header-area'),
          scroll = $(window).scrollTop();
  
      if (scroll >= 190) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
      
    };
  }

   
  // Window scroll function
jQuery(window).on('scroll', function () {
    (function ($) {
      stickyHeader ();
    })(jQuery);
  });


  // banner slider
var banner = $(".hero-slider");
if (banner.length) {
  banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
    height: '600px',
    pagination: true,
    navigation: false,
    thumbnails: false,
    playPause:false,
    pauseOnClick: false,
     autoPlay:true,
    hover: false,
   overlayer: false,
    loader: 'none',
    minHeight: '400px',
    time: 6000,
  });
};

var win =  $(window);
win.on('load', function () {
    $('#loader-wrapper').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})


  
$(document).ready(function(){
    // portfolio slider
    $(".portfulio-slider").owlCarousel({
        items:4,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        autoplayTimeout:5000,
        margin:0,
        responsive:{
          0:{
            items:1
        },
        551:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
        }

    });

    // testmonaial slider
    $(".testmonial-slider").owlCarousel({
        items:1,
        nav:false,
        dots:false,
        autoplay:true,
        loop:true,
        autoplayTimeout:5000,
        margin:0,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false
    
            }
        }

    });

// counter plugin
var timer = $('.timer');
if(timer.length) {
    timer.appear(function () {
      timer.countTo();
  })
}

// WOW active
new WOW().init();
   
// offcanvas manu
    $(".header-bar").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").addClass(".active");  
      });
      
      
      $(".manu-close, .offcanvas-overylay").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").removeClass(".active");  
      });



// Show or hide the sticky footer button
win.on('scroll', function(event) {
  if($(this).scrollTop() > 600){
    $('#scroll').fadeIn(200)
  } else{
    $('#scroll').fadeOut(200)
  }
});



    
  });