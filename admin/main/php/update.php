<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
date_default_timezone_set("Asia/Shanghai");
// echo date("Y-m-d h:i:s");
$id=$_POST['id'];
$type=$_POST['type'];
$title=$_POST['title'];
$sketch=$_POST['sketch'];
$text=$_POST['text'];
$op_time=date("Y-m-d H:i:s");

if(intval( $id )){ 

$result= mysqli_query($conn,"UPDATE article SET type = '$type',title = '$title',sketch= '$sketch',text= '$text',op_time= '$op_time' WHERE aid='$id'");

}
if ($result) {  
  echo "修改成功";  
} else {  
  echo "修改失败!";  
};