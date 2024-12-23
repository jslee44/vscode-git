$(document).ready(function(){
	function showDiv() {		
		var box1Top =  $('.main-box01').offset().top - 750;	
		if ($(window).scrollTop() > box1Top) {	
			animateE( $('.main-box01 .main-motion') , 600 , 200 );
		} 	
		var box2Top =  $('.main-box02').offset().top - 750;	
		if ($(window).scrollTop() > box2Top) {	
			animateE( $('.main-box02 .main-motion') , 600 , 200 );
		}  	
		var box3Top =  $('.main-box03 ').offset().top - 600;	
		if ($(window).scrollTop() > box3Top) {	
			animateE( $('.main-box03 .main-motion') , 600 , 200 );
		} 	
		var box4Top =  $('.main-box04').offset().top - 750;	
		if ($(window).scrollTop() > box4Top) {	
			animateE( $('.main-box04 .main-motion') , 600 , 200 );
		} 	
		var box5Top =  $('.main-box05').offset().top - 750;	
		if ($(window).scrollTop() > box5Top) {	
			animateE( $('.main-box05 .main-motion') , 600 , 200 );
		} 
	}		
	$(window).scroll(showDiv);		
	showDiv();
});
function animateE( target , duraV , delayV ){			
	target.each(function(i){		
		target.eq(i).delay(i*delayV).animate({ 'top':'0', opacity:1 } , { duration : duraV })	
	});		
}	