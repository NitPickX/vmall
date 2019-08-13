$(function() {
    // 如果购物车本地缓存为空就创建一个
    var create_shopCar = function() {
        var value = localStorage.getItem('shopCar');
        var arr1;
        if (!value) {
            arr1 = [];
        } else {
            arr1 = JSON.parse(value);
        }
        localStorage.setItem('shopCar', JSON.stringify(arr1));
    };
    create_shopCar();
    var create_shopCar2 = function() {
        var value = localStorage.getItem('recycle_bin');
        var arr1;
        if (!value) {
            arr1 = [];
        } else {
            arr1 = JSON.parse(value);
        }
        localStorage.setItem('recycle_bin', JSON.stringify(arr1));
    };
    create_shopCar2();
    // 读取本地缓存购物车,渲染页面的封装函数
    var create_list = function() {
        var shopCar = JSON.parse(localStorage.getItem('shopCar'));
        let abc = "";
        for (let { url, name, price }
            of shopCar) {
            abc += `
            <div class="sc-pro-list">
    
                <label class=" sc-pro-ipt"><input type="checkbox" name="bike" class="a-check"/></label>
    
                <div class="img_hw">
                    <img src="${url}">
                </div>
    
                <div class="name_hw">
                <span>${name}</span>
                </div>
    
                <div class="srice_hw">
                <span>¥${price}</span>
                </div>
    
                <div class="srice_biaodan">
                    <div class="sc-pro_ipt_a">
                        <a href="javascript:;" class="ipt_a_s">+</a>
                        <a href="javascript:;" class="ipt_a_x">-</a>
                    </div>
                    <div class="hqu_val"><input type="text" value="1" class="val_hw"></div>
                </div>
                <div class="srice_xiaoji">
                <span>¥${price}</span>
                </div>
                
                <div class="srice_shanchu">
                <a>删除</a>
                </div>
                <div class="affirm">
                    <p>您确认要删除该商品吗？</p>
                    <div><span class='yes'>是</span><span class='no'>否</span></div>
                    <i class='triangle'></i>
                </div> 
            </div>
            `
        }
        $(".qinfu").html(abc);
    };
    create_list();
    // 读取本地缓存回收站,渲染页面的封装函数
    var create_recycle = function() {
        var recycle_bin = JSON.parse(localStorage.getItem('recycle_bin'));
        let abcd = "";
        for (let { name, price }
            of recycle_bin) {
            abcd += `
                    <ul>
                        <li>${name}</li>
                        <li>¥${price}</li>
                        <li>
                            <i class='repurchase'>重新购买</i>
                            <i class='delete-recycle'>删除</i>
                        </li>
                    </ul>
                    `
        }
        $(".recycle-bin-body").html(abcd);
    };
    create_recycle();

    // 当没有商品时,显示去逛逛的盒子
    var unpurchased = function() {
        if ($('.qinfu').children().length == 0) {
            $('.lab_hw input').prop("checked", false);
            $('.xuanze_hw input').prop("checked", false);
            $('.sc-list').hide();
            $('.unpurchased').show();
        } else {
            $('.sc-list').show();
            $('.unpurchased').hide();
        }
    };
    unpurchased();
    var unpurchased1 = function() {
        if ($('.recycle-bin-body').children().length == 0) {
            $('.recycle-bin').hide();
        } else {
            $('.recycle-bin').show();

        }
    };
    unpurchased1();
    // 结账栏
    function getqian() {
        var inp_a = $('<input type="checkbox" name="bike" class="inp_h"/>');
        var inp_a1 = $('<span>全选</span>');
        $('.xuanze_hw').append(inp_a)
        $('.xuanze_hw').append(inp_a1)
        var quanshan = $('<span>删除</span>');
        $('.quanshan_hw').append(quanshan)
        var bnt = $('<span>立即结账</span>');
        $('.gwc_bnt').append(bnt)
        var zji_hw = $('<span class="money_gw">总计：<em>¥00.00</em></span>');
        $('.jiage_hw').append(zji_hw)
        var xz_hw = $('<span  class="shang_gw">已选择<em>0</em>件商品</span>');
        $('.jiage_hw').append(xz_hw)
    }
    getqian();
    // 全选按钮
    $('.inp_hw ,.inp_h').change(function() {
        $(".inp_hw , .a-check ,.inp_h").prop("checked", ($(this).prop("checked")))
        if ($(this).prop("checked")) {
            $('.sc-pro-list').addClass("pinkpink")
        } else {
            $('.sc-pro-list').removeClass("pinkpink")
        }
        getSum()
    });
    // 单选按钮
    $(".qinfu").on('change', '.a-check', function() {
        if ($('.a-check:checked').length === $('.a-check').length) {
            $(".inp_hw ,.inp_h").prop("checked", true)

        } else {
            $(".inp_hw ,.inp_h").prop("checked", false)

        }
        if ($(this).prop("checked")) {
            $(this).parents(".sc-pro-list").addClass("pinkpink")
        } else {
            $(this).parents(".sc-pro-list").removeClass("pinkpink")
        }
        getSum()
    });
    // 点击加按钮
    $(".qinfu").on('click', ".ipt_a_s", function() {
        var n = $(this).parents(".sc-pro_ipt_a").siblings(".hqu_val").children().val()
        n++
        var p = $(this).parents(".srice_biaodan").siblings(".srice_hw").children().html()
        var p = p.substr(1)
        var jieguo_gw = parseFloat(n * p).toFixed()
        $(this).parents(".sc-pro_ipt_a").siblings(".hqu_val").children().val(parseInt(n))
        $(this).parents(".srice_biaodan").siblings(".srice_xiaoji").children().html("￥" + jieguo_gw)
        getSum()
    });
    // 点击减按钮
    $(".qinfu").on('click', ".ipt_a_x", function() {
        var n = $(this).parents(".sc-pro_ipt_a").siblings(".hqu_val").children().val()
        if (n == 1) {
            false
            return
        }
        n--
        var p = $(this).parents(".srice_biaodan").siblings(".srice_hw").children().html()
        var p = p.substr(1)
        var jieguo_gw = parseFloat(n * p).toFixed()
        $(this).parents(".sc-pro_ipt_a").siblings(".hqu_val").children().val(parseInt(n))
        $(this).parents(".srice_biaodan").siblings(".srice_xiaoji").children().html("￥" + jieguo_gw)
        getSum()
    });
    // 修改文本框的值
    $(".qinfu").on('change', ".val_hw", function() {
        var n = $(this).val()
        if (n < 1) {
            ''
            return
        } else {
            var p = $(this).parents(".srice_biaodan").siblings(".srice_hw").children().html()
            var p = p.substr(1)
            var jieguo_gw = parseFloat(n * p).toFixed()
            $(this).val(parseInt(n))
            $(this).parents(".srice_biaodan").siblings(".srice_xiaoji").children().html("￥" + jieguo_gw)
        }
        getSum()
    });
    // 修改总计和总商品
    function getSum() {
        var c = 0
        var d = 0
        $(".a-check:checked").parents(".sc-pro-list").find(".val_hw").each(function(i, ele) {
            c += parseInt($(ele).val())
        })
        $(".shang_gw em").text(c)
        $(".a-check:checked").parents(".sc-pro-list").find(".srice_xiaoji span").each(function(i, ele) {
            d += parseFloat($(ele).html().substr(1))
        })
        $(".money_gw em").text("￥" + d)
    };
    getSum();


    // 将本地缓存回收站的数据渲染到页面的封装函数
    // 点删除就弹出确认框
    $(".qinfu").on('click', '.srice_shanchu', function() {
        $(this).siblings('.affirm').fadeIn();
    });


    // 点是就删除商品,并且在本地缓存删除,并且将删除的商品添加到回收站
    $(".qinfu").on('click', '.yes', function() {
        var shopCar = JSON.parse(localStorage.getItem("shopCar"));
        var recycle_bin = JSON.parse(localStorage.getItem('recycle_bin'));
        var index = $(this).parents('.sc-pro-list').index();
        recycle_bin.push(shopCar[index]);
        shopCar.splice(index, 1);
        saveDate(shopCar);
        saveDate1(recycle_bin);
        $(this).parents(".sc-pro-list").remove();
        getSum();
        unpurchased();
        create_recycle();
        $('.recycle-bin').show();
    });


    // 点否就关闭确认框
    $(".qinfu").on('click', '.no', function() {
        $(this).parents('.affirm').fadeOut();
    });


    // 全选删除
    $(".quanshan_hw span").click(function() {
        // 给所有商品列表加上索引号方便操作
        for (i = 0; i < $('.qinfu').children().length; i++) {
            $('.qinfu').children().eq(i).attr("index", i);
        }
        // 读取本地缓存数据
        var shopCar = JSON.parse(localStorage.getItem("shopCar"));
        var recycle_bin = JSON.parse(localStorage.getItem('recycle_bin'));
        // 遍历被选中的商品,修改数组
        $(".a-check:checked").parents(".sc-pro-list").each(function(i, ele) {
            recycle_bin.push(shopCar[$(ele).attr('index')]);
            shopCar.splice($(ele).attr('index'), 1);
        });
        // 存储到本地缓存
        saveDate1(recycle_bin);
        saveDate(shopCar);
        // 删除被选中的商品
        $(".a-check:checked").parents(".sc-pro-list").remove();
        getSum();
        unpurchased();
        create_recycle();
        $('.recycle-bin').show();

    });

    // 删除回收站的商品
    $('.recycle-bin-body').on('click', '.delete-recycle', function() {
        var recycle_bin = JSON.parse(localStorage.getItem('recycle_bin'));
        var index = $(this).parents('ul').index();
        recycle_bin.splice(index, 1);
        saveDate1(recycle_bin);
        $(this).parents("ul").remove();
        unpurchased1();
    })

    // 重新添加商品
    $('.recycle-bin-body').on('click', '.repurchase', function() {
        var shopCar = JSON.parse(localStorage.getItem("shopCar"));
        var recycle_bin = JSON.parse(localStorage.getItem('recycle_bin'));
        var index = $(this).parents('ul').index();
        shopCar.push(recycle_bin[index]);
        recycle_bin.splice(index, 1);
        saveDate1(recycle_bin);
        saveDate(shopCar);
        create_recycle();
        $(this).parents("ul").remove();
        unpurchased1();
        create_list();
        getSum();
        unpurchased();
    })

    // 将数据存储到本地缓存购物车和回收站的封装函数
    function saveDate(data) {
        localStorage.setItem("shopCar", JSON.stringify(data));
    };

    function saveDate1(data) {
        localStorage.setItem("recycle_bin", JSON.stringify(data));
    };


    // 键盘事件
    // $('.val_hw').on("keydown", function(ele) {
    //     if()
    // });
    $('.val_hw').on("blur", function(ele) {
        // var reg = /^[0-9]*$/;
        // var val = document.querySelectorAll('.val_hw');
        // console.log($(this));
        console.log(11);

    });
})