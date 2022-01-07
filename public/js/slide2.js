var currentIndex = 0;

setInterval(function(){
    if(currentIndex < 5){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-750)+"px";

    $(".slides").animate({ left: slidePosition},400);
},4000);