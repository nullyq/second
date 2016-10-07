/**
 * Created by 霍亚倩 on 2016/8/30.
 */

//兼容代码
itcast={};

//过渡效果完成兼容
itcast.Transition=function(dom,callback){
    //DOM存在并且类型为对象
    if(dom&&typeof dom=="object"){
        dom.addEventListener("transitionEnd",function(){
            callback&&callback();
        });
        dom.addEventListener("webkitTransitionEnd",function(){
            callback&&callback();
        });
    }

}



//动画效果完成兼容
itcast.Transform=function(dom,callback){
    //DOM存在并且类型为对象
    if(dom&&typeof dom=="object"){
        dom.addEventListener("transformEnd",function(){
            callback&&callback();
        });
        dom.addEventListener("webkitTransformEnd",function(){
            callback&&callback();
        });
    }

}