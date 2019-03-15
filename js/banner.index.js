$("#banner").banner({
	items:$("#banner .imgbox").children("a"),		
	left:$("#banner .prev"),				
	right:$("#banner .next"),				
	list:$("#banner .list").children("li"),	
	autoPlay:true,					
	delayTime:3000,				
	timer:500						
})