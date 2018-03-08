<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
date_default_timezone_set("Asia/Shanghai");

$head_pic = $_POST['head_pic'];
$nickname = $_POST['nickname'];
$content = $_POST['content'];
$time = date("Y-m-d H:i:s");


$sql="INSERT INTO msg (head_pic,nickname,content,time)
VALUES('$head_pic','$nickname','$content','$time')";

mysqli_query($conn,$sql);



