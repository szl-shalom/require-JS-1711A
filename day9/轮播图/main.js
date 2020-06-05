/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-11 20:36:43
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-11 20:44:35
 */
require(["./js/swiper"], function (S) {
    var index = 1
    new S({
        img: document.querySelector("img"),
        left: document.querySelector(".left"),
        right: document.querySelector(".right"),
        data: [`00${index++}.jpg`, `00${index++}.jpg`, `00${index++}.jpg`, `00${index++}.jpg`, `00${index++}.jpg`, `00${index++}.jpg`, `00${index++}.jpg`, `00${index++}.jpg`],
        index: 0
    })
})