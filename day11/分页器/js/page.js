define(function () {
    function Page(opt) {
        //和合并从参数并 设置默认参数
        Object.assign(this, {
            index: 1,
            pageNum: 5
        }, opt)


        //初始化
        this.init()
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            // 获取数据
            var data = this.data.slice(this.index * this.pageNum, (this.index + 1) * this.pageNum)
            // 获取分页器的长度
            this.pageLen = Math.ceil(this.data.length / this.pageNum)
            //渲染数据
            this.render(data)
            //渲染页码
            this.renderPage()
            //调用事件
            this.bindEvent()
        },
        render: function (data) {
            this.content.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.sex}</td>
                    <td>${item.like}</td>
                </tr>
                `
            }).join("")
        },
        renderPage: function () {
            var str = "";
            for (var i = 1; i <= this.pageLen; i++) {
                str += `<li class=${i - 1 === this.index ? "active" : ""}>${i}</li>`
            }
            this.page.innerHTML = str;
        },
        bindEvent: function () {
            this.page.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    this.index = tar.innerHTML - 1;//修改下标
                    // 获取数据
                    var data = this.data.slice(this.index * this.pageNum, (this.index + 1) * this.pageNum)
                    //渲染数据
                    this.render(data)
                    //渲染页码
                    this.renderPage()

                    
                    // tab切换
                    // this.page.querySelector(".active") && this.page.querySelector(".active").classList.remove("active")
                    // tar.classList.add("active") //给点击添加类名
                }

            })
        }
    }


    return Page;
})