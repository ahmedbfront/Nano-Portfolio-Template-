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

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $(".header").innerHeight()) {
      $(".site-top ").css("opacity", 1);
    } else {
      $(".site-top ").css("opacity", 0);
    }
  });

  $(".site-top ").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: ($(this).offset = 0),
      },
      1000
    );
  });

  // Add And Remove a Class Active to The Navbar
  $(".nav-item").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(window).width() < 992) {
      $("html, body").animate(
        {
          scrollTop: $("." + $(this).data("section")).offset().top,
        },
        1000
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("." + $(this).data("section")).offset().top - 52,
        },
        1000
      );
    }
  });

  // Add a Class fx-top to The Navbar
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $(".navbar").addClass("fx-top");
    } else {
      $(".navbar").removeClass("fx-top");
    }
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

window.onscroll = function () {
  var mySkills = document.querySelector(".my-skills"),
    skillOffsetTop = mySkills.offsetTop,
    skillHeight = mySkills.offsetHeight,
    windowHeight = this.innerHeight,
    windowScrollTop = this.pageYOffset,
    allSkills = document.querySelectorAll(".item-progress");

  if (window.innerWidth <= 576) {
    if (windowScrollTop > skillOffsetTop + skillHeight - windowHeight - 500) {
      allSkills.forEach(function (skill) {
        skill.style.width = skill.dataset.progress;
      });
    }
  } else {
    if (windowScrollTop > skillOffsetTop + skillHeight - windowHeight) {
      allSkills.forEach(function (skill) {
        skill.style.width = skill.dataset.progress;
      });
    }
  }
};

/*================
  Add Class Active on Scrolling
================*/
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (sec) {
  sec.onclick = function (e) {
    e.preventDefault();
  };
});

sections.forEach(function (section) {
  section.addEventListener("mouseenter", function () {
    var id = this.getAttribute("id");
    var activeSection = document.querySelector("a[href= '#" + id + "']");
    navLinks.forEach(function (nav) {
      nav.parentNode.classList.remove("active");
      nav.onclick = function (e) {
        e.preventDefault();
      };
    });
    activeSection.parentNode.classList.add("active");
  });
});
