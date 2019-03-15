//let oipt=document.getElementById("ipt");
//let onav=document.getElementsByTagName("nav")[0];
//var na=onav.children
var menu=document.getElementsByClassName("menu");
var nav=document.getElementById("nav").children;
console.log(menu);
$("#ipt").on("click",()=>{
	console.log($(this))
})
onscroll=function(eve){
	var e=eve ||window.event;
	var T=document.documentElement.scrollTop;
//	var t=nav[2].offsetTop;
	console.log(T+176);
	if(T>176){
		$("#nav nav:nth-child(2)").css({
			"background":"#fff",
			"display":"block",
//			"position":"flex",
			"top":T
		})
	}else{
		$("#nav nav:nth-child(2)").css("display","none")
	}
}


//$("nav>ul>li:not('.no1'):not('.no2'):not('.no3')").hover(function(){
//	$(this).children("a").addClass("display");
//	$(".menu_box").css("display","block");
//	let url="http://localhost/Mr_Song/php/nav_menu.php";
//	console.log($(this).val());
//	let id=$(this).val();
//	let that=this;
//	console.log($(this).find(".menu")[0])
//	var ul=$(this).find(".menu")[0];
//	$.ajax({
////		url:"php/nav_menu.php",
//		url:url,
//		data:{
//			status:"register",
//			userID:id,
//		},
//		success:function(res){
////			fn(res,ul,id);
//		}
//	})
////	$.get(url,{
////		id:id
////	}).then(function(res){
////		console.log(res)
////		for(var i=0)
////	})
//	
//	
//},function(){
//	$(this).find("a").removeClass("display")
//	$(this).children(".menu_box").css("display","none")
//})

function fn(res,ul,id){
	res=JSON.parse(res);
	console.log(res);
	var str="";
	for(var i=0;i<res.length;i++){
		str+=`<li>
				<a href="#">
					<img src="${res[i].src}"/>
					<span>${res[i].name}</span>
				</a>
			</li>`
	}
//	console.log(str);
//	ul.innerHTML=str;
//	console.log($(ul))
	$(ul).html(str);
//	console.log($(that).find(".menu"));
//	$(that).find(".menu").html("hello!!!");
//	$(this).children("menu").html(str);
//	menu[id-1].innerHTML=str;
}

$("nav>ul>li:not('.no1'):not('.no2'):not('.no3')").on("mouseenter",function(){
	console.log(this);
	$(this).children("a").addClass("display");
//	$(this).children(".menu_box").css("display","block");
	$(this).children(".menu_box").stop().fadeIn(300);
	let url="http://localhost/Mr_Song/php/nav_menu.php";
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
//	$(this).children(".menu_box").css("display","none")
	$(this).children(".menu_box").stop().fadeOut(300);
	console.log(this)
})


$("#banner").banner({
	items:$("#banner .imgbox").children("a"),		
	left:$("#banner .prev"),				
	right:$("#banner .next"),				
	list:$("#banner .list").children("li"),	
	autoPlay:true,					
	delayTime:3000,				
	timer:500						
})



var t=0;
let aaa=document.getElementById("aaa")
let timer=null;
timer=setInterval(function(){
	if(t==-180){
		aaa.style.top=0+"px";
		t=-36;
	}
	move(aaa,{
		top:t
	})
	t-=36;
},1000)
$("#aaa").hover(function(){
	clearInterval(timer);
	$(this).find("a").css("color","#fff")
},function(){
	$(this).find("a").css("color","#b19f7b")
	timer=setInterval(function(){
	if(t==-180){
		aaa.style.top=0+"px";
		t=-36;
	}
	move(aaa,{
		top:t
	})
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
