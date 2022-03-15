/*global $, document*/

$(document).ready(function () {
    "use strict";
    //    $(제어대상).이벤트(함수);
    $(".nav-main").mouseenter(function () {
        $(this).children(".nav-sub-container").stop().slideDown();
    });
    $(".nav-main").mouseleave(function () {
        $(this).children(".nav-sub-container").stop().slideUp();
    });
});