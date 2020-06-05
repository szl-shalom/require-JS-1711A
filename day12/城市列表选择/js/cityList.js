define(["v"], function (V) {
    function CityList(opt) {
        Object.assign(this, opt)
        this.init()
    }

    CityList.prototype = {
        constructor: CityList,
        init: function () {
            // 调用头部渲染函数
            this.renderTitle()
            //调用事件函数
            this.bindEvent()
        },
        renderTitle: function () {
            var obj = this.data.data.citylist
            var arr = []
            var str = "<span>热门</span>"
            for (var key in obj) {
                arr.push(key)
            }
            while (arr.length > 0) {
                str += `<span>${arr.splice(0, 4).join("")}</span>`
            }
            this.title.innerHTML = str;
        },
        bindEvent: function () {
            //头部点击事件
            this.title.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    // 添加动画
                    // this.underLine.style.left = tar.offsetLeft + "px"
                    V(this.underLine, {
                        left: tar.offsetLeft
                    })
                    //渲染对用的内容
                    if (tar.innerHTML === "热门") {
                        // 热门
                        var data = this.data.data.hotcitylist
                        this.content.innerHTML = data.map(function (item) {
                            return `
                                <span>${item.name}</span>
                            `
                        }).join("")
                    } else {
                        //字母
                        var citylist = this.data.data.citylist
                        var str = ""
                        for (var i = 0; i < tar.innerHTML.length; i++) {
                            var key = tar.innerHTML[i]
                            str += `<li><b>${key}</b>`
                            citylist[key].forEach(function (item) {
                                for (var key in item) {
                                    str += `<span>${key}</span>`
                                }
                            })
                            str += "</li>"
                        }
                        this.content.innerHTML = str;
                        `
                        <li>
                            <b>A</b>
                            <span>安庆市</span>
                            <span>鞍山市</span>
                        </li>
                        `
                    }
                }
            })
            // input聚焦
            this.input.addEventListener("focus", () => {
                // this.box.style.display = "block"4
                V(this.box, "fadeIn")
            })
            //内容事件委托
            this.content.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    this.input.value = tar.innerHTML
                    // this.box.style.display = "none"
                    V(this.box,"fadeOut")
                }
            })
        }
    }

    return CityList
})