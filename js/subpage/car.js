$(function (){
    // {"title":"HUAWEI nova 3i 1","imgurl":"https://res.vmallres.com/pimages//product/6901443254712/428_428_1542768008007mp.png","price":"¥2199","dlce":"103698","code":"abc1"},
    $.ajax({
        url: 'data/good.json',
        type: 'get',
        dataType: 'json',
        success: function (json) {
			//console.log(json)
				var results1 = '';
			for(var i = 0; i <20;i++){
				results1 += '<div class="list_k1" code="'+json[i].code+'" ><dl><img src="'+json[i].imgurl+'"><dt><a href="details.html">'+json[i].title +'</a></dt><dd >'+json[i].price +'</dd></dl><div class="list_g1"><p><a href="details.html">'+json[i].bat+'</a></p><span>'+json[i].dlce+'</span></div></div>';		
			}
            $('.list').html(results1);
            var results2 = '';
			for(var j = 20;j < 40;j++){
                //console.log(j)
				results2 += '<div class="list_k1" code="'+json[j].code+'" ><dl><img src="'+json[j].imgurl+'"><dt><a href="details.html">'+json[j].title +'</a></dt><dd >'+json[j].price +'</dd></dl><div class="list_g1"><p><a href="details.html">'+json[j].bat+'</a></p><span>'+json[j].dlce+'</span></div></div>';		
			}
            $('.list2').html(results2);

			var results3 = '';
			for(var j = 10;j < 30;j++){
               // console.log(j)
				results3 += '<div class="list_k1" code="'+json[j].code+'" ><dl><img src="'+json[j].imgurl+'"><dt><a href="details.html">'+json[j].title +'</a></dt><dd >'+json[j].price +'</dd></dl><div class="list_g1"><p><a href="details.html">'+json[j].bat+'</a></p><span>'+json[j].dlce+'</span></div></div>';		
			}
            $('.list3').html(results3);

            
            
//             
//             $.each(json,function (index,val) {
//                 results += '<div class="list_k1" code="'+val.code+'" ><dl><img src="'+val.imgurl+'"><dt><a href="">'+val.title +'</a></dt><dd >'+val.price +'</dd></dl><div class="list_g1"><p><a href="#">'+val.bat+'</a></p><span>'+val.dlce+'</span></div></div>';
//             })
//             
        }
    })
var mun1 = document.getElementsByClassName('mun1');
var  index = 0;
    $('.mun1').click(function(){
        
    })
})

