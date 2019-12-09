$(function() {
	let header         = $('header'),
		topNav         = $('nav#top-nav'),
		contentHeader  = $('header .content'),
		socialHeader   = $('header ul.social-media'),
		menu           = $('ul.menu'),
		search         = $('nav#top-nav form.search'),
		toggleMenu     = $('button.menu'),
		closeMenu      = $('ul.menu li.close'),
		toggleSearch   = $('nav#top-nav button.search'),
		closeSearch    = $('nav#top-nav form.search button.close'),
	    card           = $('.cardo'),
	    loader         = $('.lds-facebook');

	$(window).scrollTop(0);

	contentHeader.width(header.width() - socialHeader.width());
	$(window).resize(function() {
		contentHeader.width(header.width() - socialHeader.width());		
	});
	$('select').change(function() {
		$(`*[data-select='${$(this).attr('id')}']`).text($(this).val());
	});
	toggleMenu.click(function() {
		menu.removeClass('close').addClass('open')
	});
	closeMenu.click(function() {
		menu.removeClass('open').addClass('close')
	});
	toggleSearch.click(function() {
		search.removeClass('close').addClass('open')
	});
	closeSearch.click(function(e) {
		e.preventDefault();
		search.removeClass('open').addClass('close')
	});

	// scape
	// $(document).keypress(function(e){
	// 	if (e.keyCode === 27) {alert('test')}
	// });
	card.each(function() {
		$(this).height($(this).children('.front').innerHeight())
	});
	$(window).resize(function() {
		card.each(function() {
			$(this).height($(this).children('.front').innerHeight())
		});			
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() > $(window).height()) {
			$('nav#top-nav').addClass('fixed-top').removeClass('no-fixed-top');
			// $('body').css('margin-top', $('nav#top-nav').innerHeight());
		}else{
			$('nav#top-nav').removeClass('fixed-top').addClass('no-fixed-top');
			// $('body').css('margin-top', 0);			
		}
	});
	loader.fadeOut();
});