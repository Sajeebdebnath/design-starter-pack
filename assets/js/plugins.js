/* ==============
 ========= JS Documentation ==========================

 * Theme Name: Rotary
 * Version: 1.0
 * Description: Rotary Club
 * Author: Sajeeb Debnath
 * Author url: https://sypsolutions.com.bd/

    ==================================================

     01. wow init
     -------------------------------------------------
     02. training slider
     -------------------------------------------------
     03. odometer counter



    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // wow init
    new WOW().init();

    // training slider
    $(".training__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 900,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-training"),
        nextArrow: $(".next-training"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // odometer counter
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    
  });
})(jQuery);
