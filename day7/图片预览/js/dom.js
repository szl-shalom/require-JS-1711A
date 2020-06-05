/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-08 15:24:16
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-08 15:26:56
 */
define(function () {
    return {
        get(el, parent = document) {
            return parent.querySelector(el);
        },
        gets(el, parent = document) {
            return parent.querySelectorAll(el);
        }
    }
})