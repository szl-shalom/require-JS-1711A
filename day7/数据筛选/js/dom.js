/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com  /szl-shalom/
 * @Date: 2019-11-08 10:42:45
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-08 10:43:17
 */
define(function () {
    return {
        get(el, parentNode = document) {
            return parentNode.querySelector(el)
        },
        gets(el, parentNode = document) {
            return parentNode.querySelectorAll(el)
        }
    }
})