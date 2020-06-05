require.config({
    baseUrl: "js/",
    paths: {
        s: "sel"
    }

})

require(["s"], function (Sel) {
    new Sel({
        input: document.querySelector(".search"),
        content: document.querySelector(".content")
    })
})