define(function () {
    function F(opt) {
        Object.assign(this, opt)
        this.init()
    }

    F.prototype = {
        constructor: F,
        init: function () {
            // 渲染所有大数据
            this.render(this.data)
            // 添加事件
            this.bindEvent()
            console.log(this.data)
        },
        render: function (data) {
            this.content.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dt>
                        <img src="./images/${item.img}" alt="">
                    </dt>
                    <dd>
                        <h2>
                            <span class="price">￥${item.price}</span>
                            <span class="oldPrice">￥${item.oldPrice}</span>
                        </h2>
                        <p>${item.desc}</p>
                    </dd>
                </dl>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            this.left.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    // Tab切换
                    that.left.querySelector(".active") && that.left.querySelector(".active").classList.remove("active")
                    tar.classList.add("active")// 添加类名
                    // 排序
                    var data;
                    if (tar.innerHTML === "价钱") {
                        var ind = +tar.getAttribute("ind")
                        data = that.data.slice().sort(function (a, b) {
                            return ind ? a.price - b.price : b.price - a.price
                        })
                        ind ? tar.setAttribute("ind", 0) : tar.setAttribute("ind", 1)
                    } else if (tar.innerHTML === "销量") {
                        data = that.data.slice().sort(function (a, b) {
                            return a.oldPrice - b.oldPrice
                        })
                    } else {
                        data = that.data
                    }
                    // 筛选
                    if (that.hasInput.checked) {
                        data = data.filter(function (item) {
                            return item.has
                        })
                    }
                    // 渲染数据
                    that.render(data)
                }
            })


        }
    }
    return F;
})