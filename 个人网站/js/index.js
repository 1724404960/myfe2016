require(["jquery","return"],function($,Picture){
    var arr1=["img/math.jpg","img/psd2.jpg","img/psd3.jpg","img/psd1.jpg"]
    var settings1={
        speed:500,
        selector:"#container1",
        buttonstyle:"circle",
        arrowPos:"bottom",
        imgs:arr1
    }
    var picture1=new Picture();
    picture1.move(settings1);


    // var arr2=["img/math.jpg","img/psd3.jpg","img/psd2.jpg"]
    // var settings2={
    //     speed:400,
    //     selector:"#container2",
    //     buttonstyle:"square",
    //     arrowPos:"center",
    //     imgs:arr2
    // }
    //     var picture2=new Picture();
    //     picture2.move(settings2);
    })
