<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/include/conn.php');


$type=$_POST['type'];
$title=$_POST['title'];
$sketch=$_POST['sketch'];
$text=$_POST['text'];
$time=$_POST['time'];


$sql="INSERT INTO article (type,title,sketch,text,time,op_time,num)
VALUES('$type','$title','$sketch','$text','$time','','100')";
mysqli_query($conn,$sql);


$result = mysqli_query($conn,"select * FROM article join category on article.type=category.name" );

while($row=mysqli_fetch_array($result)){

	$prev = mysqli_query($conn,"select * from article where aid = (select aid from article where aid < ".$row['aid']." order by aid desc limit 1)");

	$next = mysqli_query($conn,"select * from article where aid = (select aid from article where aid > ".$row['aid']." order by aid asc limit 1)");

	$rowPrev=mysqli_fetch_array($prev);
	$rowNext=mysqli_fetch_array($next);

	$temp_file =$_SERVER['DOCUMENT_ROOT']."/template/temp.html"; //模板文件
	$dest_file =$_SERVER['DOCUMENT_ROOT']."/article/".$row['aid'].".html"; //生成的目标页面
	$fp = fopen($temp_file, "r"); //只读打开模板
	$str = fread($fp, filesize($temp_file));//读取模板中内容
	//替换内容
	$str = str_replace("{aid}", $row['aid'], $str);
	$str = str_replace("{article_type_id}", $row['type_id'], $str);
	$str = str_replace("{article_type}", $row['type'], $str);
	$str = str_replace("{article_title}", $row['title'], $str);
	$str = str_replace("{article_time}", $row['time'], $str);
	$str = str_replace("{article_num}", $row['num'], $str);
	$str = str_replace("{article_text}", $row['text'], $str);

	if($rowPrev == null){
		$rowPrev['title'] = '没有了';
		$str = str_replace("{prev_article_aid}", "javascript:;", $str);

	}else{
		$str = str_replace("{prev_article_aid}", '../article/'.$rowPrev['aid'].'.html', $str);

	};
	if($rowNext == null){
		$rowNext['title'] = '没有了';
		$str = str_replace("{next_article_aid}", "javascript:;", $str);

	}else{
		$str = str_replace("{next_article_aid}", '../article/'.$rowNext['aid'].'.html', $str);

	};

	$str = str_replace("{prev_article_title}", $rowPrev['title'], $str);
	$str = str_replace("{next_article_title}", $rowNext['title'], $str);


	fclose($fp);//关闭文件
	$handle = fopen($dest_file, "w"); //写入方式打开需要写入的文件
	fwrite($handle, $str); //把刚才替换的内容写进生成的HTML文件
	fclose($handle);//关闭打开的文件，释放文件指针和相关的缓冲区


}


