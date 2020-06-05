/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-11 11:29:30
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-11 16:12:49
 */
require(["./js/list", "./js/dialog"], function (L, D) {
    new L({
        username: document.querySelector(".username"),
        age: document.querySelector(".age"),
        tbody: document.querySelector("tbody"),
        submit: document.querySelector(".submit"),
        reset: document.querySelector(".reset"),
        delAll: document.querySelector(".del-all")
    })
})