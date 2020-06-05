/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-07 15:11:58
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-07 15:12:41
 */
define(function () {
    return {
        get(el, parentNode = document) {
            return parentNode.querySelector(el);
        },
        gets(el, parentNode = document) {
            return parentNode.querySelectorAll(el);
        }
    }
})