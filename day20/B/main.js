require.config({
    paths: {
        $: "./module/dom",
        p: "./module/page",
        s: "./module/sanji",
        f: "./module/filter",
        t: "./module/Tab",
        d: "./mock/data"
    }
})

require(["$", "p", "s", "f", "t", "d"], function ($, Page, SanJi, Filter, Tab, data) {
    console.log(data)
    new Filter({
        data: data,
        left: $.get(".left")
    })

    $.get(".content").addEventListener("mouseover", e => {
        var tar = e.target;
        if (tar.className === "every-one-img") {
            tar.parentNode.previousElementSibling.firstElementChild.src = tar.src
            tar.parentNode.querySelector(".active") && tar.parentNode.querySelector(".active").classList.remove("active")
            tar.classList.add("active")
        }
    })
})