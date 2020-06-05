/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-02 08:46:06
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-02 11:52:31
 */

require.config({
    baseUrl: "js/",  //配置基址目录
    paths: {
        a: "./dom",  //配置别名
        b: "./toDoList",
    }
})

require(["a", "b"], function ($, D) {
    new D({
        input: $.get(".header input"),
        middle: $.get(".middle>ul"),
        footer: $.get(".footer>ul"),
        middleSpan: $.get(".middle span"),
        footerSpan: $.get(".footer span")
    })
})