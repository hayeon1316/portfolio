$(document).ready(function () {
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
