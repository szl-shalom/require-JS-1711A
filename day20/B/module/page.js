define(() => {
    class Page {
        constructor(opt) {
            Object.assign(this, opt)
            this.pageLen = Math.ceil(this.data.length / this.pageNum);
            this.curData = this.data.slice(this.index * this.pageNum, (this.index + 1) * this.pageNum)
            this.allCount.innerHTML = this.data.length;
            this.allPage.innerHTML = this.pageLen
            console.log(this)
            this.init()
        }
        init() {
            this.render()
            this.bindEvent(0)
        }
        render() {
            this.content.innerHTML = this.curData.map(item => {
                return `
                <div class="con">
                    <div class="big">
                        <div class="img">
                            <img src="${item.img}" alt="">
                        </div>
                        <div class="tab">
                            ${item.imgs.map(item => {
                    return `
                                    <img src="${item}" alt="" class="every-one-img">
                                `
                }).join("")}
                        </div>
                    </div>
                    <h3>￥${item.price.toFixed(2)}</h3>
                    <p>
                        ${item.title}
                    </p>
                    <p>
                        ${item.comment > 10000 ? `${parseInt(item.comment / 10000)}+W` : `${item.comment}`}评价
                        <span>
                            销量：${item.sale}
                        </span>
                    </p>
                </div>
                `
            }).join("")
        }
        bindEvent() {
            this.prev.addEventListener("click", () => {
                if (this.index === 0) return;
                this.index--
                this.curData = this.data.slice(this.index * this.pageNum, (this.index + 1) * this.pageNum)
                this.render()
                this.currentPage.innerHTML = this.index + 1
            })

            this.next.addEventListener("click", () => {
                if (this.index === this.pageLen - 1) return;
                this.index++
                this.curData = this.data.slice(this.index * this.pageNum, (this.index + 1) * this.pageNum)
                this.render()
                this.currentPage.innerHTML = this.index + 1
            })
        }
    }
    return Page
})