//content商品
// localStorage.clear();
	var car = new Car();
	var cartlist = car.getCar();
	var icon = document.getElementById('icon');
	console.log(cartlist);



	//选中
	$('#checkAll').click(function () {
		if (this.checked == true) {
			$('input[type="checkbox"]').checkAll();
		} else {
			$('input[type="checkbox"]').checkNoAll();
		}

	});
	$('#checkAlls').click(function () {
		if (this.checked == true) {
			$('input[type="checkbox"]').checkAll();
		} else {
			$('input[type="checkbox"]').checkNoAll();
		}

	});
	
	/* 根据购物车内容创建商品栏 */
	var shopCar = $('#shopTableCountent');
	var shopItem = $('.shopCarItem');
	if(cartlist.length != 0){
		shopItem.css('display','flex');
		var Item = shopItem.detach();
		for(var i=0,len=cartlist.length; i<len; i++){
			var newItem = Item.clone(true);
			var child = newItem.children();
			child.eq(0).children().eq(1).attr('src',cartlist[i].imgurl.substr(cartlist[i].imgurl.indexOf('i')));
			child.eq(0).children().eq(2).html(cartlist[i].description);
			child.eq(1).find('.shoptwo').html('￥' + cartlist[i].price);
			child.eq(1).find('.discount').html('￥' + cartlist[i].discount);
			child.eq(1).find('.shopthree').val(cartlist[i].number);
			child.find('.button1').attr('index',i);
			child.find('.button2').attr('index',i);
			if(cartlist[i].number > 1){
				child.eq(1).find('.button1').eq(i).css({'cursor':'pointer','color':'#717171'})
			}
			child.eq(1).find('#price').html('￥' + parseFloat( cartlist[i].price )* parseInt( cartlist[i].number ));
			child.eq(1).find('#discount').html('￥' + parseFloat( cartlist[i].discount )* parseInt( cartlist[i].number ));
			shopCar.prepend(newItem);
		}
		//获取数量栏input的value值
		
		var button1 = $('.button1');
		var button2 = $('.button2');
		button1.click(function(){
			var shopthrees=Number($(this).next().val());
			if(shopthrees<=1){
				shopthrees=1;
				$(".button1").css({'cursor':'no-drop'})	
			}else{
				$(".shopthree").val(--shopthrees);
			}
			console.log($(this).attr('index'),shopthrees);
			var item_cut = $(this).attr('index');
			cartlist[item_cut].number = shopthrees;//更改购物车内的数据
			$(this).parent().parent().find('#price').html('￥'+ parseFloat(cartlist[item_cut].price )* shopthrees);
			$(this).parent().parent().find('#discount').html('￥'+ parseFloat( cartlist[item_cut].discount )* parseInt( cartlist[item_cut].number ));
			localStorage.setItem('cartlist',JSON.stringify(cartlist));
			$('#totalPrice').html(car.getTotalPrice());
		})
	
		button2.click(function(){
			var shopthrees=Number($(this).prev().val());
			var item_add = $(this).attr('index');//获取点击的是哪一个商品
			$(".shopthree").val(++shopthrees);
			//console.log($(this).attr('index'),shopthrees);
			$(".button1").css({'cursor':'pointer','color':'#717171'})
			cartlist[item_add].number = shopthrees;//更改购物车内的数据
			$(this).parent().parent().find('#price').html('￥'+ parseFloat( cartlist[item_add].price )* parseInt( cartlist[item_add].number ));
			$(this).parent().parent().find('#discount').html('￥'+ parseFloat( cartlist[item_add].discount )* parseInt( cartlist[item_add].number ));
			localStorage.setItem('cartlist',JSON.stringify(cartlist));//更新本地存储的数据
			$('#totalPrice').html(car.getTotalPrice());
		})
		
		var del = $('#delete');
		var req = null;
		del.click(function(){
			var that = $(this);
			var req = $(this).next();
			req.css('display','block');
			var del_index = $(this).parent().find('.button1').index();
			$('#yes').click(function(){
				$(this).parent().css('display','none');
				car.delGoods(cartlist[del_index].code);
				$(this).parent().parent().parent().remove();
			})
			$('#no').click(function(){
				$(this).parent().css('display','none');
			})
		})

	}else{
		shopCar.css('display','none');
	}

	
	
	//点击结算
	var index;
	$(".settle").click(function () {
		//loading层
		layer.load(1, {
			shade: [0.9, '#ccc'] //0.1透明度的白色背景
		});//loading层
		setTimeout(function () {
			layer.closeAll('loading');
		}, 1000);
		$(location).attr('href', 'http://10.36.140.39/VMALL-login/vmall-register/html/login.html');
	});
	function checkitem(e){
		console.log($('input[type="checkbox"]')[2].checked)

	}
	//商品推荐
	//Body4
		$(".next2").click(function () {
		var last2 = $(".last2");
		$(".B4-container").prepend(last2);
		$(".carrousel-floor").eq(4).addClass("last2").siblings().removeClass("last2");
		$(".carrousel-floor").eq(0).addClass("first2").siblings().removeClass("first2");
	})
	$(".prev2").click(function () {
		var first2 = $(".first2");
		$(".B4-container").append(first2);
		$(".carrousel-floor").eq(4).addClass("last2").siblings().removeClass("last2");
		$(".carrousel-floor").eq(0).addClass("first2").siblings().removeClass("first2");
	})
	//小图移上变大变小效果
	$(".img2").mouseover(function () {
		animate(this, { "height": 220, "width": 250 }, 40)
	})
	$(".img2").mouseout(function () {
		animate(this, { "height": 160, "width": 160 }, 40)
	})
	
	function btn3(i) {
		if (car.delGoods(i)) {
			location.reload();
		} else {
			alert('删除失败');
		}
	}
	function btn4(i) {
		$(".requery").hide()
	}

	//得到总价格
	document.getElementById('totalPrice').innerText = car.getTotalPrice();
	document.getElementById('totalNumber').innerText = car.getTotalNumber();

	
	


	
	//删除购物车商品
	
	/* $('#delete').click(function(){
		
	}) */ 