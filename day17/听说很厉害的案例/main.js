require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        t: "tab",
        b: "banner",
        d: "data",
        v: "../lib/velocity.min",
        f: "floor",
        tip: "tip"
    }
})

require(["$", "t", "b", "d", "f", "tip"], function ($, Tab, Banner, data, Floor, Tip) {
    // 轮播
    new Banner({
        data: data.bannerData,
        index: 2,
        prev: $.get(".prev"),
        next: $.get(".next"),
        page: $.get(".page>ul"),
        img: $.get(".container>img"),
        banner: $.get(".banner")
    })
    //划入tab显示隐藏
    $.get(".tab").addEventListener("mouseenter", function () {
        $.get(".right").style.display = "block"
    })
    $.get(".tab").addEventListener("mouseleave", function () {
        $.get(".right").style.display = "none"
    })

    //渲染tab
    $.get(".left").innerHTML = data.tabData.map(function (item) {
        return `
            <span>${item.name}</span>
        `
    }).join("")
    // console.log(data.tabData)
    $.get(".right").innerHTML = data.tabData.map(function (item) {
        return `
        <div class="every">
            <div class="title">
              ${item.children.map(function (item) {
            return `
                 <span>${item.name}</span>
                `
        }).join("")}
            </div>
            <div class="content">
                ${item.children.map(function (item) {
            return `
                      <div class="con">${item.children.join("||")}</div>
                    `
        }).join("")}
            </div>
        </div>
        `
    }).join("")
    // 外部tab
    new Tab({
        title: $.get(".left"),
        content: $.get(".right"),
        className: "active1",
        type: "mouseover"
    });
    // 内部Tab
    [...$.get(".right").children].forEach(function (item) {
        new Tab({
            title: item.children[0],
            content: item.children[1],
        })
    })

    // 楼层
    new Floor({
        floor: $.get(".floor>ul"),
        floorLeft: $.get(".floor-left")
    });
    // 提示框
    [...$.gets(".tip-right>ul>li")].forEach(function (item) {
        new Tip({
            el: item
        })
    })
})