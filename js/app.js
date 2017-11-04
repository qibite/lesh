jQuery(document).ready(($)=>{
	if (window.innerWidth<600) {
		$('#nadzagolovok').removeClass('align-self-end').addClass('align-self-start')
		$('#zagolovok').removeClass('align-self-end').addClass('align-self-start')
		$('#podzagolovok').removeClass('align-self-end').addClass('align-self-start')
		$('#contaner_zagolovok').removeClass('row')
	}
	let top_1 = $('#anim_im_1').offset().top;
	let top_2 = $('#anim_im_2').offset().top;
	let top_3 = $('#anim_im_3').offset().top;
	let top_4 = $('#anim_im_4').offset().top;
	let top_5 = $('#anim_im_5').offset().top;
	let top_6 = $('#anim_im_6').offset().top;
	let top_7 = $('#anim_im_7').offset().top;
	$(window).scroll(()=>{
		let top;
		$('#header').css('background-position-y', -($(this).scrollTop()/7)+'px');
		$('#contaner_zagolovok').css('top', -($(this).scrollTop()/3)+'px');
		let first = document.getElementById('first');
		if ((top_1-250) < $(this).scrollTop()) {$('#anim_im_1').addClass('bounceInLeft').css('visibility', 'visible')}
		if ((top_2-250) < $(this).scrollTop()) {$('#anim_im_2').addClass('bounceIn').css('visibility', 'visible')}
		if ((top_3-250) < $(this).scrollTop()) {$('#anim_im_3').addClass('bounceInRight').css('visibility', 'visible')}
		if ((top_4-250) < $(this).scrollTop()) {$('#anim_im_4').addClass('bounceInLeft').css('visibility', 'visible')}
		if ((top_5-250) < $(this).scrollTop()) {$('#anim_im_5').addClass('bounceIn').css('visibility', 'visible')}
		if ((top_6-250) < $(this).scrollTop()) {$('#anim_im_6').addClass('bounceInRight').css('visibility', 'visible')}
		if ((top_7-250) < $(this).scrollTop()) {$('#anim_im_7').addClass('bounceInLeft').css('visibility', 'visible')}
	})
	//
	$("#phone").mask("+7 (999) 999-99-99");

})

