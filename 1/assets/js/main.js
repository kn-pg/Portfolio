/* globals $*/

//hamburger
$('#hamburger-menu').hide();
$('.fa-times').hide();
$('#hamburger-button').click(function () {
  $(this).toggleClass('selected');
  var content = $(this).parents().find('#hamburger-menu');
  content.slideToggle();
  $('.hamburger-bars, .fa-times').toggle();
});
