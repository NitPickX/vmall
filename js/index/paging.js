/* 定义翻页效果模块 */
define(['jquery'],function(){
    function Page(dire){
        this.dire = dire;
        this.targetEle = this.dire.parent().children().eq(3).children().eq(0);
        this.page_index = 0;
        this.max_index = parseInt(this.targetEle.css('width'))/1200;
    }
    Page.prototype.stroke = function(){
        var that = this;
        that.dire.click(function(e){
            if(e.target.className == 'right'){
                that.page_index ++;
                if(that.page_index == (that.max_index - 1)){
                    e.target.style.display = 'none';
                }
                e.target.parentNode.children[0].style.display = 'block';
            }else if(e.target.className == 'left'){
                that.page_index --;
                if(that.page_index == 0){
                    e.target.style.display = 'none';
                }
                e.target.parentNode.children[1].style.display = 'block';
            }
            that.targetEle.css({
                'transform':'translateX(' + -1200*that.page_index +'px)',
                'transition':'all 0.3s linear 0s',
            });
        })
        
    }
    return {
        Page:Page
    }
});