<?php

$con = mysqli_connect('59.110.55.120', 'bdm256727651', 'hjw123456');
if(! $con )
{
    die('连接失败: ' . mysqli_error($con));
}

mysqli_select_db($con,'bdm256727651_db');
$sql = "select userName,passWord FROM Forms where userName = '$_POST[login_userName]' and passWord='$_POST[login_passWord]'";
$result = mysqli_query($con,$sql );
$rows=mysqli_num_rows($result);

if($rows){
   echo "<script>window.location.href='login.html';</script>";
   exit;
}else{
       echo "用户名或密码错误";
       echo "
       <script>
           setTimeout(function(){window.location.href='form.html';},3000);
        </script>";
     }

mysqli_close($con)

?>

