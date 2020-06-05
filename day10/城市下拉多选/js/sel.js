/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-12 11:28:15
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-12 15:06:55
 */
define(["v"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init() {
            //渲染
            this.render()
            //添加事件
            this.bindEvent()
        },
        render() {
            var str = ""
            this.data.forEach(item => {
                str += `<li>`
                str += item.childCity ? `<img src="./img/close.png" alt="">` : ""
                str += `<input type="checkbox">`
                for (var key in item) {
                    if (key != "childCity") {
                        str += `<span>${item[key]}</span>`
                        if (item.childCity) {
                            str += `<ul style="display:none">`
                            item.childCity.forEach(item => {
                                for (var key in item) {
                                    str += `
                                    <li>
                                        <input type="checkbox">
                                        <span>${item[key]}</span>
                                    </li>
                                    `
                                }
                            })
                            str += '</ul>'
                        }
                    }
                }
                str += "</li>"
            })

            this.ul.innerHTML = str
        },
        bindEvent() {
            //给input添加点击事件
            this.input.addEventListener("click", () => {
                if (this.ul.style.display !== "block") {
                    V(this.ul, "slideDown")
                }
            })
            //事件委托
            this.ul.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    if (tar.style.transform !== "rotateZ(90deg)") {
                        V(tar, {
                            rotateZ: 90
                        })
                        V(tar.parentNode.children[3], "slideDown")
                    } else {
                        V(tar, {
                            rotateZ: 0
                        })
                        V(tar.parentNode.children[3], "slideUp")
                    }
                }
            })
            //点击确定
            this.submit.addEventListener("click", () => {
                // 获取被选中的input
                var inputs = [...document.querySelectorAll("input:checked")];
                var res = inputs.map(item => {
                    return item.nextElementSibling.innerHTML
                })
                this.input.value = res.join("/")
                V(this.ul, "slideUp")
            })
        }
    }

    return Sel;
})