$(document).ready(function() {

// 헤더 Sticky
 	var stickyNavTop = $('.header').offset().top;
 	var stickyNav = function(){
  var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  };
	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

// 스크롤 내리면 gototop 버튼 나오고 무지 로고 사라짐
  $(window).scroll(function() {
    if ($(this).scrollTop() > 25) {
        $('.gototop').show();
        $('.logo').hide();
    } else {
        $('.gototop').hide();
        $('.logo').show();
    }
  });

// gototop 버튼 누르면 맨 위로 스크롤
  $('.gototop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  })

// 버거메뉴 열기
  $('.menu_btn').click(function(){
    $('.menu').toggleClass('menu_show')
  });
  $('.btn_close').click(function(){
    $('.menu').removeClass('menu_show')
  });
// 버거메뉴 속 서브메뉴 열기
  $('.menu_01').click(function(){
    $('.menu_right ul').hide();
    $('.menu_sub_01').show();
  });
  $('.menu_02').click(function(){
    $('.menu_right ul').hide();
    $('.menu_sub_02').show();
  });
  $('.menu_03').click(function(){
    $('.menu_right ul').hide();
    $('.menu_sub_03').show();
  });
  $('.menu_04').click(function(){
    $('.menu_right ul').hide();
    $('.menu_sub_04').show();
  });
  $('.menu_05').click(function(){
    $('.menu_right ul').hide();
    $('.menu_sub_05').show();
  });
  $('.menu_06').click(function(){
    $('.menu_right ul').hide();
    $('.menu_sub_06').show();
  });

// 메뉴 Active 효과
  $('.menu_left_01 li').click(function () {
    $('.menu_left_01 li a.active').removeClass('active');
    $(this).find("a").addClass('active');
  });

// 메뉴, 서브메뉴 클릭하면 버거메뉴 닫히게
  $('.menu_right ul li a').click(function(){
    $('.menu').removeClass('menu_show');
  });
  $('.menu_left_02 li a').click(function(){
    $('.menu').removeClass('menu_show');
  });

// input, textarea 키 다운하먼 라벨 안보이게
	$('input, textarea').one('keydown', function(){
    $(this).addClass("on");
	});

// 탭 메뉴
  $(".tab_content").hide();
  $(".tab_content:first").show();

  $("ul.tabs li").click(function () {
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).show();

		$("ul.tabs li").removeClass("tab_active");
		$(this).addClass("tab_active");

		$(".tab_drawer_heading").removeClass("d_active");
		$(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
    });

});
