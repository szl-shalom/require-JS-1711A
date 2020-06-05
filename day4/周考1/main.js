/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-05 11:04:40
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-05 11:24:56
 */

require(["./js/dom", "./js/data", "./js/list"], function ($, data, List) {
    new List({
        data: data,
        wrap: $.get(".wrap"),
    })
})
