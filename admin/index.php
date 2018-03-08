<?php
 
require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
session_start();
if(!isset($_SESSION['username'])){
 echo "
      <script> 
           setTimeout(function(){window.location.href='user/login.html';},1000);
        </script>";
  exit;  
}
 ?> 

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>戏子博客-后台管理系统</title>
<link rel="shortcut icon" href="logo.ico"></link>
<link rel="stylesheet" href="layui/css/layui.css">
<link rel="stylesheet" href="main/css/style.css">

</head>
<body class="layui-layout-body">
<div class="layui-layout layui-layout-admin">
  <div class="layui-header">
    <div class="layui-logo"><p>后台管理系统</p></div>
    <ul class="layui-nav layui-layout-right">
      <li class="layui-nav-item msg">
        <a href="">消息<span class="layui-badge">2</span></a>
      </li>
      <li class="layui-nav-item admin">
        <a href="javascript:;">
          <img src="main/img/man.jpg" class="layui-nav-img">
          <span><?php echo $_SESSION['username'];?></span>
        </a>
        <dl class="layui-nav-child">
          <dd><a href="">基本资料</a></dd>
          <dd><a href="">安全设置</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item"><a href="../admin/user/logout.php">退出</a></li>
    </ul>
  </div>
  
  <div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
      <ul class="layui-nav layui-nav-tree side_right" lay-filter="test">
        <li class="layui-nav-item layui-this"><a href="javascript:;"><i class="layui-icon">&#xe68e</i>首页</a></li>  
        <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon">&#xe705</i>文章管理</a></li>
        <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon">&#xe62d</i>分类管理</a></li>
        <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon">&#xe60a</i>留言管理</a></li>
        <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon">&#xe654</i>发表文章</a></li>
        <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon">&#xe614</i>网站设置</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">管理员设置</a></dd>
            <dd><a href="javascript:;">用户设置</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon">&#xe64c</i>友情链接</a></li>
        <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon">&#xe621</i>操作日志</a></li>
      </ul>
    </div>
  </div>
  
  <div class="layui-body">
    <!-- 内容主体区域 -->
      <div class="main">
        <iframe class="active" src="main/home.html" width=100% height=100% frameborder="0" scrolling="yes"></iframe>
        <iframe src="main/article.html" width=100% height=100% frameborder="0" scrolling="no"></iframe>
        <iframe src="" width=100% height=100% frameborder="0" scrolling="no"></iframe>
        <iframe src="" width=100% height=100% frameborder="0" scrolling="no"></iframe>
        <iframe src="main/re-article.html" width=100% height=100% frameborder="0" scrolling="yes"></iframe>
        <iframe src="" width=100% height=100% frameborder="0" scrolling="no"></iframe>
        <iframe src="" width=100% height=100% frameborder="0" scrolling="no"></iframe>
        <iframe src="" width=100% height=100% frameborder="0" scrolling="no"></iframe>

      </div>
   
  </div>
  
</div>
<script type="text/javascript" src='main/js/jquery.js'></script>
<script src="layui/layui.js"></script>
<script>

layui.use(['element','layer'], function(){
  var element = layui.element;
  var layer = layui.layer;


$(".side_right li").click(function(){
  var index=$(this).index()
  
  if(index == 5){


  }else{
    $(".main iframe").eq(index).addClass("active").siblings().removeClass("active")

  }
})

});
</script>
</body>
</html>


