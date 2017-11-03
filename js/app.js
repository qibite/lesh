jQuery(document).ready(($)=>{
	if (window.innerWidth<600) {
		$('#nadzagolovok').removeClass('align-self-end').addClass('align-self-start')
		$('#zagolovok').removeClass('align-self-end').addClass('align-self-start')
		$('#podzagolovok').removeClass('align-self-end').addClass('align-self-start')
		$('#contaner_zagolovok').removeClass('row')
	}
	$(window).scroll(()=>{
		let top;
		$('#header').css('background-position-y', -($(this).scrollTop()/7)+'px');
		//console.log($(this).scrollTop())
		$('#contaner_zagolovok').css('top', -($(this).scrollTop()/3)+'px');
		let first = document.getElementById('first');
		//console.log(first.offsetTop)
		if (first.offsetTop / $(this).scrollTop() < 2) {			
			$('.whyimg, #txt_1').css('display', 'inline-block');
			$('#anim_im_1').addClass('bounceInLeft');
			$('#anim_im_2').addClass('bounceIn');
			$('#anim_im_3').addClass('bounceInRight');
			$('#parallax').css('background-position-y', -($(this).scrollTop()/7)+'px');
		}
	})
	//
})

