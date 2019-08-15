
$(document).ready(function (){

    $('.ct-caidan').hover(//顶部菜单栏
        function(){
            $('.xiala').slideDown(500);
        },
        function(){
            $('.xiala').css('display','none');
        }
    )

    $('.ct-search').hover(function(){//鼠标移上搜索框变大
        $('.text').css({'border':'2px solid #ccc','border-right':'none','border-radius':' 17px 0 0 17px '});
        $('.search').css({'border':'2px solid #ccc','border-left':'none','border-radius':' 0 17px 17px 0'});
    },function(){
        $('.ct-search input'). css({'border':'none'}) ;
    })

    
    $('.ct-search input').eq(0).focus(function(){
            $('.lianxiang').css('display','block')
            $('.ct-search div').remove();   
        })
    $('.ct-search input').eq(0).blur(function(){
        $('.lianxiang').css('display','none')
        $('.ct-search').append('<div><span>nova 5 Pro</span><span>荣耀20</span></div>')
        })
    $('.lianxiang p').each(function(index,target){
        $(target).mouseover(function(){
            $('.lianxiang p').css('background','#fff') 
            $(this).css('background','#ccc')
        })    
    })

     


    //放大镜
    $('.ct-big').mouseenter(function(){
        $('.ct-mask').css('display','block');
        $('.ct-Big').css('display','block');
        $('.ct-big').mousemove(function(e){
            var l = e.pageX-$('.ct-big').offset().left-117.5;
            var t = e.pageY-$('.ct-big').offset().top-117.5;
            if(l<=0){
            l=0;   
            }
            if(l>=225){
            l=225;  
            }
            if(t<=0){
            t=0;  
            }
            if(t>=225){
            t=225;
            }
            $('.ct-mask').css({'left':l+'px','top':t+'px'})
            $('.ct-Big img').css({'left':-2*l+'px','top':-2*t+'px'}) 
        })
    })

    $('.ct-mask').mouseout(function(){
        $('.ct-mask').css('display','none');
        $('.ct-Big').css('display','none');
    })

    //轮播图
    var ct1=0;
    $('.ct-prve').click(//左翻
        function(){
            if(ct1==0){
            }else{
            ct1--;
            console.log(ct1)
            $('.ct-lunbo ul').animate({'left':parseInt($('.ct-lunbo ul').css('left'))+74+'px'} ,200,'linear');   
            }   
        }
    )
    $('.ct-next').click(//右翻
        function(){
            if(ct1==2){
                }else{
                    ct1++;
                $('.ct-lunbo ul').animate({'left':parseInt($('.ct-lunbo ul').css('left'))-74+'px'} ,200,'linear');

            }   
        }
    )

    //放大镜处，鼠标滑过小图标切换大图标
    $('.ct-lunbofirst').css('border','1px solid red');//默认显示第一个小图边框标红
    $('.ct-lunbo li img').each(function(index,item){
        $(this).hover(function(){   
        $('.ct-big img').attr('src',$(item).attr('src'));//大图与轮播图同步
        $('.ct-Big img').attr('src',$(item).attr('src'))//放大镜图片与大图同步
        $('.ct-lunbo li').css('border','none');   
        $(this).parent().css('border','1px solid red');
        })
            
    })

    //放大镜旁边的选参数   
    var ctversion = $('.ct-version1 .ct-first').text();//存放手机型号
    var ctmatch = $('.ct-version2 .ct-first').text();//存放配置
    var ctcolor = $('.ct-color .ct-first').text();//存放手机颜色
    var ctnumber = $('.ct-number').text();//存放数量
    $('.ct-first').css('border','1px solid red');//放大镜旁边的选项框默认选中第一个
    $('.ct-color li').each(function(index,target){//点击切换颜色
        $(target).click(function(){
            $('.ct-color li').css('border-color','#ccc')
            $('.ct-color li').eq(index).css('border-color','#ca151d')
            $('.ct-lunbo ul li').css('border','none')
            $('.ct-lunbofirst').css('border-color','#ca151d')//切换了颜色后默认第一个小图标红
            ctcolor =  $('.ct-color li').eq(index).text();//重新获取颜色
            ctdata();
            $.ajax({
                type:'get',
                url:'data/tobig.json',
                dataType:'json',
                cache:false,
                success:function(json){ 
                    console.log(json)
                    $('.ct-big img').attr('src',json[index][0]);
                    for(var i = 0;i < 7;i ++){
                    $('.ct-lunbo ul li img').eq(i).attr('src',json[index][i])
                    }
                }
            })
        })
    })


    $('.ct-version1 li').each(function(index,target){//点击了型号切换后获取手机型号
        $(target).click(function(){
            $('.ct-version1 li').css('border-color','#ccc');
            $('.ct-version1 li').eq(index).css('border-color','#ca151d');
            ctversion= $('.ct-version1 li').eq(index).text();
            ctdata();
        })
    })

    $('.ct-count .jia').click(function(){
        ctnumber++;
        console.log(ctnumber);
        $('.ct-number').text(ctnumber);
    })
    $('.ct-count .jian').click(function(){
        if(ctnumber > 1){
            ctnumber--;
            console.log(ctnumber);
            $('.ct-number').text(ctnumber);
        }
    })

    $('.ct-version2 li').each(function(index,target){
        $(target).click(function(){
            $('.ct-version2 li').css('border-color','#ccc');
            $('.ct-version2 li').eq(index).css('border-color','#ca151d');
            ctmatch = $('.ct-version2 li').eq(index).text();
            ctdata();
        })
    })

    $('.ct-version3 li').each(function(index,target){
        $(target).click(function(){
            $('.ct-version3 li').css('border-color','#ccc')
            $('.ct-version3 li').eq(index).css('border-color','#ca151d')
        })
    })



    $('.ct-recommend li').each(function(index,target){
        $(this).click(function(){
            $('.ct-recommend li').css('color','#3a3a3a')
            $(target).css('color','#ca151d')
        })
    })


    function ctdata(){
        $('.ct-xiangqing1').text(ctcolor + ' / ' + ctversion + ' / ' + ctmatch)
       $('#pro-name').text('HUAWEI nova 4 '+ctversion+' 自拍极点全面屏 '+ctmatch+' （'+ctcolor+'·星耀版）');
    }


    //中间导航，需要固定在头部
    $(window).scroll(function(){
        if($(document).scrollTop() > 1100){//滑动到1000px时导航栏固定在头部
        　　$(".ct-miaodian").addClass('ct-miaodian1')
        　　$('.ct-miaodian-main').css({'padding':'12px 0 11px'});
            $('.ct-addtocar2').css('display','block')
        }else{
        　　$(".ct-miaodian").removeClass('ct-miaodian1')
        　　$('.ct-miaodian-main').css({'padding':'35px 0 34px'});
            $('.ct-addtocar2').css('display','none')　　　
        }
    });      


     //搭配翻页
    $('.ct-zuofan,.ct-youfan').hover(
        function(){
        $(this).css('background','#3a3a3a')
        },
        function(){
        $(this).css('background','#ccc')
        }
    )

    $('.ct-zuofan').click(
        function(){ 
        var fanyeleft=parseInt($('.ct-fanye-u ul').css('left'));
        if(fanyeleft){
            $('.ct-fanye-u ul').css('left','0')   
        }
    })
  
   $('.ct-youfan').click(
       function(){ 
          var fanyeleft=parseInt($('.ct-fanye-u ul').css('left'));
          if(fanyeleft==0){
              $('.ct-fanye-u ul').css('left','-754px')   
          }
    })   

    $.ajax({//规格参数，售后服务的数据获取
        type:'get',
        url:"data/ct-size.json",
        dataType:'json',
        success:function (json){
        var span=json.right.span;
        var p=json.right.p;
        var chaoduan=json.aftersize1;
        var duan=json.aftersize2.duan;
        var chang=json.aftersize2.chang;
        for(var i=0,len=span.length;i<len;i++){ 
        $('<li><p><span class="span"></span><span>'+span[i]+'</span><i>'+p[i]+'</i></p></li>').appendTo('.ct-sizeright1')
        }
        for(var j=0,jlen=chaoduan.length;j<jlen;j++){
            $('.ct-aftersale1').append('<li><p><span class="span"></span><i class="ct-chaoduan">'+chaoduan[j]+'</i></p></li>')
        }
        for(var k=0,klen=duan.length;k<klen;k++){
            $('.ct-aftersale2').append('<li><p><span class="span"></span>'+duan[k]+'</p></li>')
        }
        for(var l = 0, len = chang.length;l < len;l ++){
            $('.ct-aftersale2').after('<p>'+chang[l]+'</p>')
        }
        }
    });


    //购物车数据上传
var result = null
$.ajax({
    type:'get',
    url:'data/commodity.json',
    dataType:'json',
    cache:false, //不使用缓存
    success:function (json){
        result = json;
    }
});
//localStorage.clear();
var ctindex=parseInt(localStorage.getItem('com_index'));
$('.ct-shopingcar').click(function(){
        var ctcar = new Car();
        var ctlist = ctcar.getCar();
        if(ctcar.distingush(result[ctindex].code)){
            ctlist[ctcar.distingush(result[ctindex].code)-1].number += Number(ctnumber);
            localStorage.setItem('cartlist',JSON.stringify(ctlist));
        }else{
            var ctcalculate = Number(result[ctindex].number) + Number(ctnumber);
            result[ctindex].number = ctcalculate;
            result[ctindex].description=$('#pro-name').text();
            ctcar.addToCar(result[ctindex]);
        }
    });


    function ctdata(){
    $('.ct-xiangqing1').text(ctcolor + ' / ' + ctversion + ' / ' + ctmatch)
    $('#pro-name').text('HUAWEI nova 4 '+ctversion+' 自拍极点全面屏 '+ctmatch+' （'+ctcolor+'·星耀版）');
    }
})




























        


