$(".show-title-p ul li:not('.quan')").hover(function(){
	$(this).find("a").css("color","#b4a078")
},function(){
	$(this).find("a").css("color","#333")
})
$(".show-title-p ul li:first-child a").css("color","#b4a078")

var url="http://localhost/project/php/show.php";
for(var i=1;i<=7;i++){
	(function(i){
		$.ajax({
			url:url,
			data:{
				status:"register",
				userID:i,
			},
			dataType:"json",
			success:function(res){
				fn(res,i);
			}
		})
	})(i)
}

function fn(res,num){
	var str="";
	for(var i=0;i<res.length;i++){
		str+=`<li>
				<a href="#"><img src="${res[i].src}"/></a>
				<h4><a href="#">${res[i].msg1}</a></h4>
				<b>${res[i].price}</b>
				<span>${res[i].msg2}</span>
			</li>`
	}
	$(".cont"+num).html(str);
}
