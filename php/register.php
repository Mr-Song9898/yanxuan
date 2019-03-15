<?php
	$user=@$_GET["user"];
	$pass=@$_GET["pass"];
	$link=mysql_connect("localhost:3306","root","123456");
	if(!$link){mysql_error();}
	
	$sel=mysql_select_db("login");
	if(!$sel){mysql_error();}
	
	$utf=mysql_query("set names utf8");
	if(!$utf){mysql_error();}
	
	$mysql="INSERT msg (name,pass) VALUES('".$user."',$pass)";
	$query=mysql_query($mysql);
	if($query){
		echo "1";
	}
?>