define(['jquery'], function($) {
	var HTML =
		'<div class=top><a href=#><img src=image/images/footer1.jpg><span>百强企业&nbsp;品质保证</span></a> <a href=#><img src=image/images/footer2.jpg> <span>7天退货&nbsp;15天包退</span></a> <a href=#><img src=image/images/footer3.jpg> <span>48元起免运费</span></a> <a href=#><img src=image/images/footer4.jpg><span>1000家维修网点&nbsp;全国联保</span></a></div><div class=center><ul class=clearfix><li><h3>购物相关</h3><h5><a href=#>购物指南</a></h5><h5><a href=#>配送方式</a></h5><h5><a href=#>配送方式</a></h5><h5><a href=#>常见问题</a></h5></li><li><h3>保修与退换货</h3><h5><a href=#>保修政策</a></h5><h5><a href=#>退换货政策</a></h5><h5><a href=#>退换货流程</a></h5><h5><a href=#>保修状态查询</a></h5><h5><a href=#>配件防伪查询</a></h5></li><li><h3>维修与技术支持</h3><h5><a href=#>售后网点</a></h5><h5><a href=#>手机预修</a></h5><h5><a href=#>手机寄修</a></h5><h5><a href=#>备件价格查询</a></h5><h5><a href=#>上门服务</a></h5></li><li><h3>特色服务</h3><h5><a href=#>防伪查询</a></h5><h5><a href=#>补购保障</a></h5><h5><a href=#>以旧换新</a></h5><h5><a href=#>礼品包装</a></h5></li><li><h3>关于我们</h3><h5><a href=#>公司介绍</a></h5><h5><a href=#>华为商城简介</a></h5><h5><a href=#>华为线下门店</a></h5><h5><a href=#>荣耀线下门店</a></h5><h5><a href=#>诚征英才</a></h5><h5><a href=#>意见反馈</a></h5></li><li><h3>友情链接</h3><h5><a href=#>华为集团</a></h5><h5><a href=#>华为CBG官网</a></h5><h5><a href=#>荣耀官网</a></h5><h5><a href=#>花粉俱乐部</a></h5><h5><a href=#>华为云</a></h5></li></ul><div class=contact><h3>4000-088-6888</h3><p>7x25小时客服热线（仅收市话费）</p><h6><a href=#><i class="iconfont icon-zaixiankefu"></i>在线客服</a></h6><h5><span>关注Vmall:</span> <a href=#><img src=image/images/footer5-1.jpg></a> <a href=#><img src=image/images/footer5-2.jpg></a> <a href=#><img src=image/images/footer5-3.jpg></a> <a href=#><img src=image/images/footer5-4.jpg></a><p><img src=image/images/footer9.jpg></p></h5></div></div><div class=bott><div class=lef><img src=image/images/footer8.jpg alt=华为商城 title=华为商城></div><div class=mid><p><a href=#>华为集团</a><span></span> <a href=#>华为CBG官网</a><span></span> <a href=#>荣耀官网</a><span></span> <a href=#>花粉俱乐部</a><span></span> <a href=#>华为应用市场</a><span></span> <a href=#>EMUI</a><span></span> <a href=#>华为终端云空间</a><span></span> <a href=#>开发者联盟</a><span></span> <a href=#>华为商城手机版</a><span></span> <a href=#>网站地图</a></p><h5>隐私声明 服务协议 COOKIES Copyright © 2012-2019 华为终端有限公司 版权所有 粤ICP备19015064号&nbsp;|&nbsp;粤公网安备 44190002003939号<br>增值电信业务经营许可证：粤B2-20190762&nbsp;|&nbsp;备案主体编号：44201919072182</h5></div><div class=rig><a href=#><img src=image/images/footer6.jpg alt=TRUSTe隐私认证 title=TRUSTe隐私认证></a> <a href=#><img src=image/images/footer7.jpg alt=电子营业执照 title=电子营业执照></a></div></div>';

	function setfooter($ele) {
		//加载尾部
		$ele.html(HTML);

		$('#foot .center .contact h6 a').mousemove(function() {
			$(this).css('opacity', '0.7')
		})
		$('#foot .center .contact h6 a').mouseout(function() {
			$(this).css('opacity', '1')
		})
		
		$('#foot .center .contact h5 a').each(function(index, item) {
			$(item).mousemove(function() {
				$(this).css('opacity', '0.7')
			})
			$(item).mouseout(function() {
				$(this).css('opacity', '1')
			})
		})
		$('#foot .center .contact h5 a').eq(0).mousemove(function(){
			$('#foot .center .contact h5 p').css('display','block')
		})
		$('#foot .center .contact h5 a').eq(0).mouseout(function(){
			$('#foot .center .contact h5 p').css('display','none')
		})
		$('#foot .center .contact h5 p').eq(0).mousemove(function(){
			$(this).css('display','block')
		})
		$('#foot .center .contact h5 p').eq(0).mouseout(function(){
			$(this).css('display','none')
		})
		
		
	}
	return setfooter;
});
