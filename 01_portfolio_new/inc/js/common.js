// #cont_01, #footer height값이 innerHeight로 적용되게
window.onload = window.onresize = function () {
  var wrap = document.getElementById('cont_01');
  var footer = document.getElementsByTagName('footer')[0];
  wrap.style.height = window.innerHeight + "px";
  footer.style.height = window.innerHeight + "px";
}

function tabEvent(evt, tabNum){
  var tab_cnts = document.getElementsByClassName('cont_03_col');
  for (var i = 0; i < tab_cnts.length; i++){
    tab_cnts[i].style.display = "none";
    // tab_cnts 숨기기
  }
  var tabs = document.getElementsByClassName('tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
    //active 클래스 갖고있는 것 없애기
  }
  document.getElementById(tabNum).style.display = "block";
  //클릭한 tab의 tabNum에 해당하는 id는 보이게
  evt.currentTarget.className += " active";
  //currentTarget에 active 클래스네임 더하기
}

// 스크롤 내리면 Header 고정되게
var header = document.getElementById('wrap').children[0];
window.onscroll = function () {
  var scrollValue = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollValue > 20){
    header.classList.add('header_fix');
  } else {
    header.classList.remove('header_fix');
  }
};

//자기소개서 더보기 버튼 누르면 내용 다 보여지고 더보기 버튼 사라짐
function seemoreEvt(btnNum, hideNum, boxNum){
  document.getElementById(btnNum).children[0].style.display = "none";
  document.getElementById(hideNum).style.display = "block";
  document.getElementById(btnNum).parentElement.style.paddingBottom = "100px";
  document.getElementById(boxNum).classList.add('aboutme_show');
}//자기소개서 내용 줄이기 버튼 누르면 내용 줄여지고 더보기 버튼 나타남
function hideEvt(btnNum, hideNum, boxNum){
  document.getElementById(btnNum).children[0].style.display = "block";
  document.getElementById(hideNum).style.display = "none";
  document.getElementById(btnNum).parentElement.style.paddingBottom = "15px";
  document.getElementById(boxNum).classList.remove('aboutme_show');
}
