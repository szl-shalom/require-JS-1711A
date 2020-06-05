define(function () {

    function Big(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Big.prototype = {
        constructor: Big,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            this.box.addEventListener("mouseenter", function () {
                that.conRight.style.display = "block"
                that.mask.style.display = "block"
                that.conRight.firstElementChild.src = that.box.querySelector("img").src

            })
            this.box.addEventListener("mouseleave", function () {
                that.conRight.style.display = "none"
                that.mask.style.display = "none"
            })
            document.addEventListener("mousemove", function (e) {
                var x = e.pageX - that.box.offsetLeft - that.mask.offsetWidth / 2,
                    y = e.pageY - that.box.offsetTop - that.mask.offsetHeight / 2;
                if (x < 0) x = 0
                if (y < 0) y = 0
                if (x > that.box.offsetWidth - that.mask.offsetWidth) x = that.box.offsetWidth - that.mask.offsetWidth
                if (y > that.box.offsetHeight - that.mask.offsetHeight) y = that.box.offsetHeight - that.mask.offsetHeight
                that.mask.style.left = x + "px";
                that.mask.style.top = y + "px";
                that.conRight.firstElementChild.style.marginLeft = -x * that.box.offsetWidth / that.mask.offsetWidth + "px"
                that.conRight.firstElementChild.style.marginTop = -y * that.box.offsetHeight / that.mask.offsetHeight + "px"
            })
        }
    }

    return Big;
})