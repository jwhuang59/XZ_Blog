<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
header("content-type:application/json; charset=utf-8");

$result = mysqli_query($conn,"select * FROM msg" );
$count = mysqli_num_rows($result);

$msg = array();

while($row = mysqli_fetch_assoc($result)){
	$msg[] = $row;

}
array_push($msg, $count);
echo json_encode($msg);

