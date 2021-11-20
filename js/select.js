$( document ).ready(function() {
	$('#continue').attr('disabled','disabled');
	$('#color1').val('none');
	$('#color2').val('none');

	$('#color1').on('change', function () {
		if ($('#color1').val() !== 'none' && $('#color2').val() !== 'none') {
			$('#continue').removeAttr('disabled');
		} else {
			$('#continue').attr('disabled','disabled');
		}

		if ($('#color1').val() !== 'none') {
			$('.slt-player__player1').css('color','#fff');
		} else {
			$('.slt-player__player1').css('color','#000');
		}

		if ($('#color2').val() !== 'none') {
			$('.slt-player__player2').css('color','#fff');
		} else {
			$('.slt-player__player2').css('color','#000');
		}

		if ($('#color1').val()=='blue') {
			$('.slt-player__player1').css('background-image','url(images/sever.jpg)');
			$('.users__bg1').css('background-image','url(images/sever.jpg)');
		}

		else if ($('#color1').val()=='red') {
			$('.slt-player__player1').css('background-image','url(images/chudo2.jpg)');
			$('.users__bg1').css('background-image','url(images/chudo2.jpg)');
		}

		else if ($('#color1').val()=='green') {
			$('.slt-player__player1').css('background-image','url(images/elphi.jpg)');
			$('.users__bg1').css('background-image','url(images/elphi.jpg)');
		}

		else if ($('#color1').val()=='gold') {
			$('.slt-player__player1').css('background-image','url(images/nilf.jpg)');
			$('.users__bg1').css('background-image','url(images/nilf.jpg)');
		} else {
			$('.slt-player__player1').css('background-image','url(images/)');
		}
	})

	$('#color2').on('change', function () {
		if ($('#color1').val() !== 'none' && $('#color2').val() !== 'none') {
			$('#continue').removeAttr('disabled');
		} else {
			$('#continue').attr('disabled','disabled');
		}

		if ($('#color2').val()=='blue') {
			$('.slt-player__player2').css('background-image','url(images/sever.jpg)');
			$('.users__bg2').css('background-image','url(images/sever.jpg)');
		}

		else if ($('#color2').val()=='red') {
			$('.slt-player__player2').css('background-image','url(images/chudo2.jpg)');
			$('.users__bg2').css('background-image','url(images/chudo2.jpg)');
		}

		else if ($('#color2').val()=='green') {
			$('.slt-player__player2').css('background-image','url(images/elphi.jpg)');
			$('.users__bg2').css('background-image','url(images/elphi.jpg)');
		}

		else if ($('#color2').val()=='gold') {
			$('.slt-player__player2').css('background-image','url(images/nilf.jpg)');
			$('.users__bg2').css('background-image','url(images/nilf.jpg)');
		} else {
			$('.slt-player__player2').css('background-color','#fff');
		}
	})
});