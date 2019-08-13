require.config({
	baseUrl: 'js',
	paths: {
		"jquery": "jquery-2.1.4.min",
		"header": "header",
		"footer": "footer",
	}
});

require(['header', 'jquery', 'footer'], function(header, $, footer) {
	header($('#head'));
	footer($('#foot'));



	var HTML1 = '';
	var HTML2 = '';
	var HTML3 = '';
	var HTML4 = '';
	var HTML5 = '';
	var HTML6 = '';
	var indexBan = 0;
	//动态请求数据
	$.ajax('', {
		url: 'data/hw.json',
		dataType: 'json', //服务器返回json格式数据
		success: function(data) {
			//q请求banner图上的数据
			$.each(data[0].more, function(index, item) {
				HTML1 +=
					`<li index = '${item.name}'><h2><a href="#">${item.title}</a></h2><p><a href="">${item.list1}</a><a href="">${item.list2}</a></p></li>`;
				$('#banner .bannerLeftNav').html(HTML1);

			})

			// 鼠标移上时,右边导航内容改变
			$('#banner .bannerLeftNav li').mousemove(function() {
				$(this).css('background', 'white');
				$(this).find('p').css('border', '0').parent().prev().find('p').css('border', '0');
				$('#banner .bannerRightNav').css('display', 'block');
				indexBan = $(this).attr('index');
				$('#banner .bannerRightNav .box1').html('');
				$('#banner .bannerRightNav .box2').html('');
				$('#banner .bannerRightNav .box3').html('');
				$('#banner .bannerRightNav .box4').html('');
				$.each(data[0].more, function(ind, item) {

					if (item.name == indexBan) {
						$.each(item.prop, function(ind, ite) {
							HTML2 += `<a><img src="${ite.imgurl}" alt=""><span>${ite.title}</span></a>`
							if ((ind) % 4 == 0 || ind == 0) {
								HTML2 = '';
								HTML2 += `<a><img src="${ite.imgurl}" alt=""><span>${ite.title}</span></a>`
							} else if (ind <= 3) {
								$('#banner .bannerRightNav .box1').html(HTML2)
							} else if (ind > 3 && ind <= 7) {
								$('#banner .bannerRightNav .box2').html(HTML2)
							} else if (ind > 7 && ind <= 11) {
								$('#banner .bannerRightNav .box3').html(HTML2)
							} else if (ind > 11 && ind <= 15) {
								$('#banner .bannerRightNav .box3').html(HTML2)
							};

						});
					};
				});
			});

			//鼠标移除时
			$('#banner .bannerLeftNav li').mouseout(function() {
				$(this).css('background', '#f2f3f1');
				$(this).find('p').css('borderBottom', '1px solid #ccc').parent().prev().find('p').css('borderBottom','1px solid #ccc');
				$(this).find('p').last().css('borderBottom',0);
				$('#banner .bannerRightNav').css('display', 'none');
			});

			//获取indContHead数据
			$.each(data[1].more, function(index, item) {
				HTML3 += `<a href=""><img src="${item.imgurl}" alt=""></a>`;
				$('#indexContent .indContHead').html(HTML3);
			});

			//获取热销单品的数据
			$.each(data[2].more, function(index, item) {
				if (index > 0) {
					HTML4 +=
						`<a href=""><h1>${item.xin}</h1><img src="${item.imgurl}" alt=""><h2${item.title}</h2><h3>${item.desc}</h3><h4>${item.price}</h4></a>`;
					$('#indexContent .hotProducts .products .rightBox').html(HTML4);
				};

			});
			var h1Html = $('#indexContent .hotProducts .products .rightBox').find('h1');
			h1Html.each(function(inxdex,item){
				if($(item).html() == 'undefined'){
					$(this).html('').css('background','#f9f9f9')
				}else if($(item).html() == '爆款'){
					$(this).css('background','red')
				}
				else if($(item).html() == '直降'){
					$(this).css('background','#ff6a6e')
				}
				 
			});
			
			//第二个banner图上的数据请求
			for(var i=0;i<2;i++){
				$.each(data[3].more,function(index,item){
					// HTML5 +=`<div class="swiper-slide"><a href=""><h3><img src="image/imgs/xm14.png" alt=""><p>稀缺货源，享3期免息</p></h3><h4>华为平板</h4><h5>￥3999</h5></a></div>`;
					if(index+1%5==0 || index==0){
						HTML5 = '';
					 HTML5 +=`<a href=""><h3><img src="${item.imgurl}" alt=""><p>${item.title}</p></h3><h4>${item.desc}</h4><h5>${item.price}</h5></a>`;
					}else{
						HTML5 +=`<a href=""><h3><img src="${item.imgurl}" alt=""><p>${item.title}</p></h3><h4>${item.desc}</h4><h5>${item.price}</h5></a>`;
						$('#indexBanner2 .swiper-wrapper .swiper-slide').eq(i).html(HTML5);
					};
				});
			};
			 
			//手机栏请求数据 
			$.each(data[4].more,function(index,item){
				if(index ==0){
					HTML6 +=`<a href=""><img src="${item.imgurl}" index="${item.code}"></a>`;
				}else{
					HTML6 +=`<a href="" index="${item.code}"><h5><span>${item.xin}</span></h5><img src="${item.imgurl}"  ><h2>${item.title}</h2><h3>${item.desc}</h3><h4>${item.price}</h4></a>`;
				}
			});
			$('#indexContent .phone .phoProducts').html(HTML6);
			var h5Html = $('#indexContent .phone .phoProducts').find('span');
			h5Html.each(function(inxdex,item){
				if($(item).html() == 'undefined'){
					$(this).html('').css('background','#f9f9f9')
				}
				 
			});
		},
	});
	
	
	//点击进入详情页
	$('#indexContent .phoProducts').on('click','a',function(){
		console.log(location.href)
		location.href = 'list.html?'+$(this).attr('index');
		return false;
	})
	
	//登陆成功后login2显示
	if(localStorage.getItem('usNa')){
		$('#head .rightBox li a').eq(0).html(JSON.parse(localStorage.getItem('usNa'))).css('color','red');
		$('.login2 p span').html("");
		$('.login2 p a').eq(0).html(JSON.parse(localStorage.getItem('usNa'))).css('color','red');
	}
	 
	//首页购物车 
	var charCats2 =  JSON.parse(localStorage.getItem('shopCar'));
	$('.colorCat a em').html(charCats2.length).css('color','red');
});

//index页面轮播图1
var mySwiper = new Swiper('#banner', {
	direction: 'horizontal', // 垂直切换选项
	loop: true, // 循环模式选项
	autoplay: {
		disableOnInteraction: true,
	},
	effect: 'fade',
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
		clickable: true,

	},

	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	
});

//index页面轮播图2
var mySwiper2 = new Swiper('#indexBanner2', {
	direction: 'horizontal', // 水平切换选

	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	
});


// 公告上下轮播
var mySwiper3 = new Swiper('#notBanner', {
	direction: 'vertical', // 垂直切换选项
	loop: true, // 循环模式选项
	autoplay: {
		disableOnInteraction: true,
	},
});
