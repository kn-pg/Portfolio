/* globals $*/

//hamburger
$('#hamburger-menu').hide();
$('#hamburger-button-hide').hide();
$('#hamburger-button').click(function () {
  $(this).toggleClass('selected');
  var content = $(this).parents().find('#hamburger-menu');
  content.slideToggle();
  $('.hamburger-bars, .hamburger-button-icon').toggle();
});
