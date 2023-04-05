
$(function(){

	nav(0);
	
	$('#quick-nav').find('.nav3>a').on('click', function(e){
		var url = $(this).attr('href');
		popup( url, 540, 580, 'live_chat');
		e.preventDefault();
		e.stopPropagation();
	});

	// Show or hide the sticky footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});
	
	// Animate the scroll to top
	$('.go-top').click(function(event) {
		$('html, body').animate({scrollTop: 0}, 300);
		event.preventDefault();
		event.stopPropagation();
	});

	//tab-menu
	$('.tab-wrap .tab-btns a').click(function(){
		var href = $(this).attr('href').replace('#','');
		$('.tab-wrap .tab-con').each(function(){
			if($(this).attr('id').match(href)){
				$(this).show();
			}else{
				$(this).hide();
			}
		});
		$('.tab-wrap .tab-btns li').removeClass('on');
		$(this).parents('li').addClass('on');
	});

});
