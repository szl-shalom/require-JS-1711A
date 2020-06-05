require(["./js/big"], function (D) {
    new D({
        wrap: document.querySelector(".wrap"),
        left: document.querySelector(".left"),
        right: document.querySelector(".right"),
        mask: document.querySelector(".mask"),
    })
})  