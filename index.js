/**
 * Created by HelloZcq on 2016/11/29.
 */
var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var oContent = document.getElementById("content");
var aImg = oContent.getElementsByTagName("img");
var oBottom = document.getElementById("bottom");
var aImg1 = oBottom.getElementsByTagName("img");
var oInfo = document.getElementById("info");
var oCurrentPage = document.getElementById("current-page")
var zIndex = 8;
var iNow = 0;
var oContainer=document.getElementById("container");

oNext.onmouseover = oPrev.onmouseover = function () {
    this.style.opacity = 30;
    animate(this, {opacity: 100})
}
oNext.onmouseout = oPrev.onmouseout = function () {
    this.style.opacity = 100;
    animate(this, {opacity: 0})
}
for (var i = 0; i < aImg.length; i++) {
    aImg[i].index = i;
    aImg[i].style.zIndex = aImg.length - i;

}
for (var i = 0; i < aImg.length; i++) {
    aImg[iNow].style.opacity = 0;
    aImg[iNow].style.filter = "alpha(opacity=0)";
    aImg[iNow].style.zIndex = zIndex++;
    animate(aImg[iNow], {opacity: 100})

}
oNext.onclick = oPrev.onclick = function () {
    if (this == oNext) {
        iNow++;
        if (iNow == aImg.length) {
            iNow = 0
        }
    } else {
        iNow--;
        if (iNow == -1) {
            iNow = aImg.length - 1;
        }
    }
    aImg[iNow].style.opacity = 0;
    aImg[iNow].style.filter = "alpha(opacity=0)";
    aImg[iNow].style.zIndex = zIndex++;
    oPrev.style.zIndex = oNext.style.zIndex = oInfo.style.zIndex = ++zIndex;
    oCurrentPage.innerHTML = iNow + 1;
    animate(aImg[iNow], {opacity: 100});

    for (var i = 0; i < aImg1.length; i++) {
        if (this.index  == 0 || this.index == 1) {
            oBottom.style.left = 0
        } else if (this.index == aImg1.length - 1 || this.index == aImg1.length - 2) {
            oBottom.style.left = -(aImg1.length / 2) * aImg1[0].offsetWidth + "px";
        } else {
            oBottom.style.left = -(aImg1[0].offsetWidth) * (this.index - 3) + "px";
        }
    }
    animate (oBottom,{left:-aImg1[0].offsetWidth*(this.index-1 )})

}
var timer;
function run() {
    timer = setInterval(function () {
        oNext.onclick()
    }, 1000)
}
run();
oContainer.onmouseover = function () {
    clearInterval(timer)
}
oContainer.onmouseout = function () {
    run();
}
for (var i = 0; i < aImg1.length; i++) {

    aImg1[i].index = i;

    aImg1[i].onclick = function () {
        iNow = this.index;

        //if (this.index != iNow) {
        for (var i = 0; i < aImg1.length; i++) {


            aImg1[i].style.opacity = 0.3;
            aImg1[i].style.filter = 30;
        }
        aImg1[this.index].style.opacity = 1;
        aImg1[this.index].style.filter = 100;
        //}
        aImg[iNow].style.opacity = 0;
        aImg[iNow].style.filter = "alpha(opacity=0)";
        aImg[iNow].style.zIndex = zIndex++;
        oPrev.style.zIndex = oNext.style.zIndex = oInfo.style.zIndex = ++zIndex;
        oCurrentPage.innerHTML = iNow + 1;
        animate(aImg[iNow], {opacity: 100});


        var iLeft = this.index;
        for (var i = 0; i < aImg1.length; i++) {
            if (iLeft == 0 || iLeft == 1) {
                oBottom.style.left = 0
            } else if (iLeft == aImg1.length - 1 || iLeft == aImg1.length - 2) {
                oBottom.style.left = -(aImg1.length / 2) * aImg1[0].offsetWidth + "px";
            } else {
                oBottom.style.left = -(aImg1[0].offsetWidth) * iLeft + "px";
            }
        }

    }

}

//
//
//
//
