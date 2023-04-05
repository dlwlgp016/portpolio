
// 스크롤 할때마다 체크 - top 버튼
$(window).scroll(function(){ 
	if($(window).scrollTop() >= 200)
	{
		$('.btn-topMv').show('slow');
	}else{
		$('.btn-topMv').hide('slow');
	}
});

$(document).ready(function(){
	// top 으로 이동
	$('.btn-topMv').click(function(){
		$('html, body').animate({scrollTop:0},600);
	});
	// mobile 에서 사용하는 메뉴
    $('.mobile-menu .btn-menu').click(function(){
        if($('#nav-mobile').is(':hidden')){
        	//$('#box-mobile').css({"position":"fixed","right":"68%","width":"100%"});
            //$('#nav-mobile').css({"padding-bottom":"100px","z-index":"1","display":"block"});
        	$('#box-mobile').removeClass('off');
            $('#nav-mobile').removeClass('off');
        	$('#box-mobile').addClass('on');
            $('#nav-mobile').addClass('on');
        }else{
        	// $('#box-mobile').css({"position":"relative","right":"0","width":"100%"});
            // $('#nav-mobile').css({"padding-bottom":"0","z-index":"-1","display":"none"});
        	$('#box-mobile').removeClass('on');
            $('#nav-mobile').removeClass('on');
        	$('#box-mobile').addClass('off');
            $('#nav-mobile').addClass('off');
        }
    });

	// Main Event
	$(".img-top").mouseenter(function(){
		 $(this).stop().animate({top: "-180px"}, 500  );
		 $(this).find("p").stop().animate({bottom: "15px"}, 500  );
	});
	
	$(".img-out").mouseleave(function(){
		 $(this).find(".img-top").stop().animate({top: "0px"}, 500  );
		 $(this).find("p").stop().animate({bottom: "48px"}, 500  );
	});

	$(".fadein-img").hover(function(){
		$(this).find(".over-img").stop().animate({opacity: 1}, 500  );
	}, function(){
		$(this).find(".over-img").stop().animate({opacity: 0}, 500  );
	});

	$(".main-player").hover(function(){
		$(this).find("p").stop().animate({bottom:"0px"}, 500  );
	}, function(){
		$(this).find("p").stop().animate({bottom:"-40px"}, 500  );
	});

	$("dl.faq_list dt").click(function(){
		var number = $("dl.faq_list dt").index(this);
		$("dl.faq_list dt").each(function (i , e){
			if( number == i){
				$("dl.faq_list dd").eq(i).slideDown();
			}else{
				$("dl.faq_list dd").eq(i).slideUp();
			}
		});
	});

});

	

// mobile 에서 메뉴 클릭후 화면 사이즈 커지면 메뉴 hide 및 body에 디바이스별 class 추가
function re_rollWidth(){
    if( $(window).width() > 768 ){
    	//$('.warp-pc #box-mobile').css({"position":"relative","right":"0","width":"100%"});
        //$('.warp-pc #nav-mobile').css({"padding-bottom":"0","z-index":"-1","display":"none"});
    	$('body').removeClass('warp-mobile');
    	$('body').addClass('warp-pc');
    	$('#box-mobile').removeClass('on');
        $('#nav-mobile').removeClass('on');
        $('#box-mobile').removeClass('off');
        $('#nav-mobile').removeClass('off');
    }if( $(window).width() < 767 ){
    	$('body').removeClass('warp-pc');
    	$('body').addClass('warp-mobile');
    }
};
setInterval('re_rollWidth()',1);

// 네비게이션
$(document).ready(function(){
	$('#gnb .wrap a').click(function(){
        $('#gnb').find('.btn-1').removeClass('select');
        $(this).parents('.box-select').find('.btn-1').addClass('select');
    });
    // 테블릿에서 사용하는 네비게이션
    $('#gnb .btn-1').click(function(){
        $('.warp-pc #gnb .wrap').hide();
        $(this).parent().next().show();

        $('#gnb').find('.btn-1').removeClass('select');
        $(this).parents('.box-select').find('.btn-1').addClass('select');
    });
});

// 네비게이션 함수
function nav(d1,d2,d3) {
	var $gnb = $('#gnb'),
		$d1 = $gnb.find('h1'),
		$gn = $d1.next('.wrap'),
		$d2 = $gnb.find('h2'),
		$btn = $('#btn-nav'),
		$body_wrap,
		$gnb_wrap,
		$cont = $('#wrap').add('.common-side').add('#footer'),
		d1_len = $d1.length,
		setD1 = d1,
		setD2 = (d2) ? d2 : 0,
		setD3 = (d3) ? d3 : 0,
		isopen = false,
		is_touch = $('html').hasClass('touch'),
		body_bg = $('body').css('background-color'),
		gnb_bg = $gn.css('background-color');

	function openGnb() {
		$gnb_wrap.css({'z-index': 1, 'padding-bottom': '100px', 'background-color': gnb_bg});
		$gnb.show();
		$body_wrap.css({'position': 'fixed', 'right':'68%', 'width':'100%'});
		isopen = true;
	}

	function closeGnb() {
		$body_wrap.css({'position': 'relative', 'right':0 });
		$gnb_wrap.css({'z-index': -1, 'padding-bottom': 0, 'background-color': 'transparent'});
		$gnb.hide();
		isopen = false;
	}
	
	function closeD3() {
		$d2.next('ul').stop(true, true).delay(1000).hide();
		$d2.find('a').removeClass('on');
	}

	function closeD2() {
		closeD3();
		if ( !lt_breakpoint() ) {
			$gn.stop(true, true).slideUp(240, function(){
				$d1.find('a').removeClass('on');
			});
		}
	}

	$btn.on('click', function(event){

		if ( isopen === false ) {

			openGnb();

		} else {
			
			closeGnb();
		}
		event.preventDefault();
		event.stopPropagation();
	});

	$d1.each(function(n){
		var $this = $(this),
			$a = $this.find('>a'),
			$d2_wrap = $gn.eq(n);

		if ( setD1-1 === n ) {
			$d1.addClass('dim');
			$this.removeClass('dim').addClass('current');
		}

		
	});

	$d2.on({
		click: function(event) {

			if ( !($(this).find('a').hasClass('on')) ) {

				closeD3();
				$(this).find('a').addClass('on');
				$(this).next('ul').stop(true, true).slideDown(360);
			}

			// if ( is_touch && $(this).next('ul').length > 0 ) {
			if ( $(this).hasClass('has-sub') ) {
				event.preventDefault();
			}
			event.stopPropagation();
		}
	});

}