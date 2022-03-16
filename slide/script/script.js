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

    //  slider - fadein, fadeout 버전
    var slideIndex_1 = 0,
        slideLen_1 = 2;
    window.setInterval(function () {
        if (slideIndex_1 < slideLen_1) {
            slideIndex_1++;
        } else {
            slideIndex_1 = 0;
        }
        $(".slide-1>img").fadeOut();
        $(".slide-1>img").eq(slideIndex_1).fadeIn();
    }, 3000);

    //  slider - directional slide 버전 - 좌우
    var slideIndex_2 = 0,
        slideLen_2 = 2;
    window.setInterval(function () {
        if (slideIndex_2 < slideLen_2) {
            slideIndex_2++;
        } else {
            slideIndex_2 = 0;
        }
        var slidePosition = slideIndex_2 * (-1200) + "px";
        $(".slide-2").animate({
            left: slidePosition
        }, "slow");
    }, 3000);

    //  slider - directional slide 버전 - 상하
    var slideIndex_3 = 0,
        slideLen_3 = 2;
    window.setInterval(function () {
        if (slideIndex_3 < slideLen_3) {
            slideIndex_3++;
        } else {
            slideIndex_3 = 0;
        }
        var slidePosition = slideIndex_3 * (-300) + "px";
        $(".slide-3").animate({
            top: slidePosition
        }, "slow");
    }, 3000);
});