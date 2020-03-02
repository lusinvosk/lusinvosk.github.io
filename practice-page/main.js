$(document).ready(function() {
	$('.menu').click(showMenu);
	$('.close-icon').click(closeMenu);

	var visibleSlide = 0;
	function updateSlides() {
		$('.slider-0').addClass('hidden');
		$('.slider-1').addClass('hidden');
		$('.slider-2').addClass('hidden');
		$('.slider-'+visibleSlide).removeClass('hidden');
	}

	$('.right-arrow').click(function() {
		visibleSlide = (visibleSlide + 1) % 3;
		updateSlides();
	});

	$('.left-arrow').click(function() {
		visibleSlide = (visibleSlide + 2) % 3;
		updateSlides();
	})
});



function showMenu() {
	$('.menu-text').css({
		'width':'300px'
	});
}
function closeMenu() {
	$('.menu-text').css({
		'width':'0'
	});
}

$(document).scroll(function(){
	/*var top = $('.appear-text').get(0).offsetTop;*/

	if($(this).scrollTop()>100){
		$('.appear-text').fadeIn(2000);
	}
	//else if($(this).scrollTop()<=top)
		//$('.appear-text').hide(1000);
})
$(document).scroll(function(){
	/*var top = $('.second-appear-text').get(0).offsetTop;*/

	if($(this).scrollTop()>500){
		$('.second-appear-text').fadeIn(2000);
	}
	//else if($(this).scrollTop()<=top)
		//$('.second-appear-text').hide(1000);
})
$(document).scroll(function(){
	/*var top = $('.third-appear-text').get(0).offsetTop;*/

	if($(this).scrollTop()>800){
		$('.third-appear-text').fadeIn(2000);
	}
	//else if($(this).scrollTop()<=top)
		//$('.third-appear-text').hide(1000);
})

$(document).scroll(function(){
	if($(this).scrollTop()>window.innerHeight){
		$('.menu').css({
			'background-color':'white',
			'color':'grey',
			'box-shadow':'2px 2px #e6ebf4',

		})
	}
	else{
		$('.menu').css({
			'background-color':'transparent',
			'color':'white',
			'box-shadow':'0px 0px',

		})
	}
});




