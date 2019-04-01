/**
 * Created by web on 2019/3/30.
 */
"use strict"
window.onload=function(){
    var box=document.getElementById('box');
    var imgs=box.children;
    var deg=360/imgs.length;
    var roX=-15;
    var roY=0;
    var x,y,x_,y_,xN,yN,time;
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.transform = 'rotateY('+ i*deg + 'deg) translateZ(500px)';
        imgs[i].style.transition =' all 1s '+ (imgs.length-i-1)*0.1 +'s';
        imgs[i].ondragstart=function(){
            return false;
        }//½ûÖ¹Êó±êÍÏ¶¯Í¼Æ¬
    }

    document.onmousedown=function(e){
       box.style.animationPlayState="paused";
        box.style.animation="zhuan 40s linear 2s 0"
        e=e||window.event;
        x_=e.clientX;
        y_=e.clientY;
        this.onmousemove=function(e){
            e=e||window.event;
            x=e.clientX;
            y=e.clientY;

            xN=x-x_;
            yN=y-y_;

            roY+=xN*0.05;
            roX-=yN*0.05;

            box.style.transform='perspective(1000px) rotateX('+roX+'deg) rotateY('+roY+'deg)';
            x_=e.clientX;
            y_=e.clientY;
        }
        this.onmouseup=function(){
            this.onmousemove=null;
        }
    }
    time=setTimeout(function(){
        box.style.animation="zhuan 40s linear 2s infinite"
    });
}