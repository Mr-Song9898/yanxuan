$("#map-ren img").hover(function(){
	$(this).css("transform","scale(1.1)")
},function(){
	$(this).css("transform","scale(1)")
})

$("#map-xian img:not('.xian-cont1 img')").hover(function(){
	$(this).css("transform","scale(1.1)")
},function(){
	$(this).css("transform","scale(1)")
})
