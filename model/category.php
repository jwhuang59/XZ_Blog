
<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
header("content-type:application/json; charset=utf-8");
$type = $_POST['type'];

$result = mysqli_query($conn,"select * from article join category on article.type=category.name where type='$type'");
$list=array();
while($row=mysqli_fetch_array($result)){
	$list[]=$row;

}

echo json_encode($list);
