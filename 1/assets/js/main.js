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
window.onload = function(){
  /*各画面オブジェクト*/
  const contact_submit= document.getElementById('contact-submit');
  const username = document.getElementById('username');
  const phonenumber = document.getElementById('phonenumber');
  const email = document.getElementById('mail');
  const inquiry = document.getElementById('inquiry');

  contact_submit.addEventListener('click', function(e) {
      let message_ne = [];
      let message = [];
      if(username.value == ""){
        message_ne.push("お名前");
      }
      if (phonenumber.value=="") {
        message_ne.push("電話番号");
      }
      else if (!(/^[0-9]{10,11}$/).test(phonenumber.value)) {
        message.push("電話番号を半角数字(10～11桁)で入力してください。\n");
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
      if (inquiry.value=="") {
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
