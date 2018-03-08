<?php
	session_start();//初始化session
	session_destroy();//注销session
	header("location:login.html");//注销session并跳转

?>