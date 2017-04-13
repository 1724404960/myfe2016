/**
 * Created by Administrator on 2017/1/6 0006.
 */
var oUl=document.getElementsByTagName('ul')[0];

var aLi=oUl.getElementsByTagName('a');

// console.log(aLi);
for(var i=0;i<aLi.length;i++){

    aLi[i].onclick=function ()  {
        var speed=10;
        var href=this.getAttribute('href');
        // console.log(href)
        var oDiv=document.querySelector(href);
        // console.log(oDiv);
        // $("html,body").animate({scrollTop:0},300);

        setInterval(function () {
           window.scrollTo(0,oDiv.offsetTop);
            return false;
       },speed+=50)
    }
}
