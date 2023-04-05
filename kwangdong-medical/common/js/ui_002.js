
$(function(){

	nav(0);

	$('#quick-nav').find('.nav3>a').on('click', function(e){
		var url = $(this).attr('href');
		popup( url, 540, 580, 'live_chat');
		e.preventDefault();
		e.stopPropagation();
	});

	$('#main-banner').setMainBanner();
	$('#s-banner1').setMainBanner();
	$('#s-banner2').setMainBanner();
});


(function($){

	$.fn.setMainBanner = function(){
		this.each(function(){
			var $slide = $(this),
				slider_option,
				option_default = {
				mode: 'fade',
				randomStart: true,
				autoStart: true,
				auto: true,
				pause: 3600,
				controls: false
			};

			if ( $slide.find('li').length < 2 ) {

				slider_option = {
					mode: 'fade',
					pager: false,
					controls: false
				};
			} else {
				slider_option = option_default;
			}
			
			$slide.bxSlider(slider_option);
		});
	}
})(jQuery);