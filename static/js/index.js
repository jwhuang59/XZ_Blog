var index=0;

$(".lb").hover(function(){
  $(".lb .title").eq(0).stop().animate({"top":"0px"},300)

  },function(){
    $(".lb .title").stop().animate({"top":"-80px"},300)

  })

$(".lb .lb-nav span").click(function(){
  $(this).addClass("lb-active").siblings().removeClass("lb-active")
    index=$(this).index()
    $(".lb .title").css("top","-80px")
    $(".lb .title").eq(index).css({"left":760*index+"px"})
    $(".lb .lb-wrap").stop().animate({left:-760*index+"px"},1000,function(){
      $(".lb .title").eq(index).stop().animate({"top":"0px"},300)
    })
  
})

$(".lb .next").click(function(){
    autoplay();
  })
$(".lb .prev").click(function(){
  index--;
  $(".lb .lb-nav span").eq(index).addClass("lb-active").siblings().removeClass("lb-active");  
  if(index == -1){
      index = 3;
      $(".lb .lb-wrap").css("left","-3040px");
    }
  $(".lb .title").css("top","-80px")
  $(".lb .title").eq(index).css({"left":760*index+"px"})
  $(".lb .lb-wrap").stop().animate({left:-index*760+"px"},1000,function(){
    $(".lb .title").eq(index).stop().animate({"top":"0px"},300)

  });
    
})

Time=setInterval(autoplay,4000)
function autoplay(){
      index++;     
      $(".lb .lb-nav span").eq(index).addClass("lb-active").siblings().removeClass("lb-active");  
      if(index == 5){
        index=1;
        $(".lb .lb-wrap").css("left","0px");
      }
      $(".lb .title").css("top","-80px")
      $(".lb .title").eq(index).css({"left":760*index+"px"})
      $(".lb .lb-wrap").stop().animate({left:-index*760+"px"},1000,function(){
        $(".lb .title").eq(index).stop().animate({"top":"0px"},300)

      });
      if(index == 4){
        $(".lb .lb-nav span").eq(0).addClass("lb-active").siblings().removeClass("lb-active"); 
      }else{
        $(".lb .lb-nav span").eq(index).addClass("lb-active").siblings().removeClass("lb-active");
      }
    }

$(".lb").hover(function(){
    $(".lb .prev").fadeIn(300);
    $(".lb .next").fadeIn(300);
    $(".lb .title").eq(index).stop().animate({"top":"0px"},300)
  },function(){
    $(".lb .prev").fadeOut(300);
    $(".lb .next").fadeOut(300);
    $(".lb .title").stop().animate({"top":"-80px"},300)
  });
  hover1=function(){
    clearInterval(Time)
  };
  hover2=function(){
    Time=setInterval(autoplay,4000)
  }
  $(".lb").hover(hover1,hover2)

  
//首页文章

$.ajax({
  type:'post',
  url:'../model/articlelist.php',
  dataType:'json',
  success:function(list){
    var s= "";
    for(var i=0;i<list.length;i++){
      s+="<li>"
      s+="<a class='pic' href='../article/"+list[i].aid+".html'><img src='../admin/img-list/"+list[i].aid+".jpg'></a>"
      s+="<p class='title'><a href='../article/"+list[i].aid+".html'>"+list[i].title+"</a></p>"
      s+="<div class='date'><i class='layui-icon'>&#xe60e;</i><span class='time'>"+list[i].time+"</span><label>分类:</label><a href='../articlelist/"+list[i].type_id+".html'>"+list[i].type+"</a>"
      s+="<div class='messages'><i class='layui-icon'>&#xe63a;</i><span id = 'sourceId::"+list[i].aid+"' class = 'cy_cmt_count' ></span></div>"
      s+="<div class='browse'><i class='layui-icon'>&#xe756;</i><span>"+list[i].num+"℃</span></div></div>"
      s+="<div class='content'>"+list[i].sketch+"</div>"
      s+="</li>"
    }
    $(".main .main-left .article .articlelist").html(s);
    $(".main .main-left .article .articlelist").append("<script id='cy_cmt_num' src='http://changyan.sohu.com/upload/plugins/plugins.list.count.js?clientId=cytrygClo'></script>")
  }

})
