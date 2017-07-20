import HP from './modules/helpers';

(function ($) {

// When DOM is ready
$(function () {
HP.random(10, 20);
});

$(function() {
        $(".nav-opener").click(function() {
            $("body").toggleClass("nav-open");
        });
    });

$(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: false,
            nav: true
        });
    });

$(document).ready(function() {
        $('.grayscale').gray();
    });


$(document).ready(function(){
    $(".thumb").hover(function(){
        $("img", this).toggleClass("grayscale");
    });
});




$().fancybox({
  selector : '[data-fancybox="images"]',
  loop     : true
});




}(jQuery));