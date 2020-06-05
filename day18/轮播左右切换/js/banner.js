define(function () {
    function Banner(opt) {
        Object.assign(this, {
            index: 0
        }, opt)
        this.init()
    }

    Banner.prototype = {
        constructor: Banner,
        init: function () {
            this.bindEvent()
            this.autuPlay()
        },
        bindEvent: function () {
            var that = this;
            this.next.addEventListener("click", function () {
                this.disabled = true
                setTimeout(() => {
                    this.disabled = false
                }, 1000)
                that.change(that.index >= 4 ? 0 : that.index + 1)

            })
            this.prev.addEventListener("click", function () {
                this.disabled = true
                setTimeout(() => {
                    this.disabled = false
                }, 1000)
                that.change(that.index <= 0 ? 4 : that.index - 1)
            })
            this.banner.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })
            this.banner.addEventListener("mouseleave", function () {
                that.autuPlay()
            })
        },
        autuPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.change(that.index >= 4 ? 0 : that.index + 1)
            }, 2000)
        },
        change: function (i) {
            var that = this;
            that.container.children[that.index].classList.remove("active")
            that.index = i
            that.container.children[that.index].classList.add("active")
        }
    }

    return Banner;
})