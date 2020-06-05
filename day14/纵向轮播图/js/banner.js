define(["v"], function (V) {
    function Banner(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Banner.prototype = {
        constructor: Banner,
        init: function () {
            // 渲染轮播
            this.renderContainer()
            //渲染分页器
            this.renderPage(0)
            //自动播放
            this.autoPlay()
            // 调用事件函数
            this.bindEvent()
        },
        renderContainer: function () {
            //渲染
            this.container.innerHTML = this.data.map(function (item) {
                return `
                <div class="slide">
                    <img src="${item.img}" alt="">
                    <h2>${item.content}</h2>
                </div>
                `
            }).join("")
            // 克隆节点放到最后
            var res = this.container.firstElementChild.cloneNode(true)
            this.container.appendChild(res)
            // 设置高度
            this.container.style.height = this.container.children.length * this.box.offsetHeight + "px"
            // 初始化位置
            this.container.style.top = -this.index * this.box.offsetHeight + "px"
        },
        renderPage: function () {
            console.log(1)
            var that = this;
            this.page.innerHTML = this.data.map(function (item, index) {
                return `
                <li class=${index === that.index ? "active" : ""}>
                    <dl>
                        <dd>
                            <img src="${item.img}" alt="">
                        </dd>
                        <dt>
                            <h2>${item.title}</h2>
                            <p>${item.content}</p>
                        </dt>
                    </dl>
                </li>
                `
            }).join("")
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                // that.page.children[that.index === that.data.length ? 0 : that.index].classList.remove("active")

                // that.index++
                // that.page.children[that.index === that.data.length ? 0 : that.index].classList.add("active")
                // V(that.container, {
                //     top: -that.index * that.box.offsetHeight
                // }, 800)
                if (that.index === that.data.length) {
                    that.index = 0
                    that.container.style.top = 0
                }
                that.run(that.index + 1)
            }, this.time)
        },
        bindEvent: function () {
            var that = this;
            this.box.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })
            this.box.addEventListener("mouseleave", function () {
                that.autoPlay()
            });
            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.run(index)
                })
            })
        },
        run: function (i) {
            var that = this;
            that.page.children[that.index === that.data.length ? 0 : that.index].classList.remove("active")
            that.index = i
            that.page.children[that.index === that.data.length ? 0 : that.index].classList.add("active")
            V(that.container, {
                top: -that.index * that.box.offsetHeight
            }, 800)
            V(that.page.querySelector(".active"), "scroll", {
                container: that.page,
            })
        }
    }

    return Banner;
})