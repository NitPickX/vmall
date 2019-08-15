			window.onload=function(){
			var toLeft = document.getElementById("toLeft")
			var toRight = document.getElementById("toRight")
			var nav = document.getElementById("banner-nav-list")
			var imgList = document.getElementById("img-list")
			var banner = document.getElementById("banner")
			var arr = document.getElementById("arr")
			var nLi = nav.children
			
			var timer = setInterval(autoplay,1000)
			var index = 0;
			function autoplay(){
				if(index == 8){
					index = 1;
					imgList.style.left = 0
				}else{
					index++
				}
				for(var i = 0; i < nLi.length; i++){
					nLi[i].className = "";
					
				}
				nLi[index == 8 ? 0 : index].className = "active";
				animate(imgList,{left:-1300*index},10)
			}
		
			for(let i = 0; i < nLi.length; i++){
				nLi[i].onmouseover = function(){
					 index = i;
					for(var j = 0; j < nLi.length; j++){
						nLi[j].className = "";
					}
					nLi[index].className = "active";
					animate(imgList,{left:-1300*index},10)
				}
			}
			}
