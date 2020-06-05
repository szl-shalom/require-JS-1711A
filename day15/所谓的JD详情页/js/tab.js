define(function () {
    function Tab(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener(that.type, function () {
                    that.title.querySelector("." + that.className) && that.title.querySelector("." + that.className).classList.remove(that.className)
                    item.classList.add(that.className)
                    that.callback && that.callback(index, item)
                }, false)
            })
        }
    }

    return Tab;
})