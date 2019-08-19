$(document).ready(function () {
  /* 서브_02 Accordion Tab */
  $('.button-group button').click(function(){
    $('.button-group button').removeClass('selected');
    $(this).addClass('selected');
  });
/* 서브_02 Accordion */
  $('.accordion a').click(function (j) {
    var dropDown = $(this).closest('li').find('p');

    $(this).closest('.accordion').find('p').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.accordion').find('a.active').removeClass('active');
      $(this).addClass('active');
    }
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
/* 서브_02 Tab */
  $('.qna_01').click(function(){
    $('.accordion').removeClass('show');
    $('.accordion_01').addClass('show');
  });
  $('.qna_02').click(function(){
    $('.accordion').removeClass('show');
    $('.accordion_02').addClass('show');
  });
  $('.qna_03').click(function(){
    $('.accordion').removeClass('show');
    $('.accordion_03').addClass('show');
  });
  $('.qna_04').click(function(){
    $('.accordion').removeClass('show');
    $('.accordion_04').addClass('show');
  });
});
