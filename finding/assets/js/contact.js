/* globals $*/

$(window.onresize = (function () {
  let vw = document.body.clientWidth;
  if (vw > 767) {
    $(window.onscroll = (function () {
      let y = window.pageYOffset;
      if (y > 752) {
        $('header').addClass('sc-color');;
      } else {
        $('header').removeClass('sc-color');
      }
    }))
  } else {
    $(window.onscroll = (function () {
      let y = window.pageYOffset;
      if (y > 599) {
        $('header').addClass('sc-color');
      } else {
        $('header').removeClass('sc-color');
      }
    }))
  }
}));
//hamburger
$('#hamburger-menu').hide();
$('.fa-times').hide();
$('#hamburger-button').click(function () {
  var content = $(this).parents().find('#hamburger-menu');
  content.slideToggle();
  $('.hamburger-bars, .fa-times').toggle();
  $('header').toggleClass('tg-color');
  $('body').toggleClass('noscroll');
});

