<?php
	$link=mysql_connect("localhost:3306","root","123456");
	if(!$link){mysql_error();}
	
	$sel=mysql_select_db("login");
	if(!$sel){mysql_error();}
	
	$utf=mysql_query("set names utf8");
	if(!$utf){mysql_error();}
	
	$mysql=mysql_query("SELECT * FROM msg");
	$str="";
	while($arr=mysql_fetch_assoc($mysql)){
		$str = $str.json_encode($arr).",";
	}
	echo $str;
?>