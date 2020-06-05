/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-08 10:33:05
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-08 10:55:20
 */
require.config({
    baseUrl: "./js/",
    paths: {
        d: "data",
        f: "filter",
        $: "dom"
    }
})



require(["d", "f", "$"], function (data, Filter, $) {
    new Filter({
        data: data,
        content: $.get(".content ul"),
        input: $.get("input"),
        // btns: $.gets("button"),
        header: $.get(".header")
    })
})