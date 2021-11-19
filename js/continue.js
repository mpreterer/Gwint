$(document).ready(function() {
	$('#continue').click(function () {
		$('.container-player').hide(650);
		$('.users').css('display','flex')
		$('.users').fadeOut(650).show(650);
	})
});