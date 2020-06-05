/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-06 11:45:05
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-06 11:55:28
 */
define(function () {
    function Tab(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Tab.prototype = {
        constructor: Tab,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            this.title.addEventListener(this.type, e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    // 删除原来的
                    this.title.querySelector("." + this.className) && this.title.querySelector("." + this.className).classList.remove(this.className)
                    //添加类名
                    tar.classList.add(this.className)
                }
            })
        }
    }

    return Tab
})