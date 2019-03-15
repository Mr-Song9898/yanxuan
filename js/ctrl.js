//格式化日期:
function myDate(){
	var d = new Date();
	var y = d.getFullYear();
	var m1 = d.getMonth();
	var mydate = d.getDate();
	var day = d.getDay()
	var h = d.getHours()
	var m2 = d.getMinutes()
	var s = d.getSeconds()
	switch(day){
		case 0:day = "星期日";break;
		case 1:day = "星期一";break;
		case 2:day = "星期二";break;
		case 3:day = "星期三";break;
		case 4:day = "星期四";break;
		case 5:day = "星期五";break;
		case 6:day = "星期六";break;
	}
	return y+"年"+zero(m1+1)+"月"+zero(mydate)+"日 "+day+" "+zero(h)+":"+zero(m2)+":"+zero(s);
}

//补零:
function zero(n){
	if(n<10 || n.length<2){
		return "0"+n;
	}else{
		return n;
	}
}

//获取非行内样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

//阻止事件冒泡
function stopBubble(a){
	if(a.stopPropagation){
		a.stopPropagation()
	}else{
		a.cancelBubble = true;
	}
}

//阻止默认事件
function stopDefault(b){
	if(b.preventDefault){
		b.preventDefault()
	}else{
		b.returnValue = false;
	}
}

//事件监听的操作
var myEvent = {
	add:function(ele,myeve,fn){
		if(ele.addEventListener){
			ele.addEventListener(myeve,fn,false);
		}else if(ele.attachEvent){
			ele.attachEvent("on"+myeve,fn)
		}else{
			ele["on"+myeve] = fn;
		}
	},
	remove:function(ele,myeve,fn){
		if(ele.removeEventListener){
			ele.removeEventListener(myeve,fn)
		}else if(ele.detachEvent){
			ele.detachEvent("on"+myeve,fn)
		}else{
			ele["on"+myeve] = null;
		}
	}
}

//事件委托
function eventEnt(children,callback){
	return function(eve){
		var e = eve || window.event;
		var target = e.target || e.srcElement;
		for(var i=0;i<children.length;i++){
			if(children[i] == target){
				if(callback) callback.bind(target)();
			}
		}
	}
}

//设置cookie
function setCookie(key,value,num){
	var d = new Date();
	d.setDate(d.getDate()+num);
	document.cookie = key+"="+value+";expires="+d;
}
//删除cookie
function removeCookie(key){
	setCookie(key,123123,-1)
}
//获取cookie
function getCookie(key){
	var str = document.cookie;
	var arr = str.split("; ")
	for(var i=0;i<arr.length;i++){
		if(arr[i].split("=")[0] == key){
			return arr[i].split("=")[1];
		}
	}
	return null;
}
