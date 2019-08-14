var nav1=document.getElementById("nav-lii");
var cloud=document.getElementById("cloud");
var navvv=nav1.children;
nav1.onmouseover=function(e){
	nav1.children[3].style.background="none";
	cloud.style.display="block";
	var e=e||event;
	var target=e.target||e.srcElement;
	if(target.nodeName=="LI"){
		var l=target.offsetLeft;
		animater(cloud,l,20);
		
	}
	
}
var position=0;
	nav.onmousedown=function(e){
	var e=e || event;
	var target=e.target || e.srcElement;
	if(target.nodeName=="LI"){
		nav1.children[3].style.color="black";
		for(var i=0;i<navvv.length;i++){
			navvv[i].style.color="black";
		}
		
		
		position=target.offsetLeft;
		target.style.color="red";
	}
	}
	
	nav.onmouseout=function(e){
	var e=e || event;
	var target=e.target || e.srcElement;
	if(target.nodeName=="LI"){
		animater(cloud,position,20);
	}
	}
window.onload=function(){

	
	var bt=document.getElementById("tit-nav");
	var itemaction=document.getElementById("itemaction");
	bt.onmouseover=function(){
		itemaction.style.display="block";
	}
	itemaction.onmouseleave=function(){
		itemaction.style.display="none";
	}
//	bt.onmouseleave=function(){
//		itemaction.style.display="none";
//	}
	
//	轮播
	var banitem=document.getElementById("banitem");
	var banList=banitem.children;
	var uu=document.getElementById("uu");
	var uLi=uu.children;
	var index=0;
	setInterval(autoPlay,3000);
	function autoPlay(){
		if(index==4){
			index=0;
		}
		else{
			index++;
		}
		for(var i=0;i<banList.length;i++){
			animate(banList[i],"opacity",0,10);
			uLi[i].className="";	
		}
			animate(banList[index],"opacity",100,10);
			uLi[index].className="current";
	}
	
//	导航栏固定头部
var nav=document.getElementById("nav");
window.onscroll=function(){
	var stop=document.documentElement.scrollTop||document.body.scrollTop;
	if(stop>172){
		nav.style.position="fixed";
		nav.style.left=150+"px";
		nav.style.top=0;
		nav.style.background="#CCCCCC";
		nav.style.opacity="0.6";
	
		
	}else{
		
		nav.style.position="static";
		nav.style.background="white";
		nav.style.opacity="1";
	}
	}
//	选项卡
var nav1=document.getElementById("nav-lii");
var on=document.getElementById("on");
var content=document.getElementsByClassName("content");
var naitem=nav1.children;
	for(var i=0;i<naitem.length;i++){
	
		naitem[0].onclick=function(){
			
			content[1].style.display="block";
			content[0].style.display="none";
		}
		
		naitem[3].onclick=function(){
			
			content[0].style.display="block";
			content[1].style.display="none";
		}
		
		
		
			
	}
		
	
	
	
	
	
	
}
