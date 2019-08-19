$(document).ready(function () {
/* Slick - 메인페이지 상단 */
  $('.main_slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000
  });
/* Slick 일시정지, 재생 버튼 */
  $('.pause').on('click', function() {
    $('.main_slider')
        .slick('slickPause')
  });
  $('.play').on('click', function() {
      $('.main_slider')
          .slick('slickPlay')
  });
/* Slick - 메인페이지 이벤트&행사 */
  $('.event_slick').slick({
    dots: true
  });
/* Slick - 메인페이지 자주묻는 질문 */
  $('.slider_qna').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  });
});
