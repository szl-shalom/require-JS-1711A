/*
 * @Description: This is a JS program !onsol
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-06 10:26:24
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-06 11:04:12
 */


// 入口文件 一般从来加载其他模块的

//加载gift模块
require(["./js/gift"], function (Gift) {
    new Gift({
        index: 1
    })


})