$(document).ready(function(){
  /* input, textarea 키 다운 시 클래스 추가 */
  $('input, textarea').one('keydown', function(){
    $(this).addClass("on");
  });
  /* Skrollr js */
  var s = skrollr.init();
});
