/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-07 10:58:59
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-07 11:47:06
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
            // 给标题添加事件
            this.header.addEventListener("click", (e) => {
                var tar = e.target; //获取事件源
                if (tar.nodeName === this.header.firstElementChild.nodeName) {
                    // 去除原来的类名   标题类名
                    this.header.querySelector(".active") && this.header.querySelector(".active").classList.remove("active")
                    // 去除原来的类名  内容和盒子类名
                    this.content && this.content.querySelector(".active") && this.content.querySelector(".active").classList.remove("active")
                    //获取自定义下标
                    var ind = +tar.getAttribute("ind")
                    this.content && this.content.children[ind].classList.add("active") //给内容和字添加类名
                    tar.classList.add("active");// 给点击的事件源添加类名
                    //执行回到函数
                    this.callback && this.callback(tar)
                }
            })
        }
    }



    return Tab
})