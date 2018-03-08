<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');

$id=$_POST['id'];

$result = mysqli_query($conn,"DELETE FROM article WHERE aid = $id");

if ($result) {  
  echo "删除成功";  
} else {  
  echo "删除失败!";  
};
