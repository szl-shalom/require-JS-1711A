define(["v"], function (V) {
    function Banner(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Banner.prototype = {
        constructor: Banner,
        init: function () {
            //渲染数据
            this.render()
            // 自动轮播
            this.autoPlay()
            //添加事件
            this.bindEvent()
        },
        render: function () {
            var that = this;
            //渲染图片
            this.container.innerHTML = this.data.map((item) =>`<img src="./images/${item}" alt="">`).join("")
            // 渲染分页器以及初始化高亮效果
            this.page.innerHTML = this.data.map(function (item, index) {
                return `
                <li class="${that.index === index ? "active" : ""}" index=${index}></li>`
            }).join("")
            // 初始化container的位置
            this.container.style.marginLeft = - this.index * this.wrap.offsetWidth + "px"

            // 无缝 克隆第一张图片到container盒子的最后
            this.container.appendChild(this.container.firstElementChild.cloneNode(1))
            //设置contianer的宽度
            this.container.style.width = this.wrap.offsetWidth * this.container.children.length + "px"
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                // that.page.children[that.index === that.data.length ? 0 : that.index].classList.remove("active")
                // if (that.index === that.data.length) {
                //     that.index = 0;
                //     that.container.style.marginLeft = 0
                // }
                // that.index++
                // // that.container.style.marginLeft = -that.wrap.offsetWidth * that.index + "px"
                // V(that.container, {
                //     marginLeft: -that.wrap.offsetWidth * that.index
                // })
                // that.page.children[that.index === that.data.length ? 0 : that.index].classList.add("active")

                // if (that.index === that.data.length) {
                //     that.index = 0;
                //     that.container.style.marginLeft = 0
                // }
                // that.change(that.index + 1)
                that.next.click()
            }, 2000)
        },
        bindEvent: function () {
            var that = this;
            //鼠标进入
            this.wrap.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
                that.prev.classList.add("active")
                that.next.classList.add("active")
            })
            // 鼠标离开
            this.wrap.addEventListener("mouseleave", function () {
                that.autoPlay()
                that.prev.classList.remove("active")
                that.next.classList.remove("active")
            })
            // 有按钮点击
            that.next.addEventListener("click", function () {
                if (that.index === that.data.length) {
                    that.index = 0;
                    that.container.style.marginLeft = 0
                }
                that.change(that.index + 1)
            })
            //左按钮
            that.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.data.length;
                    that.container.style.marginLeft = -that.index * that.wrap.offsetWidth + "px"
                }
                that.change(that.index - 1)
            })
            // 分页器点击
            that.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    var index = +tar.getAttribute("index")
                    that.change(index)
                }
            })
        },
        change: function (i) {
            var that = this;
            that.page.children[that.index === that.data.length ? 0 : that.index].classList.remove("active")
            that.index = i
            V(that.container, {
                marginLeft: -that.wrap.offsetWidth * that.index
            })
            that.page.children[that.index === that.data.length ? 0 : that.index].classList.add("active")
        }

    }

    return Banner;
})