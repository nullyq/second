/**
 * Created by 霍亚倩 on 2016/8/30.
 */

window.onload=function(){
    //左侧滑动
    leftmove();
    //右侧
    rightmove();

}

//左侧滑动
function leftmove(){
    //获取相关元素
    var leftbox=document.querySelector(".cate-left");
    var ulbox=leftbox.querySelector("ul");
    var lisbox=ulbox.querySelectorAll("li");
    var rightbox=document.querySelector(".cate-right");
    var currentY=null;
    //ul可以向上移动的最大距离
    var minTop=rightbox.offsetHeight-ulbox.offsetHeight;
    //拖拽滑动的临界值
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
    //给ul添加点击事件  并且得出点击的是哪一个li
    ulbox.onclick=function(e){
        //得出点击的li
        //e.target;  当前点击的a标签  获得这个a标签的父节点
        var target= e.target.parentNode;
        //console.log(target);
        //给点击的li添加active  其他的li移除这个事件
        for(var i=0;i<lisbox.length;i++){
            lisbox[i].classList.remove("active");
            //手动给li添加索引值
            lisbox[i].index=i;
        }
        target.classList.add("active");

        //点击的时候ul向上移动 index 个高度
        var y=-target.index*50;
        //console.log(y);
        movetransform(y);
        //设置超过临界值之后就不会在向上移动
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
    //给ul添加移动事件
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
        //让ul跟随移动
        //移动的距离=当前距离+鼠标移动的距离
        var y=currentY+disY;
        movetransform(y);
        //当向下移动的最大距离
        if(y<minmove){
            y=minmove;
        }
        if(y>maxmove){
            y=maxmove;
        }
        movetransform(y);
        removetransition();

    });
    //触屏事件结束后
    ulbox.addEventListener("touchend",function(){
        //记录y当前的位置
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
        //数据重置
        startY=0;
        disY=0;
        moveY=0;

    })



}


//右侧
function rightmove(){
    //获取相关元素
    var rightbox=document.querySelector(".cate-right");
    var minbox=document.querySelector(".cate-main");
    var currentY=null;
    //ul可以向上移动的最大距离
    var minTop=minbox.offsetHeight-rightbox.offsetHeight;
    //拖拽滑动的临界值
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
        //让ul跟随移动
        //移动的距离=当前距离+鼠标移动的距离
        var y=currentY+disY;
        movetransform(y);
        //当向下移动的最大距离
        if(y<minmove){
            y=minmove;
        }
        if(y>maxmove){
            y=maxmove;
        }
        movetransform(y);
        removetransition();

    });
    //触屏事件结束后
    rightbox.addEventListener("touchend",function(){
        //记录y当前的位置
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
        //数据重置
        startY=0;
        disY=0;
        moveY=0;

    })



}