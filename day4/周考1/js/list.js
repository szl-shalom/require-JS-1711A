/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-05 11:23:33
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-05 11:44:17
 */
define(function () {
    function List(opt) {
        Object.assign(this, opt)
        this.init()
    }

    List.prototype = {
        constructor: List,
        init() {
            this.render()
            this.bindEvent()
        },
        render() {
            this.wrap.innerHTML = this.data.map(function (item) {
                return `
                <div class="every">
                    <p>
                        <span>${item.name}</span>
                        <span>${item.date}</span>
                    </p>
                    <p>
                        <span>${item.content}</span>
                        <button class="anser">回复</button>
                    </p>
                    <div class="mask" style="display:none">
                        <textarea name="" id="" cols="30" rows="10" maxLength=50></textarea>
                        <button class="submit">提交</button>
                    </div>
                </div>
                `
            }).join("")

        },
        bindEvent() {
            //事件委托
            this.wrap.addEventListener("click", function (e) {
                var tar = e.target //获取事件源
                if (tar.classList.contains("anser")) {
                    tar.parentNode.nextElementSibling.style.display = "block"
                }

                if (tar.className === "submit") {
                    if (tar.previousElementSibling.value === "") {
                        alert("不可以为空")
                        return;
                    }
                    var p = document.createElement("p")
                    p.innerHTML = tar.previousElementSibling.value
                    tar.parentNode.parentNode.appendChild(p)
                    var date = new Date().toLocaleString()
                    var span = document.createElement("span")
                    span.innerHTML = date
                    span.style.float = "right"
                    p.appendChild(span)
                    tar.parentNode.style.display = "none"

                }
            })
        }
    }

    return List
})