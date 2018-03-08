<?php

require_once ($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');

$sql = "select username,password FROM users where username = '$_POST[login_username]' and password='$_POST[login_password]'";
$result = mysqli_query($conn,$sql );
$rows=mysqli_num_rows($result);

if($rows){
	session_start();
	$_SESSION['username'] = $_POST['login_username'];
   	echo "<script>window.location.href = '../';</script>";
   	exit;
}else{
       echo "用户名或密码错误";
       echo "
       <script>
           setTimeout(function(){window.location.href = 'login.html';},3000);
        </script>";
     }





?>
