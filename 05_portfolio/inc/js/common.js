$(document).ready(function() {
  /* 전체화면 height 값 innerHeight로 */
  window.onresize = function (){
    var h = window.innerHeight;
    document.getElementById("wrap").style.height = h+'px';
    }
  window.onresize();
});
