<?php  
require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');
header("content-type:application/json; charset=utf-8");

$page=$_GET['page'];
$limit=$_GET['limit'];
$start=($page-1)*$limit;
$result0 = mysqli_query($conn,"select * FROM article" );
$sql = "SELECT * FROM article limit {$start},{$limit}";
$result = mysqli_query($conn,$sql );
$num = mysqli_num_rows($result0);

while($row=mysqli_fetch_array($result)){
	$datas[] = array("id"=>$row['aid'],"title"=>$row['title'],"type" => $row['type'] , "sketch"=>$row['sketch'],"text"=>$row['text'],"time"=>$row['time']);
	
}

$table=array("code" => 0,"msg"=>"","count"=>$num,"data"=>$datas);

echo json_encode($table);