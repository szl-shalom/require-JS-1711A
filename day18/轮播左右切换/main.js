require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        b: "banner"
    }
})

require(["$", "b"], function ($, Banner) {
    new Banner({
        container: $.get(".container"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        banner: $.get(".banner")
    })
})