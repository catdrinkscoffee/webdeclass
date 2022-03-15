/*global $, document, window*/

$(document).ready(function () {
    "use strict";
    //    $(제어대상).이벤트(함수);
    $(".nav-main").mouseenter(function () {
        $(this).children(".nav-sub-container").stop().slideDown();
    });
    $(".nav-main").mouseleave(function () {
        $(this).children(".nav-sub-container").stop().slideUp();
    });
    //    slider - fadein, fadeout 버전
    var slideIndex_1 = 0, slideLen_1 = 2;
    window.setInterval(function () {
        if (slideIndex_1 === slideLen_1) {
            slideIndex_1 = 0;
        } else {
            slideIndex_1 = slideIndex_1 + 1;
        }
        $(".slide-1>img").fadeOut();
        $(".slide-1>img").eq(slideIndex_1).fadeIn();
    }, 2000);

    //    slider - directional slide 버전
    $("slide-2-item").eq(0).siblings().css({left : "1200px"});
    var slideIndex_2 = 0, slideLen_2 = 2;
    window.setInterval(function () {
       if (slideIndex_2 === slideLen_2) {
            slideIndex_2 = 0;
        } else {
            slideIndex_2 = slideIndex_2 + 1;
        }
        $(".slide-2>ul>li").eq(slideIndex_2).siblings().animate({left:"1200px"}, "slow");
        $(".slide-2>ul>li").eq(slideIndex_2).siblings().animate({left:"0px"}, "slow");
    }, 3000);
    
});