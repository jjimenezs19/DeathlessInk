	// var i = 0;
$(document).on("ready", main);

	var m = 1;
	var mobile = window.matchMedia('(max-width: 768px)');

function main(){
	// var control = setInterval(cambiarSlider, 15000);
	slick();
	slick_main();
	menu_left();
	checkPosition(); 
}

// function cambiarSlider(){
// 	i++;
// 	if(i == $("#slider img").size()){
// 		i = 0;
// 	}
// 	$("#slider img").hide();
// 	$("#slider img").eq(i).fadeIn("medium");
// }

function slick(){
	$('.slick').slick({
  		infinite: true,
  		autoplay: true,
  		autoplaySpeed: 5000,
  		arrows : true,
  		slidesToShow: 4,
  		slidesToScroll: 4
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