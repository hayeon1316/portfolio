$(document).ready(function () {
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
/* 서브01 - Isotope 계절별로 보기, 서브_02 Tab selected */
  $('.button-group button').click(function(){
    $('.button-group button').removeClass('selected');
    $(this).addClass('selected');
  });
/* 서브01 - Isotope */
  var elem = document.querySelector('.grid');
  var iso = new Isotope( elem, {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  // init Isotope
  var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
});
