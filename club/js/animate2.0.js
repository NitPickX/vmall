//缓冲运动
var timer = null;
function animater(ele,target,speedTime){
	clearInterval(timer);
	timer = setInterval(function(){
		//speed是一个不变的值，所有是一个匀速运动
		//缓冲运动，speed应该是一个同大到小的值的变化
		//var speed = target - ele.offsetLeft > 0 ? 5 : -5;
		var speed = (target - ele.offsetLeft)/10;//这个值是一个由大到小变化的值
		//ele.offsetLeft.会把最后几步的值的0.7去掉，left的值加不上去。到达 不了目标值 
		//解决这个问题，对小数向上取整，让0.变成1的值增加
		//speed = Math.ceil(speed);//当speed为负数小数时，向上取整得到的结果为0。所以向左走时是达不到目标值，因此要向下取整
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		
		
		console.log(target - ele.offsetLeft,speed,ele.offsetLeft);
		//if(Math.abs(target - ele.offsetLeft) < 5){//结束条件要发生变化，因为最后赋值是以1为单位增加的，无论目标值是多少，都会顺利到达 目标值
			//强制到达 目标位置
			//ele.style.left = target + "px";
		if(target == ele.offsetLeft){
			clearInterval(timer);
		}else{
			ele.style.left = ele.offsetLeft + speed + "px";
		}
	},speedTime);
}