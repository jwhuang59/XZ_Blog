<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
header("content-type:application/json; charset=utf-8");

$sql = "select cid,type,type_id,count(*) as count from article join category on article.type=category.name group by cid,type,type_id";

$result = mysqli_query($conn,$sql);
$list = array();
while($row = mysqli_fetch_assoc($result)){
	$list[] = $row;

}
echo json_encode($list);







