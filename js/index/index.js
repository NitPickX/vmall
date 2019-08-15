require.config({
    paths: {
        'jquery':"jquery-1.8.3.min",
        'banner':'banner',
        'page':'paging',
        'shopCart':'car'
    }
})

require(['jquery','banner','page','shopCart'],function($,obj1,obj2,car){
    $(function(){
        //localStorage.clear();

        /* 同步购物车功能：
        *       在没有商品添加进购物车时，顶部导航栏购物车鼠标移入显示的内容为空
        *       在添加了商品进购物车之后，
        *           顶部导航栏和页面右侧悬浮导航同步购物车内的商品数量；
        *           顶部导航栏鼠标移入显示的内容为购物车内的内容
        * */
       var empty = $('.empty');//空车显示的信息
       var comList = $('.com_list');//购物车商品内容
       var count = $('.count');
       var list = car.getCar();
       var num = $('.num');//导航栏购物车旁边的商品数量
        if(list.length != 0){//判断本地存储购物车内是否有商品 有
            console.log(list);
            empty.css('display','none');
            comList.css('display','block');
            count.css('display','block');
            num.eq(1).css('display','block');
            var listLi = $('.com_list li').detach();
            var totalP = $('.count #count');
            
            for(var i=0,len=list.length; i<len; i++){
                var new_item = listLi.clone(true);
                var liChild = new_item.children();
                var price = new_item.find('.price');
                var number = new_item.find('.number');//
                liChild.eq(1).children().attr('src',list[i].imgurl.substr(list[i].imgurl.indexOf('i')));
                liChild.eq(2).children().html(list[i].description);
                price.html('￥' + list[i].price);
                number.html(list[i].number);
                comList.prepend(new_item);
            }
            totalP.html('￥' + car.getTotalPrice());
            num.html(car.getTotalNumber());
            liChild.eq(0).toggle(
                function(){
                    $(this).removeClass('icon-xuanze').addClass('icon-xuanze1');
                },
                function(){
                    $(this).removeClass('icon-xuanze1').addClass('icon-xuanze');
                }
            )
            
            
        }else{
            empty.css('display','block');
            comList.css('display','none');
            count.css('display','none');
            num.eq(1).css('display','none');
        }





        var closeTopBanner = $('#close_top');//顶部广告的关闭按钮
        var topBanner = $('.top');//顶部广告区域
        var txt = $('#txt');//搜索栏输入框
        var tips = $('.tips');//输入框提示
        var sinfo = $('.search_info');//点击输入框，其下方显示的信息
        var sHistory = $('.search_history');//搜索记录
        var clearHis = $('.search_history p span');//搜索记录里面的清除记录按钮
        var uHistory = $('.search_history ul');//搜索记录里的列表
        var liHistory = $('.search_history ul li');//列表项
        var btn = $('#btn');//搜索按钮
        var form = $('.j_form');//整个form
        var hisFlag = 0;//搜索记录标志位，0代表没有搜索过或者清空了，1代表有历史记录
        /*顶部广告关闭按钮 */
        closeTopBanner.click(function(){
            topBanner.css('display','none');
        })
/*头部logo导航栏输入框提示文字显示隐藏事件 */
        txt.focus(function(){
            txt.css('outline','none');//去掉输入框获得焦点时存在的默认蓝色边框
            tips.css('display','none');//隐藏输入框内的提示搜索任务
            sinfo.css('display','block');//显示热门搜索
            
            //获取本地存储的搜索记录，并添加到.search_history里面显示出来
            var sHstr = localStorage.getItem('searchHis');//
            console.log(sHstr);
            if(sHstr == null){
                var sHjson = [];
            }else{
                var sHjson = JSON.parse(sHstr);
            }
            for(var i=0,len=sHjson.length;i<len;i++){
                var newLi = liHistory.clone(true);
                newLi.children().html(sHjson[i]);
                uHistory.prepend(newLi);
                hisFlag = 1;
            }
            var hotSearch = $('.search_hot li a');
            hotSearch.on('click',function(){
                sHjson.push($(this).html());
                localStorage.setItem('searchHis',JSON.stringify(sHjson)); 
                hisFlag = 1;
            })
            if(hisFlag){//判断是否有搜索历史记录，如果有则显示
                sHistory.css('display','block');//搜索栏的历史记录显示出来
            }
        })
       
        btn.focus(function(){
            btn.css('outline','none');
            tips.css('display','block');
            sinfo.css('display','none');
        })
        /* 点击清除按钮，清除历史记录 */
        clearHis.on('click',function(){
            hisFlag = 0;//标志位置0
            uHistory.html('');//清除历史记录列表
            localStorage.removeItem('searchHis');//清除本地存储的数据
        })

/* 表单的提交事件：判断输入框是否有内容决定页面是否跳转 */
        form.submit(function(){
            var tVal = txt.val();
            if(!tVal){
                return false;
            }else{
                return true;//无法从这里做其它的事情
            }
        })
        
/**轮播图效果 */
        var imgList_1 = $('.banner1 .image li');//图片集合
        var dotList_1 = $('.banner1 .dots li');//banner下方的小圆点集合
        var imgList_2 = $('.ad .image li');
        var dotList_2 = $('.ad .dots li');
        var mask_1 = $('.banner .fake');//通过鼠标移入移出控制banner自动播放的区域
        var imgLeft = $('#left');//方向键 向左
        var imgRight = $('#right');//方向键  向右
        var mask_2 = $('.ad');
        var banner1 = new obj1.Banner(imgList_1,dotList_1,mask_1,imgLeft,imgRight);
        var banner2 = new obj1.Banner(imgList_2,dotList_2,mask_2);
        banner1.init();
        banner2.init();

        /**用户信息栏上的公告轮播 */
        var notice = $('.notice ul')
        var li_index = 0;//公告栏li索引
        var timerN = setInterval(function(){
            li_index ++;
            if(li_index == 6){
                notice.css('top','0');
                li_index = 1;
            }
            notice.animate({'top':-42*li_index+'px'},"normal","swing");
        },3000)

/* 鼠标点击左右键实现翻页效果 */
        var houseDire = $('.content_house .arr');//获取方向键的父级，通过事件委托控制左右翻页
        var watchDire = $('.content_watch .arr');
        var partsDire = $('.content_parts .arr');
        var qualityDire = $('.content_quality .arr');
        var acessDire = $('.content_acess .arr');
        var watch = new obj2.Page(watchDire);
        var house = new obj2.Page(houseDire);
        var parts = new obj2.Page(partsDire);
        var quality = new obj2.Page(qualityDire);
        var acess = new obj2.Page(acessDire);
        house.stroke();
        watch.stroke(); 
        parts.stroke();
        quality.stroke();
        acess.stroke();



/* 大banner区左侧的分类栏鼠标移上相关显示 */
        var ulNav = $('.classify');//banner左侧的分类列表 ul
        var leftNav = $('.classify .j_li');//ul里面的列表项
        var lnContent = $('.classify_content');//分类的具体内容，鼠标移上才显示
        var container = $('.j_class');//包裹分类列表和分类具体内容的大div 只要鼠标移除这个区域 lnContent隐藏
        
        var result = null;
        $.ajax({
            url:'data/left.json',
            type:'get',
            dataType:'json',
            success:function(json){
                result = json;
                leftNav.mouseenter(function(){
                    var ln_index = $(this).index();//获取当前对象的下标
                    $(this).addClass('mouseCom');
                    var str = '<ul class="fl">';
                   // var that = $(this);
                    var images = result[ln_index];//获取与下标对应的json对象（存放当前分类的所有图片URL description）
                    ulNav.css('border-radius','10px 0px 10px 10px');//鼠标移入ul，ul右上角的圆角边方角
                    leftNav.eq(ln_index-1).children().children().eq(0).css('border-bottom','none');//当前对象的前一个li里面不显示border-bottom
                    for(var j=0,len=images.img.length;j<len;j++){//遍历当前分类的商品信息
                        str += '<li><a href="##"><img src="img/index/list/'+images.img[j]+'" alt="产品分类">'+images.description[j]+'</a></li>';//字符串拼接
                        if(j%4 == 3){//每个ul只有四个li
                            str += '</ul><ul class="fl">';
                        }
                    }
                    str += '<li class="searchMore fl"><a href="##"><span></span>查看更多</a></li></ul>';//最后一个li的内容一定是 查看更多
                    
                    lnContent.html(str);
                    lnContent.css('display','block');
                    container.mouseleave(function(){//鼠标移出分类区域隐藏
                        str = '';
                        lnContent.html(str);
                        lnContent.css('display','none');
                        ulNav.css('border-radius','10px');
                    })
                    $(this).mouseleave(function(){
                        that = $(this);
                        $(this).removeClass('mouseCom');
                        leftNav.eq(ln_index-1).children().children().eq(0).css('border-bottom','1px solid rgb(196, 193, 193)');//当前对象的前一个li里面不显示border-bottom
                        lnContent.mouseenter(function(){
                            that.addClass('mouseCom');
                            leftNav.eq(that.index()-1).children().children().eq(0).css('border-bottom','none');//当前对象的前一个li里面不显示border-bottom
                            lnContent.mouseleave(function(){
                                that.removeClass('mouseCom');
                                leftNav.eq(ln_index-1).children().children().eq(0).css('border-bottom','1px solid rgb(196, 193, 193)');//当前对象的前一个li里面不显示border-bottom
                            })
                        })
                    })
                    
                })
            } 
        }) 
        

/* 页面底部友情链接处实现翻页效果 */
        var span = $('.foot_left').children().eq(5).children().eq(0);
        var liLeft = $('.liLeft');
        var liRight = $('.liRight');
        var ele = $('.turn');
        var liIndex = 0;
        
        liLeft.css({'color':'#eee','cursor':'not-allowed'});
        span.click(function(e){
            if(e.target.className.indexOf('liLeft') != -1){
                liIndex --;
                if(liIndex <= 0){
                    liLeft.css({'color':'#eee','cursor':'not-allowed'});
                    liIndex = 0;
                }else{
                    ele.animate({'left':-153*liIndex},'slow');
                    liRight.css({'color':'#777','cursor':'pointer'});
                }
                
            }else if(e.target.className.indexOf('liRight') != -1){
                liIndex ++;
                if(liIndex >= 9){
                    liIndex = 8;
                    liRight.css({'color':'#eee','cursor':'not-allowed'});
                }else{
                    liLeft.css({'color':'#777','cursor':'pointer'});
                    ele.animate({'left':-153*liIndex},'slow');
                }
                
            }
        })
    /* 右侧悬浮导航 返回顶部*/
        var toTop = $('.toTop');
        var doc = $(document);
        doc.scroll(function(){
            if(doc.scrollTop() >= 1000){
                toTop.css('display','list-item');
            }else{
                toTop.css('display','none');
            }
        })

    /* 点击商品进入详情页  获得点击商品的下标 详情页根据下标获得并改变商品信息*/
        var commodity = $('.content_phone ol li');
        commodity.click(function(){
            var com_index = $(this).index();//读取点击商品的下标
            console.log(com_index);
            localStorage.setItem('com_index',''+com_index);//存入数据
        })


        
    })
    

    
    
})
