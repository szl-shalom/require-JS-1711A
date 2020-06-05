/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-05 11:18:21
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-05 11:21:59
 */
define(function () {
    return {
        get(el, parent = document) {
            return parent.querySelector(el)
        },
        gets(el, parent = document) {
            return parent.querySelectorAll(el)
        },
    }
})