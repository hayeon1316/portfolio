// 왼쪽 메뉴 사라지게 or 나타나게
var leftBox = document.getElementById('leftBox');
var leftMenu = document.getElementById('leftMenu');
var rightBox = document.getElementsByClassName('col_02')[0];
function leftBoxEvt(){
  leftBox.classList.toggle('col_01_hide');
  rightBox.classList.toggle('col_02_expand');
}

var dates = document.getElementById('cal_dates').querySelectorAll('a');
var datesLeft = document.getElementsByClassName('calender_bottom')[0].querySelectorAll('a');
// 메인 달력에 특정 날짜 눌렀을 때 색상 변화
for (var i=0; i<dates.length; i++){
  dates[i].addEventListener('focusin', function(){
    this.classList.add('selected');
  });
  dates[i].addEventListener('focusout', function(){
    this.classList.remove('selected');
  });
}
// 왼쪽 메뉴 작은 달력에 특정 날짜 눌렀을 때 색상 변화
for (var i=0; i<datesLeft.length; i++){
  datesLeft[i].addEventListener('focusin', function(){
    this.classList.add('selected');
  });
  datesLeft[i].addEventListener('focusout', function(){
    this.classList.remove('selected');
  });
}

// 왼쪽 메뉴 내 캘린더 옆 화살표 누르면 아래 메뉴 사라지게 or 나타나게
var foldMyCal = document.getElementsByClassName('myCal_btn_01')[0];
var myCalBottom = document.getElementsByClassName('myCal_bottom')[0];
foldMyCal.addEventListener('click', function(){
  myCalBottom.classList.toggle('myCal_bottom_hide');
  this.classList.toggle('myCal_btn_01_fold');
});

// 메인 캘린더 위 상세검색부분 focusin, focusout 할 때마다 input border 색상 변하게
var input = document.getElementsByClassName('detail_left')[0].querySelectorAll('input');
for (var i=0; i<input.length; i++){
  input[i].addEventListener('focusin', function(){
    this.style.border = "1px solid #905be2";
  });
  input[i].addEventListener('focusout', function(){
    this.style.border = "1px solid #cbcbcb";
  });
}

// 메인 캘린더 위 상세검색부분에 범주 색상박스 체크 표시
var colorBox = document.getElementsByClassName('colorBox')[0].querySelectorAll('a');
for (var i=0; i<colorBox.length; i++){
  colorBox[i].addEventListener('focusin', function(){
    this.style.fontSize = "12px";
  });
  colorBox[i].addEventListener('focusout', function(){
    this.style.fontSize = "0";
  });
}


//상세 버튼 누르면 하단으로 내용 나오게
var seeDetail = document.getElementById('see_details');
var detailsBbox = document.getElementById('details_box');
var calenderBox = document.getElementsByClassName('col_02_row2')[0];
function detailsEvt(){
  detailsBbox.classList.toggle('details_box_show');
  calenderBox.classList.toggle('shorter');
}

// 달력 월간, 일간, 주간, 리스트, 2주 탭
var calTab = document.getElementById('cal_kind_tab').querySelectorAll('button');
var calConts = document.getElementsByClassName('calenders');
var calDates = document.getElementsByClassName('aboveCal_btm_01')[0].querySelectorAll('p');
function calEvt(evt, calKind, calDate){
  for(var i = 0; i < calConts.length || i < calTab.length; i++){
    calConts[i].style.display = "none"; // 다른 달력 안보이게
    document.getElementById(calKind).style.display = "block"; // 해당 달력 보이게
    calTab[i].classList.remove('active'); // 탭 active 없애기
    evt.currentTarget.classList.add('active'); // 누른 탭에 active 추가
  }
  for(var i = 0; i < calDates.length; i++){
    calDates[i].style.display = "none";
    document.getElementById(calDate).style.display = "block"; // 해당 달력 보이게
  }
}

// input keydown 하면 label 사라지게
var input = document.querySelectorAll('input');
for(var i = 0; i < input.length; i++){
  input[i].addEventListener('keydown', function(){
    this.classList.add('on');
  });
}
