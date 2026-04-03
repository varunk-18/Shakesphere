// header-js
// header-sticky-js-start
      $(window).scroll(function(){
        if ($(this).scrollTop() > 90) {
            $('header').addClass('sticky-header');
        } else {
            $('header').removeClass('sticky-header');
        }
    });

// toggle-btn-js
$(".navbar-toggler").click(function(){
    $(this).toggleClass('navbar-closed');
    $("html").toggleClass("myClass");
  });
// $("header a.nav-link").click(function(){
//     $("header div#collapsibleNavbar").removeClass('show');
//     $("button.navbar-toggler").removeClass('navbar-closed');
//   });

// owl-js
$('#hero_content').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    navText: ['<i class="fa-sharp fa-solid fa-arrow-left"></i>','<i class="fa-sharp fa-solid fa-arrow-right"></i>'],
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
});
$('#partner_content').owlCarousel({
    items:5,
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
            margin:10
        },
        600:{
            items:3
        },
        1000:{
           items:4
        },
        1200:{
            items:5
        }
    }
});
$('#best_content').owlCarousel({
    items:3,
    loop:true,
    margin:20,
    nav:true,
    navText: ['<i class="fa-sharp fa-solid fa-arrow-left"></i>','<i class="fa-sharp fa-solid fa-arrow-right"></i>'],
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

  $(document).ready(function() {
  var bigimage = $(".single-product");
  var thumbs = $(".thumb-product");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    
    smartSpeed: 2000,
    slideSpeed: 2000,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});

// aos-js

AOS.init({
  disable: function() {
    var maxWidth = 1200;
    return window.innerWidth < maxWidth;
  }
});

// scroll-btn
$('.scrollTo').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 300
    }, 1000);
    return false;
});