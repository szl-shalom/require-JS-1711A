/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-02 08:48:22
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-02 08:53:41
 */
define(function () {
    var obj = {
        /**
         * @description: 获取单个元素
         * @el {String}  将要获取的字符串元素节点
         * @parent {Object}  从parent获取el
         * @return:  返回元素节点
         */
        get: function (el, parent) {
            parent = parent || document
            return parent.querySelector(el)
        },
        gets: function (el, parent) {
            parent = parent || document
            return parent.querySelectorAll(el)
        }
    }

    return obj
})