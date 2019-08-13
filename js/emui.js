
$(".dflink").click(function(){
    $(".header-container").slideToggle();
    $(".dflink i").toggleClass("icon-shangjiantou");
    $(".dflink i").toggleClass("icon-xiajiantou");
})

// 数字递增运动

  



// 导航
$('.lgli').click(function(){
    var alls = $(this).parent().parent().next().children().eq($(this).index());
    // var display = alls.css('display')
    alls.slideToggle();
    
    alls.siblings().hide();
    
    
    
    // 反转导航箭头
    $(this).children('i').toggleClass("icon-xiaojiantouS");
    if( ($(this).children('i').hasClass("icon-xiaojiantouS") == true)){
        $(this).siblings().children("i").attr("class", "iconfont icon-xiaojiantouX")
    }
   
        
    

    // 导航运动
    var ous = alls.find(".phones");
    ous.animate({
        top:50
    },{
        queue: false,//加入队列
        duration: 1000,
        easing: 'easeInOutCubic',
    })
});
 
//  删除
 $('.shan').click(function(){
     $(this).parent().parent().hide();
 })

 //通过$(this)找到点击的DOM元素
//通过parent(),next()这些选择器找到要实现显示隐藏的元素的父元素
//通过children().eq($(this).index())来用索引进行控制，$(this).index()就是你点击元素的索引，只要把元素一一对应就好了
//通过jquery的.show()方法显示对应的元素
//通过.sibling()找到同级的兄弟元素，进行隐藏



// 跟随浏览器位置变化事件
$(window).scroll(function(){
    var topp = $(document).scrollTop();
    console.log(topp);
    // if(topp>100){
    //     $("emulnav").addClass("position","fixed");
    // }
    if(topp>=100){
		//如果大于32，说明“1”即将消失，此时“2”需要向上补位，位于顶部。增加一个css属性：向上外边距，-32px(数值代表“1”的高度);
		$(".emulnav").addClass("emfix");
	}
	if(topp<100){
		//当鼠标向下滑动不足32或者向上往后滑动时，需要将“2"从顶部还原到原位置，以便“1”能够显示出来。
		$(".emulnav").removeClass("emfix");
	}


    // 图1
    if(topp > 300){
        $(".maintom").animate({
            top:530
        },{
            queue: false,//加入队列
            duration: 1000,
        })
    }
    if(topp >900){
        $(".li1").animate({
            left:100,
        },{
            queue: false,//加入队列
            duration: 1500,
        });
        $(".li2").animate({
            left:300,
        },{
            queue: false,//加入队列
            duration: 1000,
        });
        $(".li4").animate({
            left:738,
        },{
            queue: false,//加入队列
            duration: 1000,
        });
        $(".li5").animate({
            left:940,
        },{
            queue: false,//加入队列
            duration: 1500,
        });
    }
    if(topp > 1550){
        $(".circleChart1").circleChart({
            size: 200,
            value: 24,
            textSize:60,
            textWeight:900,
            color: "#a694ff",
            backgroundColor: "#e6e6e6",
            text: 0,
            startAngle:75,//调整角度
            onDraw: function(el, circle) {
                circle.text(Math.round(circle.value) + "%");
            }
        });
        $(".circleChart2").circleChart({
            size: 200,
            value: 44,
            textSize:60,
            textWeight:900,
            color: "#097cff",
            backgroundColor: "#e6e6e6",
            text: 0,
            startAngle:75,//调整角度
            onDraw: function(el, circle) {
                circle.text(Math.round(circle.value) + "%");
            }
        });
        $(".circleChart3").circleChart({
            size: 200,
            value: 60,
            textSize:60,
            textWeight:900,
            color: "#5bd8b8",
            backgroundColor: "#e6e6e6",
            text: 0,
            startAngle:75,//调整角度
            onDraw: function(el, circle) {
                circle.text(Math.round(circle.value) + "%");
            }
        });
    }
    // 条形进度条
    if(topp >= 2400){
        $(".filldiv1").animate({
            width:600,
        },{
            queue: false,//加入队列
            duration: 2000,
        });
        
        $(".filldiv2").animate({
            width:400,
        },{
            queue: false,//加入队列
            duration: 2000,
        });
         
     
            var obj={
              el:$(".up1"),
              max:60,
              start:0//增加开始的初始值
              
            }
            // var obj2={
            //   el:$(".up2"),
            //   max:1000,
            //   end:100//减少到最小的值
            // }
            up(obj);
            // down(obj2)
          
    }
    
   

})

// 点击视频显示隐藏
$(".voia").click(function(){
    $(".vios").show();
})
$(".shans").click(function(){
    $(".vios").hide();
})


$(".shipins").click(function(){
    $(".vioss").show();
})
$(".shanss").click(function(){
    $(".vioss").hide();
})




// 调整进度条数字变化增加或减少

  function up(obj){
    var item=obj.el;
    var num=obj.max;
    var start=obj.start;
    time2=setInterval(function(){
      start++;
      if(start>num){
        start=num;
        clearInterval(time2);
      }
      item.text(start)
    },10)
  }
  function down(obj){
    var item=obj.el;
    var num=obj.max;
    var min=obj.end;
    time1=setInterval(function(){
      num--;
      if(num<min){
        num=min;
        clearInterval(time1)
      }
      item.text(num)
    },2000)
  }



// 一键剪辑，疾速分享

$('.vioss').click(function(){
    $('.videose').trigger('play');

    $(".zhuimg").hide();
})

// 底部显示二维码
$('.ssxli').mouseover(function(){
    $('.ewm1').css("display","block")
});
$('.ssxli').mouseout(function(){
    $('.ewm1').css("display","none")
})