/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-06 11:44:40
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-06 16:01:43
 */
require.config({
    shim: {
        index: {
            deps: [], //依赖
            exports: "index"//抛出
        }
    }
})

require(["./js/tab"], function (Tab) {
    new Tab({
        title: document.querySelector(".title"),
        className: "active",
        type: "click"
    })

    new Tab({
        title: document.querySelectorAll(".title")[1],
        className: "active1",
        type: "mouseover"
    })
})

