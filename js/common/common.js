$(function(){
    var closeTopBanner = $('#close_top');
    var topNanner = $('.top');
    var txt = $('#txt');
    var tips = $('.tips');

    /*顶部广告关闭按钮 */
    closeTopBanner.click(function(){
        topNanner.css('display','none');
    })
    /*头部logo导航栏输入框提示文字显示隐藏事件 */
    txt.focus(function(){
        txt.css('outline','none');
        tips.css('display','none');
    })
    txt.blur(function(){
        tips.css('display','block');
    })

    /* 页面底部翻页 */
       var span = $('.foot_left').children().eq(5).children().eq(0);
        var liLeft = $('.liLeft');
        var liRight = $('.liRight');
        var ele = $('.turn');
        var li_index = 0;
        
        liLeft.css({'color':'#eee','cursor':'not-allowed'});
        span.click(function(e){
            
            if(e.target.className.indexOf('liLeft') != -1){
                li_index --;
                if(li_index <= 0){
                    liLeft.css({'color':'#eee','cursor':'not-allowed'});
                    li_index = 0;
                }else{
                    ele.animate({'left':-153*li_index},'slow');
                    liRight.css({'color':'#777','cursor':'pointer'});
                }
                
            }else if(e.target.className.indexOf('liRight') != -1){
                li_index ++;
                if(li_index >= 9){
                    li_index = 9;
                    liRight.css({'color':'#eee','cursor':'not-allowed'});
                }else{
                    liLeft.css({'color':'#777','cursor':'pointer'});
                    ele.animate({'left':-153*li_index},'slow');
                }
                
            }
        })
    /* 微信图标鼠标移上显示二维码 */
    
    /* 右侧悬浮导航 返回顶部*/
        var toTop = $('.toTop');
        var doc = $(document);
        doc.scroll(function(){
            console.log(doc.scrollTop())
            if(doc.scrollTop() >= 1000){
                toTop.css('display','list-item');
            }else{
                toTop.css('display','none');
            }
        })


    /* 同步购物车功能：
        *       在没有商品添加进购物车时，顶部导航栏购物车鼠标移入显示的内容为空
        *       在添加了商品进购物车之后，
        *           顶部导航栏和页面右侧悬浮导航同步购物车内的商品数量；
        *           顶部导航栏鼠标移入显示的内容为购物车内的内容
        * */
       var car = new Car();
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
        
})
