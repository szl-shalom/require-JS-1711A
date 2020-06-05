require.config({
    baseUrl: "js/",
    paths: {
        d: "data",
        s: "sel",
        $: "dom",
    }
})


require(["$", "d", "s"], function ($, data, Sel) {
    new Sel({
        input: $.get(".search"),
        box: $.get(".box"),
        data: data,
        content: $.get(".content>ul")
    })
})