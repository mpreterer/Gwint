$( document ).ready(function() {
	var n1 = 0;
	var n2 = 0;
	
	$('#inp1').val(n1);
	$('#inp2').val(n2);

	$('.users__plus1').click(function () {
		n1 = $('#inp1').val();
		n1++;
		$('#inp1').val(n1);
	})
	$('.users__minus1').click(function () {
		n1 = $('#inp1').val();
		n1--;
		$('#inp1').val(n1);
	})
	////
	$('.users__plus2').click(function () {
		n2 = $('#inp2').val();
		n2++;
		$('#inp2').val(n2);
	})
	$('.users__minus2').click(function () {
		n2 = $('#inp2').val();
		n2--;
		$('#inp2').val(n2);
	})
});