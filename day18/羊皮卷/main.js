require.config({
    baseUrl: "js/",
    paths: {
        c: "cortDownTime",
        d: "data",
        $: "dom",
        f: "filter",
        t: "top",
    }
})
require(["c", "d", "$", "f", "t"], function (C, data, $, Filter, myTop) {
    new C({
        el: $.get(".right"),
        furTime: new Date(2020, 0, 13, 12)
    })

    new Filter({
        data: data,
        content: $.get(".content"),
        left: $.get(".left"),
        hasInput:$.get('.hasInput')
    })

    new myTop({
        el: $.get(".nav"),

    })

})