/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-07 16:05:27
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-07 16:28:39
 */
require(["./js/banner"], function (B) {
    new B({
        data: ["1.jpeg", "2.jpg", "3.jpg", "4.jpeg", "5.jpg", "6.jpg", "1.jpeg", "2.jpg", "3.jpg", "4.jpeg", "5.jpg", "6.jpg"],
        container: document.querySelector(".container"),
        left: document.querySelector(".left"),
        right: document.querySelector(".right"),
        wrap: document.querySelector(".wrap")
    })
})