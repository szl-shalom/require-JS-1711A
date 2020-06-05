/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-01 15:57:15
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-01 16:11:09
 */
require(["./js/dom", "./js/dialog"], function ($, Dialog) {
    [...$.gets("img")].forEach(function (item) {
        item.onclick = function () {
            new Dialog(item)
        }
    })
})