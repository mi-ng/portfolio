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
    $('.tmi02').show();
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
});