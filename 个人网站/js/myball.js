/**
 * Created by HelloZcq on 2017/4/9.
 */
// var oScroll=document.body.scrollTop ||document.documentElement.scrollTop;
// if(oScroll>=200){
//     alert(123)
// }
$(function () {
    // $(window).scroll(function () {
    //
    $(window).on('scroll',function () {
        // alert(123)
        if($(this).scrollTop()>=800){
            // alert(3)
            fillball("drawing",60,"greenyellow");
            fillball("drawing2",40,"red");
            fillball("drawing3",80,"blue");
            fillball("drawing4",99,"pink");
            fillball("drawing5",50,"red");
            fillball("drawing6",30,"#000000");
            fillball("drawing7",40,"yellow");
            fillball("drawing8",69,"orange");
        }

         });

    });
// fillball("drawing",60,"greenyellow");
// fillball("drawing2",40,"red");
// fillball("drawing3",80,"blue");
// fillball("drawing4",99,"pink");
// fillball("drawing5",50,"red");
// fillball("drawing6",30,"#000000");
// fillball("drawing7",40,"yellow");
// fillball("drawing8",69,"orange");
function fillball(id,value,color){
    var canvas=document.getElementById(id);
    var width=canvas.width=160;
    var height=canvas.height=160;
    var count=0;
    linewidth=5;
    var interval=4000/value;
    R=(width-2*linewidth)/2;
    var context=canvas.getContext('2d');
    function render(context){

        context.clearRect(0,0,width,height);
        context.beginPath();
        context.lineWidth=linewidth;
        context.strokeStyle="#eee";
        context.arc(1/2*width,1/2*height,R,0,2*Math.PI);
        context.stroke();
        context.closePath();
        context.strokeStyle=color;
        context.beginPath()
        context.arc( 1/2*width,1/2*height,R,Math.PI/2-(count*2*Math.PI)/200,Math.PI/2+(count*2*Math.PI)/200)

        context.stroke()

        context.font = "bold 20px sans-serif";  // 字体大小，样式
        context.fillStyle = color;  // 颜色
        context.textAlign = 'center';  // 位置
//			context.textBaseline = 'middle';
        context.fillText(count+"%",1/2*width,1/2*height);
        if(count<value)
            count++;
    }
    setInterval(function(){
        render(context);
    },interval);

}