

$(function(){
	var img_num=0;
	$(".shop dl").mouseenter(
		function(){
		img_num = $(".shop dl").index($(this))
		$(".d_title img:eq(0)").attr("src","images/shop_img00_gray.png")
		$(".d_title img:eq(1)").attr("src","images/shop_img01_gray.png")
		$(".d_title img:eq(2)").attr("src","images/shop_img02_gray.png")
		$(".d_title img:eq(3)").attr("src","images/shop_img03_gray.png")
		$(this).find("img").attr("src","images/shop_img0"+img_num+".png")
		}
	)
	
	var n=0
	var tLeft=setInterval(runLeft,3000)
	var tRight=setInterval(runRight,3000)
	clearInterval(tRight)
	$(".ctrl span").click(
		function(){
		n=$(this).index()
		$(".ctrl span").removeClass("current")
		$(this).addClass("current")
		$(".banner_box ul").stop().animate({marginLeft:-960-(1920*n)})
		clearInterval(tLeft)
		clearInterval(tRight)
		if(n<3){
		tLeft = setInterval(runLeft,3000)	
		}else{
		tRight = setInterval(runRight,3000)	
		}

		}
	)
	$(".a_right").click(
		function(){
			if(n>0){
			n=n-1
			}else{
			n=0	
			}
			$(".banner_box ul").stop().animate({marginLeft:-960-(1920*n)})

			$(".ctrl span").removeClass("current")
		$(".ctrl span").eq(n).addClass("current")
		}
	)
	$(".a_left").click(
		function(){		
		clearInterval(tLeft)
		tLeft = setInterval(runLeft,3000)	
			if(n<5){
			n=n+1
			}else{
			n=5			}
			$(".banner_box ul").stop().animate({marginLeft:-960-(1920*n)})
		$(".ctrl span").removeClass("current")
		$(".ctrl span").eq(n).addClass("current")
		}
	)
	function runLeft(){
		if(n<5){
		n=n+1
		}else{
		n=5
		clearInterval(tLeft)
		clearInterval(tRight)
		tRight = setInterval(runRight,3000)
		}
		$(".banner_box ul").stop().animate({marginLeft:-960-(1920*n)})
		$(".ctrl span").removeClass("current")
		$(".ctrl span").eq(n).addClass("current")	
	}
	function runRight(){
		if(n>0){
		n=n-1	
		}else{
		n=0
		clearInterval(tLeft)
		clearInterval(tRight)
		tLeft = setInterval(runLeft,3000)
		}
		$(".banner_box ul").stop().animate({marginLeft:-960-(1920*n)})	
		$(".ctrl span").removeClass("current")
		$(".ctrl span").eq(n).addClass("current")
	}	
})