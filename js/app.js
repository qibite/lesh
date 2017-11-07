$(document).ready(()=>{
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
		let scrolling = $(this).scrollTop();
		$('#header').css('background-position-y', -(scrolling/7)+'px');
		$('#contaner_zagolovok').css('top', -(scrolling/3)+'px');
		let first = document.getElementById('first');
		if ((top_1/1.8) < scrolling && $('#anim_im_1').css('visibility') != 'visible') {$('#anim_im_1').addClass('bounceInLeft').css('visibility', 'visible')}
		if ((top_2/1.8) < scrolling) {$('#anim_im_2').addClass('bounceIn').css('visibility', 'visible')}
		if ((top_3/1.8) < scrolling) {$('#anim_im_3').addClass('bounceInRight').css('visibility', 'visible')}
		if ((top_4-400) < scrolling && $('#anim_im_4').css('visibility') != 'visible') {$('#anim_im_4').addClass('bounceInLeft').css('visibility', 'visible')}
		if ((top_5-400) < scrolling) {$('#anim_im_5').addClass('bounceIn').css('visibility', 'visible')}
		if ((top_6-400) < scrolling) {$('#anim_im_6').addClass('bounceInRight').css('visibility', 'visible')}
		if ((top_7-400) < scrolling) {$('#anim_im_7').addClass('bounceInLeft').css('visibility', 'visible')}
	})
	//
	$("#phone").mask("+7 (999) 999-99-99");

	$('#send_dozvon').on('click', function(event) {
		let phone_recall = $('#phone').val();
		let name_recall = $('#client_name').val();
		if (phone_recall == '' || name_recall == '') {
			return alert('Заполните все поля для запроса')
		}
		$.post('../php/sender.php', {phone: phone_recall, name_r: name_recall}, function(data, textStatus, xhr) {
			let resp = JSON.parse(data)
			let popup = document.createElement('span');
				popup.id = 'modal';
				popup.className = 'col-lg-4 col-md-6 col-sm-10 offset-lg-4 offset-md-3 offset-sm-1 modal_sended';
				popup.innerHTML = resp.html;
			let bgpopup = document.createElement('div')
				bgpopup.id = 'bgpopup';
				bgpopup.append(popup)
				document.body.append(bgpopup);
				//setTimeout(()=>{$('#modal').remove()}, 8000)				
		});
	});
	$('body').on('click', '#bgpopup', function(event) {
		$('#phone').val('');
		$('#client_name').val('');
		$('html, body').animate({scrollTop: 0+'px'}, 1200)
		$(this).remove();
	});

	var map;
	DG.then(function () {
		map = DG.map('map', {
			center: [52.02853, 113.508568],
			zoom: 17
		});
		DG.marker([52.02853, 113.508568]).addTo(map).bindPopup(' Реснички наращивают тут =) ');
		/*map.locate({setView: true, watch: true})
		.on('locationfound', function(e) {
			DG.marker([e.latitude, e.longitude]).addTo(map);
			})
			.on('locationerror', function(e) {
				DG.popup()
				.setLatLng(map.getCenter())
				.setContent('Доступ к определению местоположения отключён')
				.openOn(map);
			});*/
		});
	$(()=>{jQuery.scrollSpeed(40, 1400)});
})

