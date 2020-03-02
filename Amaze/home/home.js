// $(document).ready(function() {
// 	$('.menu-icon').hover('.dropdown').css({
// 		'opacity':'1',
// 	})
// });
	$(document).ready(function() {
	$('.menu-hi').click(function() {
		$('.dropdown-hi').fadeToggle(1000)
	});

	

	$('.shoping-icon').click(function() {
		$('.shoping-icone-dropdown').fadeToggle(1000)
	});

	var options = {
	$AutoPlay: 1,
	$ArrowNavigatorOptions: {
		$Class: $JssorArrowNavigator$,
		$ChanceToShow: 2
	}
};
var jssor_1_slider = new $JssorSlider$("jssor_1", options);



/*$('.section-3-animate').show(2000);*/
	$('.section-4-icon-text-1').counterUp({
        delay: 20,
        time: 3000
    });
});

$(document).ready(function(){
  	$(".section-5-carousel").owlCarousel({
  		items:3	
  	});
	addAnimations()
});


$(document).ready(function(){
  	$(".section-6").owlCarousel({
  		items:2,
  		/*autoplay:true,
  		autoplayTimeout: 1000*/
  	});
	addAnimations()
});
$(document).ready(function(){
  	$(".section-7-carousel").owlCarousel({
  		items:5,
  		autoplay:true,
  		/*autoplayTimeout: 1000,*/
  		navContainer: '.section-7-nav'
  	});
	addAnimations()
});


$(document).scroll(function(){
 	addAnimations()
});

function addAnimations() {
	if($(this).scrollTop() > 1000 && $(this).scrollTop() < 1900){
		$('.section-3-animate-1').addClass("animate");
		$('.section-3-animate-2').addClass("animate");
	}
}