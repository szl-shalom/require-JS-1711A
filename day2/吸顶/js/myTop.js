/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-03 19:38:46
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-03 19:52:22
 */
define(function () {
    function T(opt) {
        Object.assign(this, opt)
        this.init()
    }

    T.prototype = {
        constructor: T,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this
            //获取吸顶元素距离页面的上边距
            var offsetTop = that.nav.offsetTop
            document.onscroll = function () {
                //获取滚动条滚动的距离
                var scrollTop = document.documentElement.scrollTop
                //吸顶
                scrollTop > offsetTop ? that.nav.classList.add("fixed") : that.nav.classList.remove("fixed")
            }
        }
    }

    return T;
})