define(['jquery'],function ($){
    var HTML = '<div id=head><ul class="clearfix leftBox"><li><a href=#>首页</a><span></span></li><li><a href=#>华为官网</a><span></span></li><li><a href=#>荣耀官网</a><span></span></li><li><a href=#>花粉俱乐部</a><span></span></li><li><a href=#>V码（优购码）</a><span></span></li><li><a href=#>企业购</a><span></span></li><li><a href=#>Slect Region</a><span></span></li><li><a href=#>更多精彩<i class="iconfont icon-jiantouSha"></i></a></li></ul><ul class="clearfix rightBox"><li><a href=#>请登录</a><a href="regist.html">注册</a><span></span></li><li><a href=#>我的订单</a><span></span></li><li><a href=#>客户服务<i class="iconfont icon-jiantouSha"></i></a><span></span></li><li><a href=#>网站导航<i class="iconfont icon-jiantouSha"></i></a><span></span></li><li><a href=#>手机版<i class="iconfont icon-jiantouSha"></i></a><span></span></li><li class=colorCat><a href="payment.html"><i class="iconfont icon-gouwuche"></i>购物车(<em>0</em>)</a></li></ul><div class=pull-down-list1><a href="emui.html">EMUI</a> <a href=#>应用市场</a> <a href=#>华为终端云空间</a> <a href=#>开发者联盟</a></div><div class=pull-down-list2><a href=#>服务中心</a> <a href=#>联系客服</a></div><div class=pull-down-list3><div><p><i class="iconfont icon-shouye_changtai"></i></p><a href=#>商城首页</a></div><ul><li><h2>频道</h2><a href=#>华为专区</a> <a href=#>荣耀专区</a> <a href=#>全球购</a></li><li><h2>产品</h2><a href=#>手机</a> <a href=#>智能家居</a> <a href=#>平板&笔记本</a> <a href=#>通用配件</a> <a href=#>智能穿戴</a> <a href=#>专属配件</a></li><li><h2>增值服务</h2><a href=#>以旧换新</a> <a href=#>礼品包装</a> <a href=#>补购保障</a> <a href=#>一口价换电池</a></li><li><h2>会员</h2><a href=#>会员频道</a></li></ul></div><div class=pull-down-list4><div><img src=image/images/header1.jpg></div><div><img src=image/images/header2.jpg></div><div><img src=image/images/header3.jpg></div></div><div class=pull-down-list5><p><i class="iconfont icon-gouwuche"></i></p><h5>您的购物车是空的,赶紧选购吧</h5></div></div><div id=indexNav><div><a><img src=image/imgs/indexNav.jpg alt=华为商城 title=华为商城></a></div><ul class=clearfix><li><a>华为专区</a></li><li><a>荣耀专区</a></li><li><a>华为P30</a></li><li><a>华为20</a></li><li><a>Mate&nbsp;20 Pro</a></li><li><a>荣耀M20</a></li></ul><p><input type=text> <a>nova&nbsp;5&nbsp;Pro</a> <a>荣耀9X</a> <i class="iconfont icon-fangdajing"></i></p></div>';
    function setheader($ele){
		// js加载头部
        $ele.html(HTML);
		
		//头部下拉列表1显示隐藏
		$('#head .leftBox li:last').mousemove(function(){
			$('#head .pull-down-list1').css('display','block');
			$(this).css('background','white');
		})
		$('#head .leftBox li:last').mouseout(function(){
			$(this).css('background','#f9f9f9');
			$('#head .pull-down-list1').css('display','none');
			
		})
		$('#head .pull-down-list1').mousemove(function(){
			$(this).css('display','block');
		})
		$('#head .pull-down-list1').mouseout(function(){
			$(this).css('display','none');
		})
		//头部下拉列表2显示隐藏
		$('#head .rightBox li:nth-child(3)').mousemove(function(){
			$('#head .pull-down-list2').css('display','block');
			$(this).css('background','white')
		})
		$('#head .rightBox li:nth-child(3)').mouseout(function(){
			$('#head .pull-down-list2').css('display','none');
			$(this).css('background','#f9f9f9');
		})
		$('#head .pull-down-list2').mousemove(function(){
			$(this).css('display','block')
		})
		$('#head .pull-down-list2').mouseout(function(){
			$(this).css('display','none')
		})
		
		//登陆显示隐藏
		$('#head .rightBox li:nth-child(1)').children().eq(0).click(function(){
			$('.content').css('display','block')
		
		})
		
		//头部下拉列表3显示隐藏
		$('#head .rightBox li:nth-child(4)').mousemove(function(){
			$('#head .pull-down-list3').css('display','block');
			$(this).css('background','white')
		})
		$('#head .rightBox li:nth-child(4)').mouseout(function(){
			$('#head .pull-down-list3').css('display','none');
			$(this).css('background','#f9f9f9');
		})
		$('#head .pull-down-list3').mousemove(function(){
			$(this).css('display','block')
		})
		$('#head .pull-down-list3').mouseout(function(){
			$(this).css('display','none')
		})
		
		//头部下拉列表4显示隐藏
		$('#head .rightBox li:nth-child(5)').mousemove(function(){
			$('#head .pull-down-list4').css('display','block');
			$(this).css('background','white')
		})
		$('#head .rightBox li:nth-child(5)').mouseout(function(){
			$('#head .pull-down-list4').css('display','none');
			$(this).css('background','#f9f9f9');
		})
		$('#head .pull-down-list4').mousemove(function(){
			$(this).css('display','block')
		})
		$('#head .pull-down-list4').mouseout(function(){
			$(this).css('display','none')
		})
		
		//头部下拉列表5显示隐藏
		$('#head .rightBox li:nth-child(6)').mousemove(function(){
			$('#head .pull-down-list5').css('display','block');
			$(this).css('background','white')
		})
		$('#head .rightBox li:nth-child(6)').mouseout(function(){
			$('#head .pull-down-list5').css('display','none');
			$(this).css('background','#f9f9f9');
		})
		$('#head .pull-down-list5').mousemove(function(){
			$(this).css('display','block')
		})
		$('#head .pull-down-list5').mouseout(function(){
			$(this).css('display','none')
		})
		
		 
    }
    return setheader;
});