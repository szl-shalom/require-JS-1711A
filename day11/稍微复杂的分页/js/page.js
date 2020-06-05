define(function () {
    function Page(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            //分页器的长度
            this.pageLen = Math.ceil(this.length / this.pageNum)
            //渲染分页器
            this.renderPage()
            //调用事件函数
            this.bindEvent()
        },
        renderPage: function () {
            var str = ""
            if (this.index < 2) {
                for (var i = 1; i <= 5; i++) {
                    str += ` <li class=${i - 1 === this.index ? "active" : ""}>${i}</li>`
                }
            } else if (this.index >= this.pageLen - 2) {
                for (var i = this.pageLen - 4; i <= this.pageLen; i++) {
                    str += ` <li class=${i - 1 === this.index ? "active" : ""}>${i}</li>`
                }
            } else {
                str = `
                    <li>${this.index - 1}</li>
                    <li>${this.index}</li>
                    <li class="active">${this.index + 1}</li>
                    <li>${this.index + 2}</li>
                    <li>${this.index + 3}</li>
                `
            }
            this.page.innerHTML = str
            this.index === 0 ? this.prev.disabled = true : this.prev.disabled = false
            this.index === this.pageLen - 1 ? this.next.disabled = true : this.next.disabled = false
        },
        bindEvent: function () {
            this.page.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    this.index = tar.innerHTML - 1
                    this.renderPage()
                }
            })

            this.prev.addEventListener("click", e => {
                this.index--
                this.renderPage()
            })
            this.next.addEventListener("click", e => {
                this.index++
                this.renderPage()
            })
        }
    }

    return Page;
})