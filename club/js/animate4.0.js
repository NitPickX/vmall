function animate(ele,attr,target,speedTime){
	//attr=opacity
	//0-1 将透明度扩大100倍来做运动
	
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var current = 0;
		if(attr == "opacity"){
			current = param(ele,attr) * 100;
		}else{
			current = Math.ceil(parseFloat(param(ele,attr)));
		}
		var speed = (target - current)/10;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(target == current){
			clearInterval(ele.timer);
		}else{
			if(attr == "opacity"){
				//透明度赋值不带单位
				ele.style[attr] = (current + speed)/100;
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}
	},speedTime);
}

//通过对应的属性获取对应属性的样式值
function param(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}