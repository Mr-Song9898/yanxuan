$(".btn_login").on("click",function(){
	$(".login").stop().fadeIn(500);
	$("#abc").stop().fadeIn(10);
})
$(".btn_zhuce").on("click",function(){
	$(".zhuce").stop().fadeIn(500);
	$("#abc").stop().fadeIn(10);
})
$(".login-p>.close").on("click",function(){
	$(".login-p").stop().fadeOut(500);
	$("#abc").stop().fadeOut();
})

$("#btn_z").on("click",function(){
	console.log(this);
	var url ="http://localhost/project/php/register.php";
	$.ajax({
		url:url,
		data:{
			user:$("#user-zhu").val(),
			pass:$("#pass-zhu").val()
		},
		success:function(res){
			if(res=="1"){
				alert("添加成功！！！");
			}else{
				alert("添加失败！！！");
			}
		}
	})
})

$("#btn_d").on("click",function(){
	var url="http://localhost/project/php/login.php";
	$.ajax({
		type:"get",
		url:url,
		success:function(res){
			res=res.slice(0,res.length-1);
				res="["+res+"]";
				res=JSON.parse(res);
//				console.log(res);
				for(var i=0;i<res.length;i++){
					for(var j in res[i]){
						if($("#user-deng").val()==res[i]["name"]&&$("#pass-deng").val()==res[i]["pass"]){
//							console.log(res[i]["name"]);
//							console.log(res[i]["pass"]);
							alert("欢迎尊贵的"+res[i]['name']);
							$(".login-p").stop().fadeOut(500);
							$("#abc").stop().fadeOut();
							$(".btn_login").html(res[i]['name']).css("color","red");
							console.log($(".btn_zhuce").parent())
							$(".btn_zhuce").parent().remove()
							return null;
						}
					}
				}
				alert("登录失败");
		}
	});
})

$("#diszhu").on("click",function(){
	$(".login").stop().fadeOut(300);
	$(".zhuce").stop().fadeIn(300);
})
$("#disdeng").on("click",function(){
	$(".zhuce").stop().fadeOut(300);
	$(".login").stop().fadeIn(300);
})

//var opass=document.getElementById("pass");
//$("#btn_z").on("click",function(){
//	var url ="http://localhost/Mr_Song/php/register.php?user="+ouser.value+"&pass="+opass.value;
//	ajaxGet(url).then(function(res){
//				console.log(res);
//		if(res=="1"){
//			alert("添加成功！！！");
//		}else{
//			alert("添加失败！！！");
//		}
//	})
//})

//$("#btn_d").on("click",function(){
//	var url="http://localhost/Mr_Song/php/login.php";
//			ajaxGet(url).then(function(res){
//				res=res.slice(0,res.length-1);
//				res="["+res+"]";
//				res=JSON.parse(res);
//				console.log(res);
//				for(var i=0;i<res.length;i++){
//					for(var j in res[i]){
//						if(ouser.value==res[i]["name"]&&opass.value==res[i]["pass"]){
//							console.log(res[i]["name"]);
//							console.log(res[i]["pass"]);
//							alert("登录成功");
//							setTimeout(function(){
//								location.reload();
//							},1000)
//							return null;
//						}
//					}
//				}
//				alert("登录失败");
//			})
//})
