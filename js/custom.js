
/*SHOW AND HIDE MENU*/
$(function(){
    'use strict';
    $(window).scroll(function(){
        'use strict';
        if ($(window).scrollTop() < 80 ) {
            $('.navbar').css({
                'margin-top': '-100px',/*that is why there's transition prop in css file on the navbar. in 1s it changes the margin-top from 0 to -100 giving the navbar that sliding effect*/
                'opacity': '0'
            });
//            $('.navbar-default').css({
//                'background-color': 'rgba(59, 59, 59, 0)'
//            });
        } else  {
            $('.navbar').css({
                'margin-top': '0',
                'opacity': '1'
            });
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0.7)',
                'border-color': '#444'
            });
            $('.navbar-brand').css({
                'height': '35px',
                'padding-top': '0',
            });
            $('.navbar-nav > li > a').css({
                'padding': '15px'
            });
        }
    });
});

$(function(){
    'use strict';
    // Select all links with hashes
$('.nav-item, #scroll-to-top')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

/*ACTIVE MENU ITEM ON CLICK*/

$(function(){
    'use strict';
    $('.navbar-nav > li > a').click(function(){
        'use strict'; 
        $('.navbar-nav > li > a').parent().removeClass('active');
        $(this).parent().addClass('active');
    });
});

/*HIGHLIGHT MENU ITEM ON SCROLL*/

$(document).ready(function() {
    'use strict';
    $(window).scroll( function() {
        'use strict';
        $("section").each(function()  {
            'use strict';
            var bb = $(this).attr("id");  // ABOUT, CONTACT, DOWNLOAD
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
                
            }
            
            
        });
    
    
    });
    
    
});

/*ADD AUTO PADDING TO HEADER*/
$(function(){
    'use strict';  
    setInterval( function() {
        'use strict';
        var windowHeight = $(window).height(); //returns the height of browser window
        var containerHeight = $('.header-container').height();
        var padTop = windowHeight - containerHeight;
        $('.header-container').css({
            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'
        });
    }, 10)
});

/*CALL THE OWL CAROUSEL PLUGIN*/
$(function(){
  $(".owl-carousel").owlCarousel({
       items: 3,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsive : {
        // breakpoint from 0 up
        0 : {
            items: 1
            },
        // breakpoint from 480 up
        480 : {
            items: 2
            },
        // breakpoint from 768 up
        768 : {
            items: 3
            }
        }
  });
});

/*ADD COUNTER*/
$(function(){
    $('.counter-number').counterUp({
    delay: 10,
    time: 2000
    });
});

/*REVEAL ANIMATION ON SCROLL*/
$(function(){
    new WOW().init();
});




