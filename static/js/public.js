

//热门文章
$.ajax({
	type:'post',
	url:'../model/articlelist.php',
	dataType:'json',
	success:function(hot_list){
		function sort(a,b){  
			return b.num - a.num;  
		}
		hot_list.sort(sort);
		var str="";
		for(var i=0;i<8;i++){
			str += "<li><div class='dot'><span class='layui-badge-dot layui-bg-green'></span></div><a href='../article/"+hot_list[i].aid+".html'>"+hot_list[i].title+"</a><span class='hot'>"+hot_list[i].num+"℃</span></li>"

		}
		$(".main-right .hot_list .list").html(str)
	}
})

//标签云
var Tags=["个人博客","PHP","WEB前端","PHP教程","JavaScript","Java","前台","后台","jwhang","评论","留言","MVC","WEB框架","Ajax","Jquery","Angular","VUE","特效","分享","浅谈"];
var str="";
  for(var i=0;i<Tags.length;i++){  
    str+="<a href='../view/tags.html?tag="+Tags[i]+"'>"+Tags[i]+"</a>"
    
  }
  $(".main-right .tag_cloud #tags").html(str);

var tags=document.getElementById("tags");
var obj=tags.getElementsByTagName("a");
  //随机方法
  function rand(num){
   return parseInt(Math.random()*num+1);
  }
  //随机颜色值
  function randomcolor(){
    var str=Math.random().toString(16).substr(2, 6);
    if(str == "ffffff"){
      return "009688";
    }else{
      return str;     
    } 
  }
  //循环
  for(var len=obj.length,i=len;i--;){   
    obj[i].style.fontSize=rand(8)+12+"px";
    obj[i].style.background="#"+randomcolor();    
    obj[i].onmouseover=function(){
      this.style.background="#fff";
      this.style.color="#"+randomcolor();
      
    }
    obj[i].onmouseout=function(){
      this.style.background="#"+randomcolor();;
      this.style.color="#fff";
    }
  }


//分类
$.ajax({
	type:'post',
	url:'../model/fl_list.php',
	dataType:'json',
	success:function(fl_list){
		var str="";
    for(var i=0;i<fl_list.length;i++){          
      str += "<li><div class='dot'><span class='layui-badge-dot layui-bg-green'></span></div><a href='../articlelist/"+fl_list[i].type_id+".html'>"+fl_list[i].type+"("+fl_list[i].count+")"+"</a></li>"
    
    }
    $(".main-right .fl_list .list").html(str)
	}
})


//链接
$.ajax({
  type:'post',
  url:'../model/link.php',
  dataType:'json',
  success:function(link){
    var str="";
    for(var i=0;i<link.length;i++){
      str+="<li><a href="+link[i].link_href+" target='_black'>"+link[i].link_name+"</a></li>";

    }
    $(".main .main-right .link .href").html(str)
  }
})









