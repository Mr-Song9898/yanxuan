function ajaxGet(url){
	var p = new Promise(function(success){
		if(XMLHttpRequest){
			var ajax = new XMLHttpRequest();
		}else{
			var ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		ajax.open("GET",url,true)
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				success(ajax.responseText)
			}
		}
		ajax.send(null);
	})
	return p;
}

function ajaxPost(url,data){
	if(data){
		var str = "";
		for(var attr in data){
			str += attr + "=" + data[attr] + "&";
		}
		data = str.slice(0,str.length-1)
	}else{
		data = null
	}
	var p = new Promise(function(success){
		if(XMLHttpRequest){
			var ajax = new XMLHttpRequest();
		}else{
			var ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		ajax.open("POST",url,true);
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				success(ajax.responseText)
			}
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send(data)
	})
	return p;
}