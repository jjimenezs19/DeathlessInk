	// Author: Jason Jimenez
$(document).on("ready", main);

	var m = 1;
	var mobile = window.matchMedia('(max-width: 768px)');

function main(){

	navGalery();
	slick_main();
	menu_left();
	checkPosition(); 
}

function navGalery(){
	jQuery('.slick').slick({
		infinite: true,
			autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		utoplay: true,
			autoplaySpeed: 5000,
		arrows : true,
		responsive: [
		 {
		   breakpoint: 768,
		   settings: {
		     slidesToShow: 2,
		     slidesToScroll: 2,
		     arrows : true,
		   }
		 }
		]
	});
}
function slick_main(){
	$('.slick_main').slick({
  		infinite: true,
  		autoplay: true,
  		autoplaySpeed: 5000,
  		arrows : false,
  		slidesToShow: 1,
  		slidesToScroll: 1
	});
}

function menu_left(){
	$('.nav_m').click(function() {
		if(m==1){
			$('nav').animate({
				left: '0'
			});

			m = 0;
		}else{
			m = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
}

function checkPosition() {
    if (mobile.matches) {
        $('.slick').slick({
	  		infinite: true,
	  		autoplay: true,
	  		autoplaySpeed: 5000,
	  		arrows : true,
	  		slidesToShow: 2,
	  		slidesToScroll: 2 
		});
    } 
}