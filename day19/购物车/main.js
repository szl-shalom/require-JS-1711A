require.config({
    baseUrl: "js/",
    paths: {
        c: "car",
        $: "dom",
    }
})

require(["c", "$"], function (Car, $) {
    console.log($)
    new Car({
        el: $.get("table"),
        tbody: $.get("tbody"),
        allPrice: $.get(".all-price")
    })
})