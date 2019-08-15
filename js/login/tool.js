//获取随机整数
function randomInt(min,max) {
    return Math.round( Math.random()*(max-min) )+min;
}

// 随机颜色
function randomColor() {
    var col = '#';
    var strArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];//0-15
    for (var i = 0; i < 6; i++){
        col += strArr[randomInt(0,15)];
    }
    return col;
}

// 通过类名获取元素
function byClass(cla) {
    var tags = document.all ? document.all : document.getElementsByTagName('*');//兼容
    var arr = [];
    for (var i = 0; i < tags.length; i++){
        if (tags[i].className == cla) {// 'abc red'?
            arr.push(tags[i]);
        }
    }
    return arr;
}

// 获取某个元素
function $(selector) {
    return document.querySelector(selector);
}

// 获取元素样式
function getStyle(obj,attr) {
    if (obj.currentStyle) {//IE678
        return obj.currentStyle[attr];
    } else {//非IE678
        return getComputedStyle(obj,null)[attr];
    }
}

//获取元素到最外层的offsetLeft/offsetTop值
function offset(dom) {
    var l = 0, t = 0;
    while(dom){
        l += dom.offsetLeft;
        t += dom.offsetTop;
        dom = dom.parentNode;
        if (dom == document.body) {
            return {Left: l, Top: t};
        }
    }
}

// X和Y轴缓冲运动
function move(dom,target,callback) {
    dom.timerFire = null;
    clearInterval(dom.timerFire);
    dom.timerFire = setInterval(function () {
        // x轴运动
        var speedX = (target.left - dom.offsetLeft) / 10;//持续变化的速度
        speedX = speedX > 0 ? Math.ceil(speedX) : Math.floor(speedX);//对速度取整，避免数据丢失
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(dom.offsetLeft - target.left) <= Math.abs(speedX)) {
            // clearInterval(dom.timerFire);
            dom.style.left = target.left + 'px';//终点
        } else {
            dom.style.left = dom.offsetLeft + speedX + 'px';
        }

        // y轴运动
        var speedY = (target.top - dom.offsetTop) / 10;//持续变化的速度
        speedY = speedY > 0 ? Math.ceil(speedY) : Math.floor(speedY);//对速度取整，避免数据丢失
        // 剩余的运动量 < 每次所走的运动量
        if (Math.abs(dom.offsetTop - target.top) <= Math.abs(speedY)) {
            clearInterval(dom.timerFire);
            dom.style.top = target.top + 'px';//终点
            callback();//回调函数
        } else {
            dom.style.top = dom.offsetTop + speedY + 'px';
        }
    },20);
}

// 设置cookie
function setCookie(key,val,day) {
    if (day) {
        var d = new Date();
        d.setDate(d.getDate() + day);
        // escape  编码
        document.cookie = key + '=' + escape(val) + '; expires=' + d;
    } else {
        document.cookie = key + '=' + escape(val);
    }
}

// 获取cookie
function getCookie(key) {
    var arr1 = document.cookie.split('; ');
    for (var i = 0; i < arr1.length; i++){
        var arr2 = arr1[i].split('=');
        if (arr2[0] == key) {
            // unescape  解码
            return unescape(arr2[1]);
        }
    }
    return '';
}

// 删除cookie
function removeCookie(key) {
    setCookie(key,'123',-2);//设置为过期
}

