/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-12 15:20:39
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-12 15:24:07
 */
require.config({
    baseUrl: "js/",
    paths: {
        f: "floor",
        v: "../lib/velocity.min"
    }
})


require(["f"], function (F) {
    new F({
        nav: document.querySelector(".nav"),
        floor: document.querySelector(".floor>ul"),
        leftUl: document.querySelector(".left-ul")
    })
})
