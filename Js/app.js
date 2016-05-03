var i = 0;
$(document).on("ready", main);

function main(){
	var control = setInterval(cambiarSlider, 15000);
	slick();
	
}

function cambiarSlider(){
	i++;
	if(i == $("#slider img").size()){
		i = 0;
	}
	$("#slider img").hide();
	$("#slider img").eq(i).fadeIn("medium");
}

function slick(){
	$('.slick').slick({
  		infinite: true,
  		autoplay: true,
  		autoplaySpeed: 5000,
  		slidesToShow: 4,
  		slidesToScroll: 4
	});
}