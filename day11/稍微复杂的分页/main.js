require.config({
    baseUrl: "js/",
    paths: {
        p: "page"
    }
})

require(["p"], function (Page) {
    new Page({
        page: document.querySelector(".page"),
        length: 200,
        pageNum: 10,
        index: 5,
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next")
    })
})