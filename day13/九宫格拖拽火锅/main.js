require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        d: "drag",
        v:"../lib/velocity.min"
    }
})


require(["$", "d"], function ($, Drag) {
    new Drag({
        vegetable: $.get(".vegetable"),
        box: $.get(".box>ul")
    })
})