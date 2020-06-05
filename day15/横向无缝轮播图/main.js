require.config({
    baseUrl: "js/",
    paths: {
        d: "data",
        b: "banner",
        $: "dom",
        v: "../lib/velocity.min"
    }
})


require(["d", "b", "$"], function (data, Banner, $) {
    new Banner({
        data: data,
        wrap: $.get(".wrap"),
        container: $.get(".container"),
        page: $.get(".page"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        index: 1
    })
})


