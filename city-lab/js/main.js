/* globals $, google*/
$(window.onresize = (function () {
  let vw = document.body.clientWidth;
  document.documentElement.style.setProperty('--vw', vw + 'px');
}));

$('#hamburger-button').click(function () {
  if ($('#hamburger-menu, #hamburger-navi-menu').is(':visible')) {
    $('#hamburger-menu, #hamburger-navi-menu').slideUp();
  } else {
    $('#hamburger-menu, #hamburger-navi-menu').slideDown();
  }
});
$('.imgs_b').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  offset: '60%',
});