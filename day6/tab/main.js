/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-07 10:58:48
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-07 11:46:33
 */
require(["./js/tab", "./lib/velocity.min"], function (Tab, V) {
    new Tab({
        header: document.querySelector(".header"),
        content: document.querySelector(".content")
    })

    new Tab({
        header: document.querySelector(".header1")
    })


    new Tab({
        header: document.querySelector(".left"),
        content: document.querySelector(".content1"),
        callback(tar) {
            V(document.querySelector(".underLine"), {
                top: tar.offsetTop
            })
        }
    })
})