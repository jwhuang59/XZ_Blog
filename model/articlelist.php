<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
header("content-type:application/json; charset=utf-8");

$result = mysqli_query($conn,"select * FROM article join category on article.type=category.name" );
$num = mysqli_num_rows($result);

while($row=mysqli_fetch_array($result)){
	$data[] = array("aid"=>$row['aid'],"title"=>$row['title'],"type" => $row['type'] , "sketch"=>$row['sketch'],"text"=>$row['text'],"time"=>$row['time'],"num"=>$row['num'],"type_id" => $row['type_id']);
	
}

echo json_encode($data);