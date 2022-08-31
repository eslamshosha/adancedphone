$(window).load(function () {
  $(".preloader").fadeOut();
  // $("body").removeClass("overflow");
});

$(document).ready(function () {
  new WOW().init();
  $(".fixed-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").fadeToggle(300);
    $(".search-section").toggleClass("search-open");
    // $(".fixed-search .open-search").toggleClass("close-search");
    $("body").toggleClass("overflow");
  });

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".navgition").toggleClass("reset-left");
      $("body").addClass("overflow");
      $(".overlay-box2").fadeToggle(300);
    });
    $(".nav-head .close-btn, .overlay-box2").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".overlay-box2").fadeOut(300);
      $("body").removeClass("overflow");
    });
    //dropdown inside menu
    $(".lang-word").click(function (e) {
      e.preventDefault();
      var item = $(this).siblings(".dropdown-content");
      item.slideToggle(400);
    });
    //slide down menu
    $(".btn-div").click(function (e) {
      e.preventDefault();
      $(this).siblings(".cats-dispaly").slideToggle(400);
      $(".btn-div").not(this).siblings(".cats-dispaly").slideUp(400);
      if ($(window).width() <= 1199) {
        $(this).toggleClass("active");
        $(".btn-div").not(this).removeClass("active");
      }
    });
  }
  $(" .add-chevron").addClass("chevron-down");
  //fixed nav
  $stickyNav = $("header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav");
    } else {
      $stickyNav.removeClass("fixed-nav");
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav");
    }
  });
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyNav.addClass("fixed-header");
    } else {
      $stickyNav.removeClass("fixed-header");
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-header");
    }
  });
  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
  ////////////////add swiper carsoul to class category////////////////////////////////
  var category = new Swiper(".category-section .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".category-section .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".category-section .swiper-btn-next",
      prevEl: ".category-section .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
  ///////// **marks-section** /////////
  var screen = new Swiper(".marks-section .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".marks-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".marks-slider .swiper-btn-next",
      prevEl: ".marks-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 9,
        spaceBetween: 15,
      },
    },
  });
  ///////// ** product slider** /////////
  var slides = document.getElementsByClassName("product-slider");
  for (var i = 0; i <= slides.length; i++) {
    var productswiper = new Swiper(
      ".product-slider-" + i + " .swiper-container",
      {
        loop: true,
        autoplay: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".product-slider-" + i + " .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".product-slider-" + i + " .swiper-btn-next",
          prevEl: ".product-slider-" + i + " .swiper-btn-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      }
    );
  }
  ///////// ** reviews-section** /////////
  var specials = new Swiper(".reviews-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".reviews-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".reviews-slider .swiper-btn-next",
      prevEl: ".reviews-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
  ////////////////add swiper carsoul to class feature////////////////////////////////

  $(".feature-section .features").addClass("swiper-container");
  $(".feature-section .features-div").addClass("swiper-wrapper");
  $(".feature-section .features-box").addClass("swiper-slide");
  var feature = new Swiper(".feature-section .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".feature-section .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  $("#myTabs a").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
