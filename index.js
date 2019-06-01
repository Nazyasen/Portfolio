// JavaScript Document

$(function(){
	$('#toggle_nav').click(function(){
		$('#toggle_nav').find('span').toggleClass('active');
		$('#toggle_menu').slideToggle(0);
	});	
	
	$(document).on('click',function(e) {
	   if(!$(e.target).closest('button').length) {
		 $('#toggle_nav').find('span').removeClass('active');
		 $('#toggle_menu').fadeOut();
	   }
	});
	
});
























































