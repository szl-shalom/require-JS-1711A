/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-09 08:58:38
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-09 10:55:33
 */
require.config({
    baseUrl: ""
})

require(["./js/swiper"], function (Swiper) {
    new Swiper(".swiper-wrapper", {
        autoPlay: true, //自动轮播
        index: 0, // 当前下标
        page: ".page",//分页器
        prev: ".prev",//左按钮
        next: ".next",//有按钮
        loop: true,// 是否无缝
        num: 4,//每个显示个数
        length: 2,//每一次移动个数
        direction: "hornortal"
    })
})