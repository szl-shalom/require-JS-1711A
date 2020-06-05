require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        c: "cityList",
        d: "../mock/data",
        v: "../lib/velocity.min"
    }
})


require(["$", "c", "d"], function ($, CityList, data) {
    new CityList({
        data: data,
        title: $.get(".title"),
        content: $.get(".content>ul"),
        underLine: $.get(".underLine"),
        input: $.get(".search"),
        box: $.get(".box")
    })
})