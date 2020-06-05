/*
 * @Description: This is a JS program !
 this
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-07 15:10:19
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-07 21:15:49
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
            [...this.title.children].forEach((item, index) => {
                //给每一个元素添加事件
                item["on" + this.type] = () => {
                    // 去除标题原来的类名 
                    this.title.querySelector("." + this.className) && this.title.querySelector("." + this.className).classList.remove(this.className)
                    item.classList.add(this.className) //添加类名  标题

                    // 去掉内容原来的类名
                    this.content.querySelector("." + this.className) && this.content.querySelector("." + this.className).classList.remove(this.className)
                    this.content.children[index].classList.add(this.className)
                }
            })
        }
    }

    return Tab
})