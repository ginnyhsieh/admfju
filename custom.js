$(function(){

	new WOW().init(); //啟動WOW
	$(window).scroll(function()
	{
		
		if($(window).scrollTop()>=$("#header").offset().top && $(window).scrollTop()<$("#award").offset().top)
		{
			$("#button1").css("background-color","#EFBB24");
			$("#button2").css("background-color","#333333");
			$("#button3").css("background-color","#333333");

		}
		else if($(window).scrollTop()>=$("#award").offset().top && $(window).scrollTop()<$("#topic").offset().top)
		{
			$("#button2").css("background-color","#EFBB24");
			$("#button1").css("background-color","#333333");
			$("#button3").css("background-color","#333333");
		}
		else if($(window).scrollTop()>=$("#topic").offset().top)
		{
			$("#button3").css("background-color","#EFBB24");
			$("#button1").css("background-color","#333333");
			$("#button2").css("background-color","#333333");
		}
	})
	
});

