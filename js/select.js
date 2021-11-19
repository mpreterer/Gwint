$( document ).ready(function() {
	if ($('select').val() !== 'none') {
		$('#continue').removeAttr('disabled');
	} else {
		$('#continue').attr('disabled','disabled');
	}

	$('#color1').click(function () {
		if ($('#color1').val() !== 'none' && $('#color2').val() !== 'none') {
			$('#continue').removeAttr('disabled');
		} else {
			$('#continue').attr('disabled','disabled');
		}

		if ($('#color1').val()=='blue') {
			$('.slt-player__player1').css('background-color','#0186E5');
			$('.users__bg1').css('background-color','#0186E5');
		}

		else if ($('#color1').val()=='red') {
			$('.slt-player__player1').css('background-color','#A90000');
			$('.users__bg1').css('background-color','#A90000');
		}

		else if ($('#color1').val()=='green') {
			$('.slt-player__player1').css('background-color','#287824');
			$('.users__bg1').css('background-color','#287824');
		}

		else if ($('#color1').val()=='gold') {
			$('.slt-player__player1').css('background-color','#C4A349');
			$('.users__bg1').css('background-color','#C4A349');
		} else {
			$('.slt-player__player1').css('background-color','#fff');
		}
	})

	$('#color2').click(function () {
		if ($('#color1').val() !== 'none' && $('#color2').val() !== 'none') {
			$('#continue').removeAttr('disabled');
		} else {
			$('#continue').attr('disabled','disabled');
		}

		if ($('#color2').val()=='blue') {
			$('.slt-player__player2').css('background-color','#0186E5');
			$('.users__bg2').css('background-color','#0186E5');
		}

		else if ($('#color2').val()=='red') {
			$('.slt-player__player2').css('background-color','#A90000');
			$('.users__bg2').css('background-color','#A90000');
		}

		else if ($('#color2').val()=='green') {
			$('.slt-player__player2').css('background-color','#287824');
			$('.users__bg2').css('background-color','#287824');
		}

		else if ($('#color2').val()=='gold') {
			$('.slt-player__player2').css('background-color','#C4A349');
			$('.users__bg2').css('background-color','#C4A349');
		} else {
			$('.slt-player__player2').css('background-color','#fff');
		}
	})
});