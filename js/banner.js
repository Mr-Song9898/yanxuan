$(".map-xin-cont").banner({
	items:$(".map-xin-cont .xin-cont"),		
	left:$(".map-xin-cont .prev"),				
	right:$(".map-xin-cont .next"),				
//	list:$(".map-xin-cont .list").children("li"),	
	autoPlay:true,					
	delayTime:3000,				
	timer:500						
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