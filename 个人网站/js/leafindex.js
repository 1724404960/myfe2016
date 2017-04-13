require(['./leaf'],function(Leaf){
    var oContainer=document.getElementById("container");
    var oWinwidth=document.documentElement.clientWidth;
    for(var i=0;i<4;i++){
        var leaf=new Leaf({
            width:100,
            left:parseInt(Math.random()*(oWinwidth-40)),
            container:oContainer
        });
        leaf.fall();
        //alert(123)
    }
})