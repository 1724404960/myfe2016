var oPrev1=document.getElementById("prev1");
var oNext1=document.getElementById("next1");
var oExperience=document.getElementById("experience");
//var oWrapper=oExperience.children;
var oWrapper=oExperience.getElementsByClassName("wrapper");
var aImg=oWrapper[0].getElementsByTagName("img");


//var aImg=oWrapper[0].children;
console.log(aImg)

var iNow=0;
oPrev1.onclick=oNext1.onclick=function(){
    if(this==oNext1){
        iNow++;
        console.log(oWrapper);
        //console.log(aImg)
        if(iNow==aImg.length){
            iNow=0;
        }
        changeImg(iNow);
    }else{
        iNow--;
        if(iNow==-1){
            iNow=aImg.length-1;
        }
        changeImg(iNow);
    }
}
function changeImg(idx){
    iNow=idx;
    for(var i=0;i<aImg.length;i++){
        aImg[i].className="";
    }
    aImg[idx].className="selected";

}