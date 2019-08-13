var listHref = location.search.substr(1);
var shopCart = null;
$.ajax({

	url: 'data/hw.json',
	dataType: 'json',

	success: function(data) {
		var HTML1 = '';
		var HTML2 = '';
		var HTML3 = '';
		$.each(data[4].more, function(index, item) {
			if (listHref == item.code) {
				shopCart = {
					'name': item.title,
					'url': item.imgurl,
					'price': item.price.substr(1),
					'comment': item.code
				};
				HTML1 = `<img src="${item.imgurl}" />`;
				$('.h_tpreview').html(HTML1);
				$.each(item.prop, function(ind, ite) {
					HTML2 += `<img src="${ite.imgs}" />`;
					$('.h_mpreview').html(HTML2)

				})

			}

		})

	}


})

//点击小图切换大图
$('.h_mpreview').on('click', 'img', function() {
	console.log(1)
	var HTML3 = $(this).attr('src');
	$('.h_tpreview').children('img').attr('src', HTML3)
	console.log(HTML3)

})

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

$('.h_property-buy-action').children().eq(0).click(function() {
	console.log(shopCart)
	create_shopCar();
	var datalist = JSON.parse(localStorage.getItem('shopCar'));
	datalist.push(shopCart);
	console.log(datalist)
	localStorage.setItem('shopCar', JSON.stringify(datalist));
	console.log(localStorage.getItem('shopCar'))
})
