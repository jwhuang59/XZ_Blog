<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
header("content-type:application/json; charset=utf-8");

$result = mysqli_query($conn,"select * FROM link" );

while($row=mysqli_fetch_array($result)){
	$link[] = array("link_id"=>$row['link_id'],"link_name"=>$row['link_name'],"link_href" => $row['link_href']);
	
}

echo json_encode($link);
