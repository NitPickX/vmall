;(function(){
	var $videoBox = $('[ref="js-video-play-box"]'),
		$videoMask = $videoBox.find('.video-mask'),
		$video = $videoBox.find('video'),
		$iframe = $videoBox.find('iframe');
	// 点击播放视频
	$('body').on('click','[ref="js-play"]', function () {
		var height = $(document).height(),
			videoUrl = $(this).data('video'),
			reg = /.mp4$/;
		$videoMask.css('height', height);
		// 判断视频是否是MP4格式
		if(reg.test(videoUrl)){
			$video.attr('src', videoUrl).show();
			$iframe.hide();
		}else{
			$iframe.attr('src', videoUrl).show();
			$video.hide();
		}
		$videoBox.removeClass('hide');
	})
	// 关闭视频
	$('body').on('click', '[ref="js-close-video"]', function () {
		$video.attr('src', '');
		$iframe.attr('src', '');
		$videoBox.addClass('hide');
	})
	// 鼠标移入
	$('body').on('mouseenter', '[ref="js-play"]', function(){
		var len = $('[ref="js-play"]').length;
		var $img = $(this).children(),
			srcArr = $img.attr('src').split('.');
		for(var i=0;i<srcArr.length;i++){
			if(srcArr[i].indexOf('play-btn-'+ len +'-red') === -1 && srcArr[i].indexOf('play-btn-'+ len) !== -1){
				srcArr[i] += '-red';
				break;
			}
		}
		$img.attr('src', srcArr.join('.'));
	})
	// 鼠标移出
	$('body').on('mouseleave', '[ref="js-play"]', function(){
		var $img = $(this).children(),
			src = $img.attr('src');
		src = src.replace('-red', '');
		$img.attr('src', src);
	})
})();