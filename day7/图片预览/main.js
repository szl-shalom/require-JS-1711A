/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-08 15:22:54
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-08 15:33:16
 */
require(["./js/data", "./js/dom", "./js/img"], function (data, $, Img) {
    [...document.body.children].forEach((item, index) => {
        item.addEventListener("click", () => {
            new Img({
                data: data,
                index: index,
            })
        })
    })
})