<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
header("content-type:application/json; charset=utf-8");

$text=isset( $_GET['keyword'] )?$_GET['keyword']:'';

$sql = "select * from article join category on article.type=category.name where title like '%$text%'";
$result=mysqli_query($conn,$sql);
$data=array();
while($row = mysqli_fetch_assoc($result)){
	$data[] = $row;

}

echo json_encode($data);

