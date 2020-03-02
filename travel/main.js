$(document).ready(function() {

	$(document).scroll(function(){
		if($(this).scrollTop() > 400){
			$('.fade-in-paragraph').fadeIn(3000);
		}
	});
	
	$(document).scroll(function(){
		if($(this).scrollTop() > 10){
			$('.fade-in-header').fadeIn(5000);
		}
	});

});

















