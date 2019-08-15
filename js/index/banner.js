/**
 * @description: 定义模块：轮播图模块
 * @param {type} 
 * @return: 
 */
define(['jquery'],function(){
/**
 * @description: 封装构造函数
 * @param {type} imgList:图片列表  dotList:导航点列表
 *               mask:鼠标移入移出事件触发对象 pre：前一张 next：后一张
 * @return: 
 */
        function Banner(imgList,dotList,mask,pre,next){
            this.imgList = imgList;
            this.dotList = dotList;
            this.mask = mask;
            this.pre = pre;
            this.next = next;
            this.index = 0;
            this.timer = null;
        }
        Banner.prototype.init = function(){
            this.autoPlay();
            this.mouse();
            this.mouseClick();
        }
        Banner.prototype.changePic = function(){
            this.imgList.removeClass('show').hide().eq(this.index).fadeIn(300).addClass('show');
            this.dotList.eq(this.index).addClass('show').siblings().removeClass('show');	
        }
        Banner.prototype.autoPlay = function(){
            var _this= this;
            this.timer = setInterval(function(){
                _this.index ++;
                if(_this.index == _this.imgList.length){
                    _this.index = 0;
                }
                _this.changePic();
            },5000);
        }
        Banner.prototype.mouse = function(){
            var that = this;
            this.mask.on({
                "mouseenter":function(){
                    clearInterval(that.timer);
                },
                "mouseleave":function(){
                    that.autoPlay();
                }
            });
            that.dotList.mouseover(function(){
                that.index = $(this).index();
                that.changePic();
            })
        }
        Banner.prototype.mouseClick = function(){
            var that = this
            if(this.pre && this.next){
                this.pre.click(function(){
                    that.index --;
                    if(that.index == -1){
                        that.index = that.imgList.length - 1;
                    }
                    that.changePic();
                })
                that.next.click(function(){
                    that.index ++;
                    if(that.index == that.imgList.length){
                        that.index = 0;
                    }
                    that.changePic();
                })
            }
            
        }
        
        
        return {
            Banner:Banner
        };
        
    }
);
