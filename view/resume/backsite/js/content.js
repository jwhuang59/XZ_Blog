

$(".nav .pic").click(function(){
	$(this).css("display","none").animate({left:"20px"},500);
	$(".nav .pic1").css("display","block").animate({left:"20px"},500);
	$(".nav_0").hide();
	$(".nav_1").hide();
	$(".nav ul").css("width","45px");
	$(".nav ul li").css("width","45px").find("a").hide().find("p").hide();
	$(".nav").animate({width:"45px"},500);

	$(".cont-right0").animate({width:"1150px"},500);
	$(".cont-right0 .title").animate({width:"1130px"},500);
	$(".cont-right0 img").animate({width:"1150px"},500);


	$(".cont-right").animate({width:"1150px"},500);
	$(".cont-right .title").animate({width:"1130px"},500);
	$(".cont-right ul").animate({width:"1150px"},500);
	$(".cont-right ul li").animate({width:"365px"},500);

	$(".cont-right1").animate({width:"1150px"},500);
	$(".cont-right1 .title1").animate({width:"1130px"},500);
	$(".cont-right1 ul").animate({width:"1150px"},500);
	$(".cont-right1 ul li").animate({width:"550px"},500);

	$(".cont-right2").animate({width:"1150px"},500);
	$(".cont-right2 .title2").animate({width:"1130px"},500);
	$(".cont-right2 ul").animate({width:"1150px"},500);
	$(".cont-right2 ul li").animate({width:"550px"},500);
});


$(".nav .pic1").click(function(){
	$(this).css("display","none").animate({left:"150px"},500);
	$(".nav .pic").css("display","block").animate({left:"150px"},500);
	$(".nav_1").show();
	$(".nav ul li").css("width","180px").find("a").show().find("p").show();
	$(".nav").animate({width:"180px"},500)

	$(".cont-right0").animate({width:"1000px"},500);
	$(".cont-right0 .title").animate({width:"980px"},500);
	$(".cont-right0 img").animate({width:"1000px"},500);

	$(".cont-right").animate({width:"1000px"},500);
	$(".cont-right .title").animate({width:"980px"},500);
	$(".cont-right ul").animate({width:"1000px"},500);
	$(".cont-right ul li").animate({width:"315px"},500);

	$(".cont-right1").animate({width:"1000px"},500);
	$(".cont-right1 .title1").animate({width:"980px"},500);
	$(".cont-right1 ul").animate({width:"1000px"},500);
	$(".cont-right1 ul li").animate({width:"480px"},500);

	$(".cont-right2").animate({width:"1000px"},500);
	$(".cont-right2 .title2").animate({width:"980px"},500);
	$(".cont-right2 ul").animate({width:"1000px"},500);
	$(".cont-right2 ul li").animate({width:"480px"},500);
});



$(".nav ul li").click(function(){
	$(this).find(".nav_0").slideToggle(500);
	$(this).siblings().removeClass("active").find(".nav_0").slideUp(500);
});

$(".nav_0").click(function(){
	return false;
});

$(".nav ul .active0").click(function(){
	$(".cont-right0").fadeIn(500).siblings().fadeOut(500)

})

$(".nav ul .active1").click(function(){
	$(".cont-right").fadeIn(500).siblings().fadeOut(500)

})
$(".nav ul .active2").click(function(){
	$(".cont-right1").fadeIn(500).siblings().fadeOut(500);

})
$(".nav ul .active3").click(function(){
	$(".cont-right2").fadeIn(500).siblings().fadeOut(500);

})

