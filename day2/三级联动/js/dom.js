/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-02 10:25:31
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-02 10:26:16
 */
define(function () {
    return {
        get: function (el, parent) {
            parent = parent || document
            return parent.querySelector(el)
        },
        gets: function (el, parent) {
            parent = parent || document
            return parent.querySelectorAll(el)
        }
    }
})