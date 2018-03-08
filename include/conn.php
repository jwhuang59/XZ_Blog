
<?php


// $conn=mysqli_connect('59.110.55.120', 'bdm256727651', 'hjw123456') or die("error connecting") ;
 
// mysqli_query($conn,"set names 'utf8'");
 
// mysqli_select_db($conn,'bdm256727651_db'); 

$conn=mysqli_connect('localhost', 'root', '') or die("error connecting") ;
 
mysqli_query($conn,"set names 'utf8'");
 
mysqli_select_db($conn,'blog'); 

?>