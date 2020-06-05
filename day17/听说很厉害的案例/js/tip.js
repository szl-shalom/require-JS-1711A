define(["v"], function (V) {
    function Tip(opt) {
        Object.assign(this, opt)
        this.maskCss = `width:50px;
        height:80px;
        background: red;
        position: fixed;
        top:0;
        left:0;`


        this.init()
    }

    Tip.prototype = {
        constructor: Tip,
        init: function () {
            this.bindEvent(0)
        },
        bindEvent: function () {
            var that = this;
            this.el.addEventListener("mouseenter", function () {
                that.create()
                that.setPos()
            })

            this.el.addEventListener("mouseleave", function () {
                that.mask.remove()
            })
        },
        create: function () {
            this.mask = document.createElement("div")
            this.mask.className = "mask";
            this.mask.style = this.maskCss;
            document.body.appendChild(this.mask)
        },
        setPos: function () {
            var obj = this.el.getBoundingClientRect();
            this.mask.style.top = obj.top + obj.height / 2 - this.mask.offsetHeight / 2 + "px"
            V(this.mask, {
                left: [obj.left - obj.width, obj.left - obj.width - 50],
                opacity: [1, 0]
            })
            // this.mask.style.left = obj.left - obj.width + "px"

        }
    }

    return Tip
})