/* globals $*/

//hamburger
$('#hamburger-menu').hide();
$('.fa-times').hide();
$('#hamburger-button').click(function () {
  var content = $(this).parents().find('#hamburger-menu');
  content.slideToggle();
  $('.hamburger-bars, .fa-times').toggle();
});

$('#fv-slick').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  arrows: false,
});
//off-page link
$('.off-page').click(function () {
  let href = $(this).children('a').attr('href');
  location.href = href;
  //window.open(href);
});
//in-page link
$('.in-page').click(function () {
  var speed = 500; // スクロール速度(ミリ秒)
  let href = $(this).children('a').attr('href');
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('html').animate({ scrollTop: position }, speed, 'swing');
  return false;
});