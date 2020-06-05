/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-07 15:10:11
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-07 15:31:24
 */
require(["./js/tab", "./js/dom"], function (Tab, $) {
    new Tab({
        title: $.get(".left"),
        content: $.get(".right"),
        className: "active",
        type: "click"
    });

    [...$.gets(".every")].forEach(function (item) {
        new Tab({
            title: item.querySelector(".header"),
            content: item.querySelector(".content"),
            className: "active1",
            type: "mouseover"
        });
    })
})