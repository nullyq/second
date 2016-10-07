/**
 * Created by 霍亚倩 on 2016/8/29.
 */
window.onload=function(){
    //登录条
    searchlogin();
    //倒计时
    downTime();
    //轮播图
    banner();
}

//导航栏部分写导航栏变色
function searchlogin(){
    //获取登录条
    var searchbox=document.querySelector(".header-in");
    //获取banner的高度
    var bannerbox=document.querySelector(".jd-banner");
    var top=bannerbox.offsetHeight;
    var opacity=0;
    //绑定滚动事件
    window.onscroll=function(){
        //获取页面超过浏览器的高度
        var scroll=document.body.scrollTop;
        if(scroll<top){
            opacity=scroll/top*0.85;
        }else{
            opacity=0.85;
        }
        //赋值给导航条
        searchbox.style.background="rgba(201,21,35,"+opacity+")";
    }
}

//倒计时
function downTime(){
    //获取需要用到的元素
    var timebox=document.querySelector(".downtime");
    var spans=timebox.querySelectorAll("span");
    var time=5*60*60;
    var timer=null;
    timer=setInterval(function(){
        time--;
        if(time<0){
            clearInterval(timer)
        }
        //获取小时
        var h=Math.floor(time/3600);
        //获取分钟
        var m=Math.floor(time%3600/60);
        //获取秒
        var s=time%60;
        //把获取到的值 给span

        spans[0].innerHTML=h>10?Math.floor(h/10):0;
        spans[1].innerHTML=h>10?(h%10):h;

        spans[3].innerHTML=m>10?Math.floor(m/10):0;
        spans[4].innerHTML=m>10?(m%10):m;

        spans[6].innerHTML=s>10?Math.floor(s/10):0;
        spans[7].innerHTML=s>10?(s%10):s;


    },1000);

}

//轮播图部分

//轮播图自动播放
//角标跟随轮播图的移动改变
//手指触屏轮播图跟随滑动
//判断触屏滑动的距离
//小于临界值时吸附回去
//大于临界值时ul移动到上一张或者下一张

function banner(){
    //获取需要的元素
    //获取盛放轮播图的盒子
    var bannerBox=document.querySelector(".jd-banner");
    //获取ul
    var imgBox=bannerBox.querySelector("ul");
    //获取ol
    var pointBox=bannerBox.querySelector("ol");
    //获取ol中的li
    var points=pointBox.querySelectorAll("li");
    //获取一个图片的宽度
    var w=bannerBox.offsetWidth;
    //计时器
    var timer=null;
    //img的索引是从1开始的
    var index=1;
    //封装  设置ul移动距离
    var ultranslate=function(current){
        imgBox.style.transform="translateX("+current+"px)";
        imgBox.style.webkitTransform="translateX("+current+"px)";
    }
    //封装 动画效果
    var ultransition=function(){
        imgBox.style.transition="all 0.7s";
        imgBox.style.webkitTransition="all 0.7s";
    }
    //封装 删除过渡
    var nonetransition=function(){
        imgBox.style.transition="none";
        imgBox.style.webkitTransition="none";
    }

//定时轮播
    timer=setInterval(function(){
        index++;
        //一共是10张图片,判断index的值
        var current=-index*w;
        //设置ul移动的距离
        ultranslate(current);
        //添加一个动画效果
        ultransition();

    },1000);
    //当每次过渡结束后
    itcast.Transition(imgBox,function(){
        if(index>=9){
            index=1;
        }
        if(index<=0){
            index=8;
        }
        var current=-index*w;
        //设置ul移动的距离
        ultranslate(current);
        nonetransition();
        //角标同步
        ponitactive(index);
    });

    //设置角标同步
    var ponitactive=function(index){
        for(var i=0;i<points.length;i++){
            //先清除其他的样式
            points[i].classList.remove("active");
        }
        //设置当前样式
        points[index-1].classList.add("active");
    }

//设置手指触屏轮播图跟随手指滑动
    //定义变量
    var startX=0;
    var moveX=0;
    var disX=0;
    var ismove=false;
    //添加touch事件
    bannerBox.addEventListener("touchstart",function(e){
        clearInterval(timer);
        startX= e.changedTouches[0].clientX;
    });
    //添加移动事件
    bannerBox.addEventListener("touchmove",function(e){
        ismove=true;
        moveX= e.changedTouches[0].clientX;
        disX=moveX-startX;

        //触屏滑动 ul跟随手指滑动的距离滑动
        var current=-index*w+disX;
        ultranslate(current);
        ultransition();
        //console.log(startX);
        //console.log(disX);

    });
    //添加touch结束事件
    bannerBox.addEventListener("touchend",function(){
        //判断disx的正负值  disx>0 上一张  disx<0 下一张
        //移动距离disx跟w/3比较 大于 就切换到下一张  小于就吸附回去
        if(Math.abs(disX)>w/3){
            if(disX>0){
                //切换到上一张
                index--;
            }
            if(disX<0){
                //切换到下一张
                index++;
            }
            var current=-index*w;
            ultranslate(current);
            ultransition();
        }else{
            //吸附回去
            var current=-index*w;
            ultranslate(current);
            ultransition();
        }
        //数据重置
        startX=0;
        moveX=0;
        disX=0;
        ismove=false;
        timer=setInterval(function(){
            index++;
            //一共是10张图片,判断index的值
            var current=-index*w;
            //设置ul移动的距离
            ultranslate(current);
            //添加一个动画效果
            ultransition();

        },1000);
    })
}

