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
window.onload = function(){
  /*各画面オブジェクト*/
  const contact_submit= document.getElementById('contact-submit');
  const username = document.getElementById('username');
  const email = document.getElementById('mail');
  const subject = document.getElementById('subject');
  const messages = document.getElementById('messages');

  contact_submit.addEventListener('click', function(e) {
      let message_ne = [];
      let message = [];
      if(username.value == ""){
        message_ne.push("お名前");
      }
      if (email.value=="") {
        message_ne.push("メールアドレス");
      }
      else if (!(/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/).test(email.value)) {
        message.push("メールアドレスを○○○@example.comのような形で入力してください。\n");
      }
      if (subject.value=="") {
        message_ne.push("件名");
      }
      if (messages.value=="") {
        message_ne.push("内容");
      }
      if(message_ne.length > 0){
        message_ne = message_ne+"が未入力です。入力してください。\n";
      }
      if(message_ne.length > 0 || message.length > 0){
        alert(message_ne + message.join(''));
        return;
      }
      else{
        //alert('入力チェックOK');
      }
      
  });
};