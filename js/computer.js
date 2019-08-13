$(function() {
    // 商品列表
    let date = [
		{ url: 'image/upload/MagicBook.png', name: '荣耀MagicBook', price: 3999, comment: 14853 },
		{ url: 'image/upload/MagicBook_Pro.png', name: '荣耀 MagicBook Pro', price: 5499, comment: 0 },
		{ url: 'image/upload/HUAWEI_Mate_Book.png', name: 'HUAWEI MateBook X Pro', price: 7988, comment: 6010 },
		{ url: 'image/upload/HUAWEI MateBook.png', name: 'HUAWEI MateBook X Pro 2019 款', price: 8999, comment: 5893 },
		{ url: 'image/upload/HUAWEI_Mate2019.png', name: 'HUAWEI MateBook E 2019 款', price: 8999, comment: 5893 },
		{ url: 'image/upload/HUAWEI Mate 14.png', name: 'HUAWEI MateBook 14', price: 5999, comment: 9146 },
		{ url: 'image/upload/HUAWEI Mate13.png', name: 'HUAWEI MateBook 13', price: 5699, comment: 20442 },
		{ url: 'image/upload/MagicBook.png', name: '荣耀MagicBook', price: 4299, comment: 25586 },
		{ url: 'image/upload/MagicBook.png', name: '荣耀MagicBook 笔记本电脑', price: 3999, comment: 14853 },
		{ url: 'image/upload/HUAWEI_D.png', name: 'HUAWEI MateBook D', price: 5488, comment: 13061 },
		{ url: 'image/upload/HUAWEI_E.png', name: 'HUAWEI MateBook E', price: 4288, comment: 2681 },
    ];
    //创建一个新数组
    var newdate = [];
    var create_newarr = function() {
        newdate.splice(0);
        for (i = 0; i < date.length; i++) {
            newdate.push(date[i]);
        }
    };
    create_newarr();
    // 在页面上创建出商品的封装函数
    var create_list = function(arr) {
        let html = "";
        for (let { url, name, price, comment }
            of arr) {
            html += `
                    <div>
                    <img src = "${url}">
                    <i>${name}</i> 
                    <span class = "price">¥${price}</span> 
                    <span class = "buy">加入购物车</span> 
                    <span class = "comment">${comment}人给了好评</span> 
                    </div>
                    `
        };
        $('article').html(html);
    }
    create_list(date);

    // 点击价格就进行排序
    // 价格
    var flag = true;
    $('.box_b ul li:eq(0)').click(function() {
        var temp = [];
        if (flag) {
            for (var i = 0; i <= newdate.length - 1; i++) {
                for (var j = 0; j < newdate.length - i - 1; j++) {
                    if (newdate[j].price < newdate[j + 1].price) {
                        temp = newdate[j];
                        newdate[j] = newdate[j + 1];
                        newdate[j + 1] = temp;
                    }
                }
            }
            $('article').empty();
            create_list(newdate);
            $(this).children('i').css('backgroundPosition', ' 0 -90px').parent().siblings().children('i').css('backgroundPosition', ' 0 -70px');
            flag = false;
        } else {
            for (var i = 0; i <= newdate.length - 1; i++) {
                for (var j = 0; j < newdate.length - i - 1; j++) {
                    if (newdate[j].price > newdate[j + 1].price) {
                        temp = newdate[j];
                        newdate[j] = newdate[j + 1];
                        newdate[j + 1] = temp;
                    }
                }
            }
            $('article').empty();
            create_list(newdate);
            $(this).children('i').css('backgroundPosition', ' 0 -110px').parent().siblings().children('i').css('backgroundPosition', ' 0 -70px');
            flag = true;
        }
    });
    //评论
    var flag1 = true;
    $('.box_b ul li:eq(1)').click(function() {
        var temp = [];
        if (flag1) {
            for (var i = 0; i <= newdate.length - 1; i++) {
                for (var j = 0; j < newdate.length - i - 1; j++) {
                    if (newdate[j].comment < newdate[j + 1].comment) {
                        temp = newdate[j];
                        newdate[j] = newdate[j + 1];
                        newdate[j + 1] = temp;
                    }
                }
            }
            $('article').empty();
            create_list(newdate);
            $(this).children('i').css('backgroundPosition', ' 0 -90px').parent().siblings().children('i').css('backgroundPosition', ' 0 -70px');
            flag1 = false;
        } else {
            for (var i = 0; i <= newdate.length - 1; i++) {
                for (var j = 0; j < newdate.length - i - 1; j++) {
                    if (newdate[j].comment > newdate[j + 1].comment) {
                        temp = newdate[j];
                        newdate[j] = newdate[j + 1];
                        newdate[j + 1] = temp;
                    }
                }
            }
            $('article').empty();
            create_list(newdate);
            $(this).children('i').css('backgroundPosition', ' 0 -110px').parent().siblings().children('i').css('backgroundPosition', ' 0 -70px');
            flag1 = true;
        }
    });
    // 类型
    // 全部
    $('.box_f ul li:eq(0)').click(function() {
        create_newarr();
        $('article').empty();
        create_list(newdate);
    });

    //荣耀
    $('.box_f ul li:eq(1)').click(function() {
        newdate.splice(0);
        for (i = 0; i < date.length; i++) {
            var type = date[i].type;
            if (type == 'honer') {
                newdate.push(date[i]);
            }
        }
        create_list(newdate);
    });
    // Mate
    $('.box_f ul li:eq(2)').click(function() {
        newdate.splice(0);
        for (i = 0; i < date.length; i++) {
            var type = date[i].type;
            if (type == 'Mate') {
                newdate.push(date[i]);
            }
        }
        create_list(newdate);
    });
    // nova
    $('.box_f ul li:eq(3)').click(function() {
        newdate.splice(0);
        for (i = 0; i < date.length; i++) {
            var type = date[i].type;
            if (type == 'nova') {
                newdate.push(date[i]);
            }
        }
        create_list(newdate);
    });
    // 点击加入购物车按钮就弹出框
    $('article').on('click', "div .buy", function() {
        $('.buy-mask').show();
        $('.buy-pop-up').show();
    });
    $('.buy-pop-up-body').children().eq(0).click(function() {
        $('.buy-mask').hide();
        $('.buy-pop-up').hide();
    });


    //商品列表动画效果
    $('article').on('mouseenter', 'div', function() {
        $(this).children('.buy').stop().slideDown(300);
        $(this).children('.comment').stop().fadeOut(300);
    })

    $('article').on('mouseleave', 'div', function() {
        $(this).children('.buy').stop().slideUp(300);
        $(this).children('.comment').stop().fadeIn(300);

    })

    // 将选中的商品加入到本地缓存
    $('article').on('click', "div .buy", function() {
        var value = localStorage.getItem('shopCar');
        var arr;
        if (!value) {
            arr = [];
        } else {
            arr = JSON.parse(value);
        }
        arr.push(newdate[$(this).parent('div').index()]);
        localStorage.setItem('shopCar', JSON.stringify(arr));
    });
    // 先创建一个本地缓存回收站

    var create_recycle_bin = function() {
        var value = localStorage.getItem('recycle_bin');
        var arr1;
        if (!value) {
            arr1 = [];
        } else {
            arr1 = JSON.parse(value);
        }
        localStorage.setItem('recycle_bin', JSON.stringify(arr1));
    };
    create_recycle_bin();
})