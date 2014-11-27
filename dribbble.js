$(document).ready(function(){

	var divs = ".box-forgot-form, .box-forgot-link span.close";

	$(divs).hide();

	$('.box-forgot-link').click(function(){
		$(divs).show();
		return false;
	});

	$('.box-forgot-link span.close').click(function(){
		$(divs).hide();
		return false;
	});

	$('.box-bottom-reset').click(function(){
		$(divs + ", .box-forgot-link").hide();
		$(".box-forgot-success").show();
		return false;
	});

	$('.box-button').click(function(){
		return false;
	});

});