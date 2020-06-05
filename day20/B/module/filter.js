define(["p", "$"], (Page, $) => {
    class Filter {
        constructor(opt) {
            Object.assign(this, opt)
            this.init()
        }
        init() {
            this.bindEvent()
        }
        bindEvent() {
            this.left.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "BUTTON") {
                    this.left.querySelector(".active").classList.remove("active")
                    tar.classList.add("active")
                    var type = tar.getAttribute("type")
                    var data = this.data.slice().sort(function (x, y) {
                        return y[type] - x[type]
                    })
                    new Page({
                        data: data,
                        pageNum: 16,
                        index: 0,
                        prev: $.get(".prev"),
                        next: $.get(".next"),
                        allCount: $.get(".all-count"),
                        currentPage: $.get(".all-count"),
                        content: $.get(".content"),
                        allPage:$.get(".all-page")
                    })
                }
            })
            new Page({
                data: this.data,
                pageNum: 16,
                index: 0,
                prev: $.get(".prev"),
                next: $.get(".next"),
                allCount: $.get(".all-count"),
                currentPage: $.get(".current-page"),
                content: $.get(".content"),
                allPage:$.get(".all-page")
            })
        }
    }
    return Filter
})