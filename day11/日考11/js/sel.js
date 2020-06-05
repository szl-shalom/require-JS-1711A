define(function () {
    function Sel(opt) {
        Object.assign(this, opt)

        this.init()

    }
    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            this.input.addEventListener("click", () => {
                this.content.classList.toggle("active")
            })
        }
    }

    return Sel;
})