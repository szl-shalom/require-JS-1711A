/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-06 15:15:39
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-06 15:18:54
 */
require(["./js/t", "./js/dom"], function (T, $) {
    new T({
        ul: $.get("ul")
    })
})