define(["v"], function (V) {
    function Res(opt) {
        Object.assign(this, {
            index: -1
        }, opt)
        this.init()
    }

    Res.prototype = {
        constructor: Res,
        init: function () {
            var that = this
            // 初始化渲染
            this.data.forEach(function (item) {
                that.render(item)
            })
            // 调用事件函数
            this.bindEvent()

        },
        render: function (str) {
            var span = document.createElement("span")
            span.innerHTML = `
                ${str}☝<b>1</b>
            `
            this.left.appendChild(span)
            this.setPos(span)
        },
        setPos: function (span) {
            span.style.position = "absolute";
            span.style.left = "100%";
            if (this.index < 0) {
                console.log(1)
                span.style.top = this.random(0, this.left.offsetHeight - span.offsetHeight) + "px"
            } else {
                span.style.top = this.random(this.index / 3 * this.left.offsetHeight, (this.index + 1) / 3 * this.left.offsetHeight - span.offsetHeight) + "px"
            }

            span.style.color = "#" + Math.random().toString(16).substr(2, 6);
            this.run(span)
        },
        random: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        run: function (span) {
            var that = this;
            V(span, {
                left: -span.offsetWidth
            }, {
                duration: that.random(1000, 3000),
                complete: function () {
                    span.remove()
                }
            })
        },
        bindEvent: function () {
            var that = this;
            this.left.addEventListener("mouseover", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    V(tar, "pause")
                }
            })
            this.left.addEventListener("mouseout", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    V(tar, "resume")
                }
            })
            this.left.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    tar.firstElementChild.innerHTML++
                }
            })
            this.submit.addEventListener("click", function () {
                that.render(that.input.value)
            })
            document.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    that.render(that.input.value)
                }
            })
            this.radios.forEach(function (item, index) {
                item.onclick = function () {
                    that.index = index - 1
                }
            })
        }

    }
    return Res;
})