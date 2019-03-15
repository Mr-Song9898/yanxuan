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