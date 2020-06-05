require.config({
    baseUrl: "js/",
    paths: {
        b: "banner",
        d: "data",
        $: "dom",
        v: "../lib/velocity.min"
    }
})

require(["b", "d", "$"], function (Banner, data, $) {
    new Banner({
        box: $.get(".box"),
        container: $.get(".container"),
        page: $.get(".page>ul"),
        index: 1,
        data: data,
        time: 2000
    })
})