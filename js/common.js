/**
 * Created by ����ٻ on 2016/8/30.
 */

//���ݴ���
itcast={};

//����Ч����ɼ���
itcast.Transition=function(dom,callback){
    //DOM���ڲ�������Ϊ����
    if(dom&&typeof dom=="object"){
        dom.addEventListener("transitionEnd",function(){
            callback&&callback();
        });
        dom.addEventListener("webkitTransitionEnd",function(){
            callback&&callback();
        });
    }

}



//����Ч����ɼ���
itcast.Transform=function(dom,callback){
    //DOM���ڲ�������Ϊ����
    if(dom&&typeof dom=="object"){
        dom.addEventListener("transformEnd",function(){
            callback&&callback();
        });
        dom.addEventListener("webkitTransformEnd",function(){
            callback&&callback();
        });
    }

}