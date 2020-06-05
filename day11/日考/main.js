require.config({
    baseUrl: "js/",
    paths: {
        s: "sel"
    }
})

require(["s"], function (Sel) {
    new Sel({
        input: document.querySelector(".user-select"),
        content: document.querySelector(".content"),
        btn: document.querySelector(".say"),
    })
})