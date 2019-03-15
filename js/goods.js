$(".goods-left ul li").on("mouseenter",function(){
	$(".imgBig img").stop().hide().eq($(this).index()).fadeIn(300);
})

