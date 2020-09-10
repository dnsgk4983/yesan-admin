$(function(){
    $(".gnb > ul > li:nth-child(2)").mouseover(function(){
        $('.sub-nav-wrap').css('display','flex');
        $('.sub-service').css('display','block');
        $('.gnb-bg').css("display",'block');
    });
    $(".gnb > ul > li:nth-child(2)").mouseleave(function(){
        $('.sub-nav-wrap').css('display','none');
        $('.sub-service').css('display','none');
        $('.gnb-bg').css('display','none');
    });

    $(".gnb > ul > li:nth-child(3)").mouseover(function(){
        $('.sub-nav-wrap').css('display','flex');
        $('.sub-share').css('display','block');
        $('.gnb-bg').css("display",'block');
    });
    $(".gnb > ul > li:nth-child(3)").mouseleave(function(){
        $('.sub-nav-wrap').css('display','none');
        $('.sub-share').css('display','none');
        $('.gnb-bg').css('display','none');
    });

    $(".gnb > ul > li:nth-child(4)").mouseover(function(){
        $('.sub-nav-wrap').css('display','flex');
        $('.sub-user').css('display','block');
        $('.gnb-bg').css("display",'block');
    });
    $(".gnb > ul > li:nth-child(4)").mouseleave(function(){
        $('.sub-nav-wrap').css('display','none');
        $('.sub-user').css('display','none');
        $('.gnb-bg').css('display','none');
    });

    $(".gnb > ul > li:nth-child(6)").mouseover(function(){
        $('.sub-nav-wrap').css('display','flex');
        $('.sub-board').css('display','block');
        $('.gnb-bg').css("display",'block');
    });
    $(".gnb > ul > li:nth-child(6)").mouseleave(function(){
        $('.sub-nav-wrap').css('display','none');
        $('.sub-board').css('display','none');
        $('.gnb-bg').css('display','none');
    });
});