define(["v"], function (V) {
    function Banner(opt) {
        Object.assign(this, {
            index: 0
        }, opt)
        this.init()
    }
    Banner.prototype = {
        constructor: Banner,
        init: function () {
            //渲染图片
            this.change()
            // 渲染分页器
            this.render()
            //自动轮播
            this.autoPlay()
            //执行事件函数
            this.bindEvent()
        },
        change: function () {
            this.img.src = "./images/" + this.data[this.index].url
            V(this.img, "fadeIn", 1000)
            this.render()
        },
        render: function () {
            var that = this;
            this.page.innerHTML = this.data.map(function (item, index) {
                return `<li index=${index} class="${that.index === index ? "active" : ""}">${item.title}</li>`
            }).join("")
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.next.click()
            }, 2000)
        },
        bindEvent: function () {
            var that = this
            //鼠标进入
            this.banner.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })
            //鼠标离开
            this.banner.addEventListener("mouseleave", function () {
                that.autoPlay()
            })
            // 左按钮
            this.prev.addEventListener("click", function () {
                that.index--
                if (that.index < 0) {
                    that.index = that.data.length - 1
                }
                that.change()
            })
            // 有按钮
            this.next.addEventListener("click", function () {
                that.index++
                if (that.index > that.data.length - 1) {
                    that.index = 0
                }
                that.change()
            });
            //分页器
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = +tar.getAttribute("index")
                    that.change()
                }
            })
        }
    }

    return Banner
})