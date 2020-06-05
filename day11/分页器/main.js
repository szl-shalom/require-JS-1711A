require.config({
    baseUrl: "js/",
    paths: {
        d: "data",
        p: "page",
        $: "dom"
    }
})


require(["d", "p", "$"], function (data, Page, $) {
    new Page({
        data: data,// 数据
        content: $.get(".content"),// 内容盒子
        page: $.get(".page"),//页码盒子
        pageNum: 5,//每页显示的个数
        index: 7// 显示的下标
    })
})