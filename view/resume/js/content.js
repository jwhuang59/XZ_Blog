

var index=0;
$("#content .section .bg4 .nav .A a").click(function(){
	index=$(this).index();
	$("#content .section .bg4 ul .bigbox").stop().animate({left:-index*1000+"px"},1000)
	
})

$("#content .section .bg4 ul .img2").click(function(){
		index++;
		$("#content .section .bg4 ul .bigbox").stop().animate({left:-index*1000+"px"},500)
		if(index>2){
			index=2
			$("#content .section .bg4 ul .bigbox").stop().animate({left:"-2100px"},200,function(){
				$(this).stop().animate({left:"-2000px"},200)

			})
		}
	})

	$("#content .section .bg4 ul .img1").click(function(){
		index--;
		$("#content .section .bg4 ul .bigbox").stop().animate({left:-index*1000+"px"},500)
		if(index<0){
			index=0;
			$("#content .section .bg4 ul .bigbox").stop().animate({left:"100px"},200,function(){
				$(this).stop().animate({left:"0px"},200)

			})
		}
	})




$(".menu ol .min-show").click(function(){
	$(".menu ol .lis").slideToggle()

})




var music=document.getElementById('music');
$(".menu ol .man .icon1").click(
	function(){		
		$(".menu ol .man .icon1").css({'display':'none'})
		$(".menu ol .man .icon2").css({'display':'block'})
		
		if(music!==null){
			if(music.paused){                 
			    music.play();
			 }else{
			   music.pause();
			}
		}
	})

	if($(".menu ol .man .icon2").attr("display","block")){
		$(".menu ol .man .icon2").click(
			function(){
				music.play();
				$(".menu ol .man .icon2").css({'display':'none'})
				$(".menu ol .man .icon1").css({'display':'block'})
			})
}