require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        d: "data",
        r: "res",
        v: "../lib/velocity.min"
    }
})

require(["$", "d", "r"], function ($, data, Res) {
    new Res({
        data: data,
        left: $.get(".left"),
        input: $.get(".search"),
        submit: $.get(".submit"),
        radios: $.gets(".right>.sele>input")
    })
})