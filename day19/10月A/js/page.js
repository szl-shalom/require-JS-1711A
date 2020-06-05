// //数据的长度          每页显示的个数
// Math.ceil(this.data.length / this.pageNum)   // =>总页码


// // this.index  下标
// // this.pageNum 每页显示的个数

// // 获取对应页码的数据
// this.data.slice(this.pageNum * this.index, this.pageNum * (this.index + 1)) 

define(function () {
    function R(opt) {
        Object.assign(this, opt)
        this.init()
    }

    R.prototype = {
        constructor: R,
        init: function () {
            this.pageLen = Math.ceil(this.data.length / this.pageNum)
            var data = this.data.slice(this.pageNum * this.index, this.pageNum * (this.index + 1))
            this.renderContent(data)
            this.renderPage()
            this.bindEvent()
        },
        renderContent: function (data) {
            this.page.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dd>
                        <img src="./images/${item.img}" alt="">
                    </dd>
                    <dt>
                        <h3>${item.title}</h3>
                    </dt>
                </dl>
                `
            }).join((""))
        },
        renderPage: function () {
            var str = ""
            for (var i = 1; i <= this.pageLen; i++) {
                str += ` <li class=${i - 1 === this.index ? "active" : ""}>${i}</li>`
            }
            this.footer.innerHTML = str
        },
        bindEvent: function () {
            var that = this;
            this.footer.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1
                    var data = that.data.slice(that.pageNum * that.index, that.pageNum * (that.index + 1))
                    that.renderContent(data)
                    that.renderPage()
                }
            })
        }
    }

    return R;
})