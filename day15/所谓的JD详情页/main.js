require.config({
    baseUrl: "js/",
    paths: {
        b: "banner",
        $: "dom",
        t: "tab",
        big: "big",
        v: "../lib/velocity.min"
    }
})


require(["b", "$", "t", "big", "v"], function (Banner, $, Tab, Big, V) {
    [...$.gets(".every")].forEach(function (item) {
        new Tab({
            title: item,
            type: "mouseover",
            className: "active"
        })
    })

    new Tab({
        title: $.get(".content"),
        type: "click",
        className: "active",
        callback: function (index, item) {
            $.get(".con>img").src = item.src
        }
    })

    new Big({
        box: $.get(".box"),
        conRight: $.get(".con-right"),
        mask: $.get(".mask"),
    })

    
    var index = 0;
    $.get(".next").addEventListener("click", function () {
        index < $.get(".content").children.length - 4 && index++
        V($.get(".content"), {
            marginLeft: -index * 100
        })
    })

    $.get(".prev").addEventListener("click", function () {
        index > 0 && index--
        V($.get(".content"), {
            marginLeft: -index * 100
        })
    })

})