
<?php


$conn=mysqli_connect('localhost', 'root', '') or die("error connecting") ;
 
mysqli_query($conn,"set names 'utf8'");
 
mysqli_select_db($conn,'blog'); 

?>
