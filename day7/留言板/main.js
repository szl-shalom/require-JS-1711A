/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-08 19:46:09
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-08 19:48:32
 */
require(["./js/mes"], function (M) {
    new M({
        username: document.querySelector(".username"),
        usersign: document.querySelector(".usersign"),
        userimg: document.querySelector(".userimg"),
        submit: document.querySelector(".submit"),
        ul: document.querySelector("ul")

    })
})