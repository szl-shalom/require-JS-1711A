define(function () {
    function T(opt) {
        Object.assign(this, opt)
        this.init()
    }
    T.prototype = {
        constructor: T,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            var offsetTop = that.el.offsetTop
            document.addEventListener("scroll", function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop >= offsetTop) {
                    that.el.style.position = "fixed";
                    that.el.style.top = "0"
                    that.el.nextElementSibling.style.marginTop = that.el.offsetHeight + "px"
                } else {
                    that.el.style.position = "";
                    that.el.nextElementSibling.style.marginTop = 0
                }
            })
        }
    }

    return T;
})