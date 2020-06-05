/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-12 11:27:55
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-12 14:59:15
 */
require.config({
    baseUrl: "js/",
    paths: {
        d: "data",
        s: "sel",
        v: "../lib/velocity.min"
    }
})

require(["d", "s"], function (data, S) {
    new S({
        input: document.querySelector(".search"),
        ul: document.querySelector(".content-ul"),
        submit: document.querySelector(".submit"),
        data,

    })
})




// for....in

var obj = {
    a: 1,
    b: 2,
    c: 3
}

for (var key in obj) {
    console.log(key, obj[key])

}