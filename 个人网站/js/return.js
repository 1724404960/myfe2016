/**
 * Created by HelloZcq on 2017/2/14.
 */
define(["jquery"],function(){
    function Picture() {
        this.defaultSettings = {
            speed: 500,
            selector: "body",
            buttonstyle: "circle",
            arrowPos: "center",
            imgs: []
        }
        this.container = $('<div class="container"></div>');
        this.content = $('<div class="content"></div>');
        this.tab = $('<ul class="tab"></ul>');
        this.arrows = $('<div class="arrows"></div>');
        this.prev = $('<span class="prev">&lt;</span>');
        this.next = $('<span class="next">&gt;</span>');
    }
    Picture.prototype.move=function(options) {
        $.extend(this.defaultSettings, options);
        for (var i = 0; i < this.defaultSettings.imgs.length; i++) {
            //this.content.html("<img src=img/"+(i+1)+".jpg>");
            //this.tab.html("<li>"+(i+1)+"</li>")
            var $img = $("<img src='" + this.defaultSettings.imgs[i] + "'>");
            this.content.append($img);
            var $li = $("<li></li>");
            if (this.defaultSettings.buttonstyle == "square") {
                $li.html(i + 1);
            } else {
                $li.addClass("circle");
            }
            this.tab.append($li)
        }
            $("img", this.content).eq(0).addClass("selected");
            $("li", this.tab).eq(0).addClass("selected");
            this.arrows.append(this.prev).append(this.next);
            this.container.append(this.content).append(this.tab).append(this.arrows);
            $(document.body).append(this.container);

        if(this.defaultSettings.arrowPos=="center"){
            $("span",this.arrows).addClass("center");
            this.arrows.removeClass("arrows");
        }
        var iNow=0;
        var that=this;
        this.tab.on("mouseover","li",function(){
            //console.log(iNow)
            iNow = $(this).index();
            console.log($(this).index());
            //iNow=that.tab.index();
            changeImg();
        })
        this.prev.on("click", function () {
            iNow--;
            if(iNow==-1){
                iNow=that.defaultSettings.imgs.length - 1
            }
            changeImg();
        })
        this.next.on("click", function () {
            iNow++;
            console.log(this)
            if(iNow==that.defaultSettings.imgs.length){
                iNow=0
            }
            changeImg();
        })
        this.container.hover(function(){
            clearInterval(that.timer);
        },function (){
            play();
        });
        play();
        function play(){
             that.timer=setInterval(function(){
                that.next.trigger("click")
            },that.defaultSettings.speed)
        }

        function changeImg(){
            $("li",that.tab).eq(iNow).addClass("selected").siblings().removeClass("selected");
            $("img",that.content).eq(iNow).addClass("selected").siblings().removeClass("selected");
        }
    }
    return Picture;
})