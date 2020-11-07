/*================
  * Template Name    : Nano | Portfolio Template 
  * Author           : Ahmed Badr / www.linkedin.com/in/ahmedbfront
  * Author Url       : http://themeforest.net/user/celtano
  * Version          : 1.0.0
  * Created          : July 2020
  * File Description : Main Js File of The Template
 ================*/

$(function () {
  "use strict";

  $('a[href="#"]').on("click", function (e) {
    e.preventDefault();
  });

  /*================
    Toggle Class Dark in Body 
  ================*/
  $(".dark-mode").on("click", function () {
    $("body").toggleClass("dark");
    $(".dark-mode i").toggleClass("active");
  });

  /*================
    Button in Header 
    And Add a Class Active to The Navbar 
  ================*/
  $(".header .sec-about").on("click", function () {
    $(".navbar .sec-about").addClass("active").siblings().removeClass("active");
  });
  $(".header .sec-port").on("click", function () {
    $(".navbar .sec-port").addClass("active").siblings().removeClass("active");
  });

  /*================
    Add And Remove a Class Active to The Navbar 
    Show - Hide the Requested Section 
  ================*/
  $(".nav-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
    $(".main-wrapper > section.active").removeClass("active");
    var attrSec = $(this).attr("href");
    $(".main-wrapper").children(attrSec).addClass("active");
    $(".navbar-nav .nav-item").children(attrSec).parent().addClass("active");
  });

  /*================
    Toggle Show The Navbar 
  ================*/
  $(".navbar-toggler").on("click", function () {
    $(".navbar-icon").toggleClass("open-icon");
    $(".navbar").toggleClass("show-nav");
  });

  /*================
    Toggle Show The Navbar 
  ================*/
  $(".navbar-collapse").on("click", function () {
    if ($(window).width() < 992) {
      $(".navbar-collapse").collapse("toggle");
      $(".navbar-icon").removeClass("open-icon");
      $(".navbar").removeClass("show-nav");
    }
  });

  /*================
    Add And Remove a Class Active 
    to Navbar in Portfolio Section 
  ================*/
  $(".port-nav .port-link").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  /************************************
    ==== Custom Plugins ==== 
  ************************************/
  /*================
    Text Rotator Animation 
  ================*/
  if ($(".main-text").length) {
    $(".main-text").animatedHeadline({
      animationType: "clip",
    });
  }

  $(window).on("load", function () {
    /*================
    Preloading Screen 
    ================*/
    $(".preloader").remove();

    /*================
      Mixitup In Portfolio 
    ================*/
    mixitup(".port-arrea");

    /*================
      Popup In Portfolio 
    ================*/
    $(".test-popup-link").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      cursor: "mfp-zoom-out-cur",
      gallery: {
        enabled: true,
      },
      image: {
        titleSrc: "title",
      },
    });

    /*================
      Slider In Clint 
    ================*/
    new Swiper(".swiper-container", {
      loop: true,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
    });
  });
  // End Window Load
});

/*================
  Change the color in the dark mode
================*/
var getPropertyColor = document.documentElement.style.getPropertyValue(
    "--main--color"
  ),
  darkMode = document.querySelector(".dark-mode"),
  bodyDark = document.querySelector("#body-dark");

darkMode.onclick = function () {
  if (bodyDark.classList.contains("dark")) {
    document.documentElement.style.setProperty(
      "--main--color",
      getPropertyColor
    );
  } else {
    document.documentElement.style.setProperty("--main--color", "#cbcbcbd1");
  }
};
