<?php  

$id  = isset( $_GET['id'] )?$_GET['id']:'';  
if(intval( $id )){  
    
	require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php'); 

	$sql = "Update article set num = num+1 where aid ='$id'";  
	mysqli_query($conn,$sql);  
    
    $result = mysqli_query($conn,"select * FROM article where aid = '$id'" );
	$row = mysqli_fetch_array($result);
	echo $row['num'];
}  
