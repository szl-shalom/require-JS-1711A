/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-06 15:16:17
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-06 19:18:23
 */
define(["../lib/velocity.min"], function (V) {
    function T(opt) {
        Object.assign(this, opt) //合并参数
        this.init() //初始化
    }

    T.prototype = {
        constructor: T,
        init() {
            this.bindEvent() // 添加事件
        },
        bindEvent() {
            //添加事件
            [...this.ul.children].forEach(item => {
                //添加鼠标进入
                item.onmouseenter = () => {
                    V(item, {
                        width: 600
                    })

                    V(item.querySelector(".mask"), "slideUp")

                    V(item.querySelector(".footer"), {
                        left: -600
                    })
                }
                // 鼠标离开
                item.onmouseleave = () => {
                    V(item, "reverse")

                    V(item.querySelector(".mask"), "slideDown")

                    V(item.querySelector(".footer"), "reverse")
                }
            })
        }
    }

    return T
})