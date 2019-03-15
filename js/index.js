
function fn(res,ul,id){
	res=JSON.parse(res);
	var str="";
	for(var i=0;i<res.length;i++){
		str+=`<li>
				<a href="#">
					<img src="${res[i].src}"/>
					<span>${res[i].name}</span>
				</a>
			</li>`
	}
	$(ul).html(str);
}

$("nav>ul>li:not('.no1'):not('.no2'):not('.no3')").on("mouseenter",function(){
	$(this).children("a").addClass("display");
	$(this).children(".menu_box").stop().fadeIn(300);
	let url="http://localhost/project/php/nav_menu.php";
	let id=$(this).val();
	var ul=$(this).find(".menu");
	$.ajax({
		url:url,
		data:{
			status:"register",
			userID:id,
		},
		success:function(res){
			fn(res,ul,id)
		}
	})
})
$("nav>ul>li:not('.no1'):not('.no2'):not('.no3')").on("mouseleave",function(){
	$(this).find("a").removeClass("display");
	$(this).children(".menu_box").stop().fadeOut(300);
})

onscroll=function(){
	var T=document.documentElement.scrollTop;
	if(T>176){
		$("#nav nav:nth-child(2)").css({
			"background":"#fff",
			"display":"block",
			"top":T
		})
	}else{
		$("#nav nav:nth-child(2)").css("display","none")
	}
}


var t=0;
var timer=null;
timer=setInterval(function(){
	if(t==-180){
		$("#aaa").css("top","0");
		t=-36;
	}
	$("#aaa").stop().animate({"top":t});
	t-=36;
},1000)
$("#aaa a").hover(function(){
	clearInterval(timer);
},function(){
	timer=setInterval(function(){
		if(t==-180){
			$("#aaa").css("top","0");
			t=-36;
		}
		$("#aaa").stop().animate({"top":t});
		t-=36;
	},1000)
})

$(".li_list").hover(function(){
	$(".sel").css("display","block")
	$(".li_list span").html("↓")
},function(){
	$(".sel").css("display","none")
	$(".li_list span").html("↑")
})


$(".footer_t .footer_t_l p").hover(function(){
	$(this).children("span").css("color","#b19f7b")
},function(){
	$(this).children("span").css("color","#000")
})

$(".footer_t_c .guanzhu .iconfont").hover(function(){
	$(this).children(".ma").css("display","block")
},function(){
	$(this).children(".ma").css("display","none")
})
