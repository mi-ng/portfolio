$(document).ready(function(){

  $(".tab-btn li").eq(0).addClass("active");
  $(".tab-con li").hide();
  $(".tab-con li").eq(0).show();

  $(".tab-btn li").click(function (){
  $(this).addClass("active").siblings().removeClass("active");
  var indexNum = $(this).index();
  $(".tab-con li").eq(indexNum).show().siblings().hide();
  });

  $('.about-tmi01 > div').click(function(){
    $(this).hide();
  });

  $('.about-tmi01 .tmi01.box03').click(function(){
    $('.tmi01').show();
  });

  $('.about-tmi02 > div').click(function(){
    $(this).hide();
  });

  $('.about-tmi02 .tmi02.box03').click(function(){
    $('.tmi02').show();
  });


  $(".popup-bar img").click(function(){
    $('.tab-popup').hide();
  });

  $(".pop-button").click(function(){
    $('.tab-popup').hide();
  });

  $(".how-cont li").hide();
  $(".how-button").click(function(){
    $(".how-cont li").stop().slideToggle();
  });

  $(".dont-close").hide();
  $(".frame-button").click(function(){
    $(".dont-close").show();
    $('body').css({overflow:'hidden'});
  });

  $(".dc-button > div").click(function(){
    $(".dont-close").hide();
    $('body').css({overflow:'visible'});
  });

  $(".dc-bar").click(function(){
    $(".dont-close").hide();
    $('body').css({overflow:'visible'});
  });

  $(".project-box").hide();
  $(".logo").mouseenter(function(){
    $(".project-box").show();
  });
  $(".logo").mouseleave(function(){
    $(".project-box").hide();
  });

  
  //folder-select-tab
  $(".folder-select li").eq(1).hide();
  $(".folder-select-tab li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    var indexNum = $(this).index();
    $(".folder-select li").eq(indexNum).show().siblings().hide();
  });


  //news ad swiper
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1",
    loop:true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
});