$(document).ready(function(){

	var divs = ".box-account-forgot-form, .box-account-forgot-link span.close";

	$(divs).hide();

	$('.box-account-forgot-link').click(function(){
		$(divs).show();
		return false;
	});

	$('.box-account-forgot-link span.close').click(function(){
		$(divs).hide();
		return false;
	});

	$('.box-bottom-reset').click(function(){
		$(divs + ", .box-account-forgot-link").hide();
		$(".box-account-forgot-success").show();
		return false;
	});

	$('.box-account-button').click(function(){
		return false;
	});

});