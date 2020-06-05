/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-12 10:32:39
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-12 10:42:48
 */
require(["./js/data", "./js/select"], function (data, S) {
    new S({
        ul: document.querySelector("ul"),
        input: document.querySelector("input"),
        span: document.querySelector("span"),
        data,
    })
})