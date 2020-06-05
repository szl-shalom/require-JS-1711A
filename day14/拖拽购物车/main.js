require(["./js/data", "./js/drag"], function (data, Drag) {
    new Drag({
        data: data,
        left: document.querySelector(".left"),
        tbody: document.querySelector("tbody"),
        right: document.querySelector(".right"),
        allCount: document.querySelector(".qty"),
        allPrice: document.querySelector(".amt")
    })
})