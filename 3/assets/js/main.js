/* globals $*/

//hamburger
$('#hamburger-menu').hide();
$('#hamburger-button-hide').hide();
$('#hamburger-button').click(function () {
  $(this).toggleClass('selected');
  var content = $(this).parents().find('#hamburger-menu');
  content.slideToggle();
  $('.hamburger-bars, .hamburger-button-icon .tg-color').toggle();
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