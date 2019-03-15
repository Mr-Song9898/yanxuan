<?php
	$index=$_GET["index"];
	$json1='[{
				"src":"https://img14.360buyimg.com/n7/jfs/t6112/323/2286998125/258886/ed4e13c/593e4a5dN7fb3dedc.jpg",
				"price":"2699",
				"name":"荣耀9 全网通 高配版 6GB+64GB 琥珀金 移动联通电信4G手机 双卡双待"
			},{
				"src":"https://img11.360buyimg.com/n7/jfs/t8644/4/845002898/492015/40fb43ff/59afaa7dNebd8a6db.jpg",
				"price":"599",
				"name":"荣耀 畅玩6 2GB+16GB 金色 全网通4G手机 双卡双待"
			},{
				"src":"https://img14.360buyimg.com/n7/jfs/t6850/289/737192940/861204/cb476eed/59794799N17e25bb4.jpg",
				"price":"2599",
				"name":"荣耀9 全网通 高配版 6GB+64GB 琥珀金 移动联通电信4G手机 双卡双待"
			},{
				"src":"https://img12.360buyimg.com/n7/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg",
				"price":"699",
				"name":"荣耀10 全面屏AI摄影手机 6GB+64GB 幻夜黑 全网通 移动联通电信4G 双卡双待"
			}]';
	$json2='[{
				"src":"https://img12.360buyimg.com/n7/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg",
				"price":"699",
				"name":"荣耀10 全面屏AI摄影手机 6GB+64GB 幻夜黑 全网通 移动联通电信4G 双卡双待"
			},{
				"src":"https://img14.360buyimg.com/n7/jfs/t6850/289/737192940/861204/cb476eed/59794799N17e25bb4.jpg",
				"price":"2599",
				"name":"荣耀9 全网通 高配版 6GB+64GB 琥珀金 移动联通电信4G手机 双卡双待"
			},{
				"src":"https://img12.360buyimg.com/n7/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg",
				"price":"699",
				"name":"荣耀10 全面屏AI摄影手机 6GB+64GB 幻夜黑 全网通 移动联通电信4G 双卡双待"
			},{
				"src":"https://img12.360buyimg.com/n7/jfs/t17149/173/1779654602/189601/335d3d90/5ad8628dN03dc292f.jpg",
				"price":"699",
				"name":"荣耀10 全面屏AI摄影手机 6GB+64GB 幻夜黑 全网通 移动联通电信4G 双卡双待"
			}]';
			
	if($index==1){
		echo $json1;
	}else{
		echo $json2;
	}
	
?>