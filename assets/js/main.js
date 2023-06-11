/* ==============
 ========= JS Documentation ==========================

 * Theme Name: Rotary
 * Version: 1.0
 * Description: Rotary Club
 * Author: Sajeeb Debnath
 * Author url: https://sypsolutions.com.bd/

    ==================================================

     01. preloader
     -------------------------------------------------
     02. data background
     -------------------------------------------------
     03. navbar
     -------------------------------------------------
     04. window scroll
     -------------------------------------------------
     05. scroll to top with progress

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // preloader
    setTimeout(function () {
      $("#ctn-preloader").addClass("loaded");
      if ($("#ctn-preloader").hasClass("loaded")) {
        $("#preloader")
          .delay(1000)
          .queue(function () {
            $(this).remove();
          });
      }
    }, 1000);

    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // navbar
    $(".nav__bar").on("click", function () {
      $(this).toggleClass("nav__bar-toggle");
      $(".nav__menu").toggleClass("nav__menu-active");
      $(".backdrop").toggleClass("backdrop-active");
      $("body").toggleClass("body-active");
    });

    $(".backdrop, .nav__menu-close, .hide-nav").on("click", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").next(".nav__dropdown").slideUp(500);
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
    });

    $(window).on("resize", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
      $(".ticket-modal").slideUp();
      $(".conference-modal").slideUp();
    });

    $(".nav__menu-link--dropdown").on("click", function () {
      $(this).next(".nav__dropdown").toggleClass("nav__dropdown-active");
      $(this).toggleClass("nav__menu-link--dropdown-active");
    });

    $(".nav__menu-link-childr").on("click", function () {
      $(this).next(".nav__dropdown-child").toggleClass("nav__dropdown-active");
      $(this).toggleClass("nav__menu-link--dropdown-active");
    });

    // on window scroll
    $(window).on("scroll", function () {
      // position navbar on scroll
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".header").removeClass("header-active");
      } else {
        $(".header").addClass("header-active");
      }
    });

    


  
    // copyright year
    $("#copyYear").text(new Date().getFullYear());

    // scroll to top with progress
    // var progressPath = document.querySelector(".progress-wrap path");
    // var pathLength = progressPath.getTotalLength();
    // progressPath.style.transition = progressPath.style.WebkitTransition =
    //   "none";
    // progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    // progressPath.style.strokeDashoffset = pathLength;
    // progressPath.getBoundingClientRect();
    // progressPath.style.transition = progressPath.style.WebkitTransition =
    //   "stroke-dashoffset 10ms linear";
    // var updateProgress = function () {
    //   var scroll = $(window).scrollTop();
    //   var height = $(document).height() - $(window).height();
    //   var progress = pathLength - (scroll * pathLength) / height;
    //   progressPath.style.strokeDashoffset = progress;
    // };
    // updateProgress();
    // $(window).scroll(updateProgress);
    // var offset = 50;
    // var duration = 550;
    // jQuery(window).on("scroll", function () {
    //   if (jQuery(this).scrollTop() > offset) {
    //     jQuery(".progress-wrap").addClass("active-progress");
    //   } else {
    //     jQuery(".progress-wrap").removeClass("active-progress");
    //   }
    // });
    // jQuery(".progress-wrap").on("click", function (event) {
    //   event.preventDefault();
    //   jQuery("html, body").animate({ scrollTop: 0 }, duration);
    //   return false;
    // });
  });
})(jQuery);
