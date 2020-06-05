require.config({
    baseUrl: "js/",
    paths: {
        d: "data",
        $: "dom",
        s: "sele",
        v: "../lib/velocity.min"
    }
})

require(["d", "$", "s"], function (data, $, Sele) {
    new Sele({
        data: data,
        nav: $.get(".nav")
    })
})