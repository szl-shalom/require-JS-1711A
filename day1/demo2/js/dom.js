/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-01 15:58:05
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-01 16:07:00
 */
define(function () {
    return {
        //获取单个的元素节点
        get: function (el, parentNode) {
            //设置默认值
            parentNode = parentNode || document
            //返回元素
            return parentNode.querySelector(el)

        },
        gets: function (el, parentNode) {
            //设置默认值
            parentNode = parentNode || document
            //返回元素列表
            return parentNode.querySelectorAll(el)
        }
    }
})