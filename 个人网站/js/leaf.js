define(function(require,exports,module){
    function Leaf(option){
        this.width=option.width;
        this.left=option.left;

        this.oImg=new Image();
        this.oImg.width=this.width;
        this.oImg.src="img/rose"+parseInt(Math.random()*4+1)+".png"
        this.oImg.style.left=this.left+"px";
        option.container.appendChild(this.oImg)
        //alert(123)
    }
    Leaf.prototype.fall=function(){
        var that=this;
        var timer=setInterval(function(){
            if( that.oImg.offsetTop>=500){
                that.oImg.style.display="none";
                clearInterval(timer)
            }
            that.oImg.style.top=that.oImg.offsetTop+3+"px";
        },Math.random()*40)
    };
    module.exports=Leaf;

})

