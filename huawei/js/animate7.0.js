/*
 * 7.0多属性运动
 * 
 */

//function animate(ele,attr,target,timeSpeed){
function animate(ele,param,timeSpeed){//接收以对象形式传递的属性和目标值
	/*
	 * var param = {
			opacity : 20,
			width : 500,
			height : 300,
			left : 400,
			top : 200
		}
	 */
	
	
	//attr = opacity
	//target = 20;
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		//以下代码是做一个属性的运动
		//如果要多属性同时运动
		//每一个属性同时要执行以下代码。
		//对属性进行遍历
		//如何 做到对属性进行遍历 
		//在调用这个运动函数时，把动画的所有的属性同时传递进来。
		//属性不同，目标值也会不能。
		//在遍历属性的同时还得获取对应属性的目标值。
		//属性和对应的目标值以对象的方式传递进来，就可以做到遍历 属性。
		
		//定义一个控制器flag，用于判断所有属性是否都到达 了目标值
		var flag = true;//所有属性都到达 了目标值
		for(var attr in param){
			//attr对应是是param的键，键正好就是属性，目标值就是param[attr]
			var current = 0;
			if(attr == "opacity"){
				current = getStyle(ele,attr) * 100;
			}else{
				//在获取width和height的时候getStyle(ele,attr)得不到一个整数
				//parseInt时会把小数去掉，导致达不到目标值
				//这里要对其做一个向上取整的处理。
				//current = parseInt(getStyle(ele,attr));
				current = Math.ceil(parseFloat(getStyle(ele,attr)));
			}
			//var speed = (target - current)/10;
			var speed = (param[attr] - current)/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			
			//if(current == target){
			//if(current == param[attr]){
			if(current != param[attr]){//未到达 目标值
				//目标值不同。总会有最快达到目标值 的属性，
				//一旦执行了这里的代码，其它属性的运动也被停止了，
				//导致了有很多属性无法达到目标值
				//如何解决？
				//解决办法是判断所有属性是否都到达 了目标值，只有都到达 了目标值 后才来做清除定时器的处理。
				//定义一个控制器flag，用于判断所有属性是否都到达 了目标值
				//当所有属性都到达 了目标值，flag为true,否则为false
				//清除定时器的操作要在flag为true的时候清除
				flag = false;
				//clearInterval(ele.timer);
			}//else{//不需要在else中执行下面的代码
				if(attr == "opacity"){
					ele.style[attr] = (current + speed) / 100;
				}else if(attr == "zIndex"){
					ele.style[attr] = param[attr];
				}else{
					ele.style[attr] = current + speed + "px";
				}
				//ele.style[attr] = parseInt(getStyle(ele,attr)) + speed + "px";
			//}
		}
		//当所有属性遍历完毕后，只要flag还保持为true不变，说明了所有属性都到达 了目标值
		if(flag){//true
			//所有属性都到达 了目标值,清除定时器
			clearInterval(ele.timer);
		}
	},timeSpeed);
}
function getStyle(ele,attr){//获取的样式值是一个字符串
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];

}