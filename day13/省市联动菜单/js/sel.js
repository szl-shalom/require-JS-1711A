define(function () {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            console.log(this.data)
            // 数据渲染
            this.render()
            //事件函数
            this.bindEvent()
        },
        render: function () {
            this.content.innerHTML = this.data.map(function (item) {
                return `
                <li>
                <input type="checkbox" class="parent-check">
                   <span>${item.name}</span>
                    <ol>
                       ${item.city.map(function (item) {
                    return `
                            <li>
                                <input type="checkbox" class="child-check">
                                <span>${item.name}</span>
                            </li>
                        `

                }).join("")}
                    </ol>
                </li>
                `
            }).join("")
        },
        bindEvent() {
            var that = this;
            // 鼠标进入离开
            [...this.content.children].forEach(function (item) {
                item.addEventListener("mouseenter", function () {
                    item.lastElementChild.style.display = "block"
                })
                item.addEventListener("mouseleave", function () {
                    item.lastElementChild.style.display = "none"
                })
            })

            //事件委托
            this.box.addEventListener("click", function (e) {
                var tar = e.target;
                switch (tar.className) {
                    case "parent-check":
                        var inputs = [...tar.nextElementSibling.nextElementSibling.querySelectorAll(".child-check")]
                        inputs.forEach(function (item) {
                            item.checked = tar.checked
                        })
                        break;
                    case "child-check":
                        var inputs = tar.parentNode.parentNode.querySelectorAll(".child-check:checked")
                        tar.parentNode.parentNode.previousElementSibling.previousElementSibling.checked = !!inputs.length
                        // if (inputs.length) {
                        //     tar.parentNode.parentNode.previousElementSibling.previousElementSibling.checked = true
                        // } else {
                        //     tar.parentNode.parentNode.previousElementSibling.previousElementSibling.checked = false
                        // }
                        break;
                    case "clear":
                        [...that.box.querySelectorAll("input")].forEach(function (item) {
                            item.checked = false
                        })
                        break
                    case "check-all":
                        [...that.box.querySelectorAll("input")].forEach(function (item) {
                            item.checked = true
                        })
                        break
                    case "close":
                        that.box.style.display = "none"
                        break
                    case "submit":
                       that.input.value = [...that.box.querySelectorAll("input:checked")].map(function (item) {
                            return item.nextElementSibling.innerHTML
                        }).join("||")
                        that.box.style.display = "none"

                        break;
                }
            })

            //input聚焦
            that.input.addEventListener("focus", function () {
                that.box.style.display = "block"
            })
        }
    }

    return Sel;
})