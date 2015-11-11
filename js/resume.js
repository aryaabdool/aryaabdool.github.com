$(document).ready(function(){

	$('.education-image').on('click', function(){
		$('.education-image').fadeOut()
		$('.education-text').fadeIn();
		$('.experience-image').fadeOut()
		$('.skills-image').fadeOut()
		$('.interests-image').fadeOut()
			
	});

	$('.education-text').on('click', function(){
		$('.education-text').fadeOut()
		$('.education-image').fadeIn()
		$('.experience-image').fadeIn()
		$('.skills-image').fadeIn()
		$('.interests-image').fadeIn()
	});




/////////////////// End of Jquery
});