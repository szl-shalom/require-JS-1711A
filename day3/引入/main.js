/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-04 19:51:00
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-05 10:43:03
 */
require.config({
    baseUrl: "js/",
    paths: {
        rr: "1"
    }
})
/**
 * @description: 
 * @param {type} 
 * @return: 
 */
require(["rr"], function (a) {
    console.log(a)
})