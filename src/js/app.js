import HP from './modules/helpers';

(function ($) {

// When DOM is ready
$(function () {


    HP.random(10, 20);

    $(".nav-opener").click(function() {
                $("body").toggleClass("nav-open");
            });


    $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: false,
                dots: false,
                nav: true
            });

    $('.grayscale').gray();


    $(".thumb").hover(function(){
            $("img", this).toggleClass("grayscale");
        });

    $().fancybox({
      selector : '[data-fancybox="images"]',
      loop     : true
    });

});
















}(jQuery));