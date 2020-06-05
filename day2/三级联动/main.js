/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-02 10:02:24
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-02 10:26:37
 */
require.config({
    baseUrl: "js/",
    paths: {
        a: "data"
    }
})


require(["a", "three", "dom"], function (data, T, $) {
    new T({
        selects: $.gets("select"),
        data: data,
    })
})