/**
 * Created by ����ٻ on 2016/8/30.
 */

window.onload=function(){
    //��໬��
    leftmove();
    //�Ҳ�
    rightmove();

}

//��໬��
function leftmove(){
    //��ȡ���Ԫ��
    var leftbox=document.querySelector(".cate-left");
    var ulbox=leftbox.querySelector("ul");
    var lisbox=ulbox.querySelectorAll("li");
    var rightbox=document.querySelector(".cate-right");
    var currentY=null;
    //ul���������ƶ���������
    var minTop=rightbox.offsetHeight-ulbox.offsetHeight;
    //��ק�������ٽ�ֵ
    var maxmove=150;
    var minmove=minTop-150;
    var movetransform=function(y){
        ulbox.style.transform="translateY("+y+"px)";
        ulbox.style.webkitTransform="translateY("+y+"px)";
    }
    var movetransition=function(){
        ulbox.style.transition="all 0.8s";
        ulbox.style.webkitTransition="all 0.8s";
    }
    var removetransition=function(){
        ulbox.style.transition="none";
        ulbox.style.webkitTransition="none";
    }
    //��ul��ӵ���¼�  ���ҵó����������һ��li
    ulbox.onclick=function(e){
        //�ó������li
        //e.target;  ��ǰ�����a��ǩ  ������a��ǩ�ĸ��ڵ�
        var target= e.target.parentNode;
        //console.log(target);
        //�������li���active  ������li�Ƴ�����¼�
        for(var i=0;i<lisbox.length;i++){
            lisbox[i].classList.remove("active");
            //�ֶ���li�������ֵ
            lisbox[i].index=i;
        }
        target.classList.add("active");

        //�����ʱ��ul�����ƶ� index ���߶�
        var y=-target.index*50;
        //console.log(y);
        movetransform(y);
        //���ó����ٽ�ֵ֮��Ͳ����������ƶ�
        //console.log(minTop)
        if(y<minTop){
            y=minTop;
        }
        if(y>0){
            y=0;
        }
        movetransform(y);
        movetransition();
        currentY=y;

    }
    //��ul����ƶ��¼�
    var startY=0;
    var moveY=0;
    var disY=0;
    ulbox.addEventListener("touchstart",function(e){
        startY= e.changedTouches[0].clientY;
    });
    ulbox.addEventListener("touchmove",function(e){
        moveY= e.changedTouches[0].clientY;
        disY=moveY-startY;
        console.log(disY)
        //��ul�����ƶ�
        //�ƶ��ľ���=��ǰ����+����ƶ��ľ���
        var y=currentY+disY;
        movetransform(y);
        //�������ƶ���������
        if(y<minmove){
            y=minmove;
        }
        if(y>maxmove){
            y=maxmove;
        }
        movetransform(y);
        removetransition();

    });
    //�����¼�������
    ulbox.addEventListener("touchend",function(){
        //��¼y��ǰ��λ��
        currentY=currentY+disY;
        if(currentY>0){
            currentY=0;
            movetransform(currentY);
            movetransition();
        }
        if(currentY<minTop){
            currentY=minTop;
            movetransform(currentY);
            movetransition();
        }
        //��������
        startY=0;
        disY=0;
        moveY=0;

    })



}


//�Ҳ�
function rightmove(){
    //��ȡ���Ԫ��
    var rightbox=document.querySelector(".cate-right");
    var minbox=document.querySelector(".cate-main");
    var currentY=null;
    //ul���������ƶ���������
    var minTop=minbox.offsetHeight-rightbox.offsetHeight;
    //��ק�������ٽ�ֵ
    var maxmove=150;
    var minmove=minTop-150;
    var movetransform=function(y){
        rightbox.style.transform="translateY("+y+"px)";
        rightbox.style.webkitTransform="translateY("+y+"px)";
    }
    var movetransition=function(){
        rightbox.style.transition="all 0.8s";
        rightbox.style.webkitTransition="all 0.8s";
    }
    var removetransition=function(){
        rightbox.style.transition="none";
        rightbox.style.webkitTransition="none";
    }

    var startY=0;
    var moveY=0;
    var disY=0;
    rightbox.addEventListener("touchstart",function(e){
        startY= e.changedTouches[0].clientY;
    });
    rightbox.addEventListener("touchmove",function(e){
        moveY= e.changedTouches[0].clientY;
        disY=moveY-startY;
        console.log(disY)
        //��ul�����ƶ�
        //�ƶ��ľ���=��ǰ����+����ƶ��ľ���
        var y=currentY+disY;
        movetransform(y);
        //�������ƶ���������
        if(y<minmove){
            y=minmove;
        }
        if(y>maxmove){
            y=maxmove;
        }
        movetransform(y);
        removetransition();

    });
    //�����¼�������
    rightbox.addEventListener("touchend",function(){
        //��¼y��ǰ��λ��
        currentY=currentY+disY;
        if(currentY>0){
            currentY=0;
            movetransform(currentY);
            movetransition();
        }
        if(currentY<minTop){
            currentY=minTop;
            movetransform(currentY);
            movetransition();
        }
        //��������
        startY=0;
        disY=0;
        moveY=0;

    })



}