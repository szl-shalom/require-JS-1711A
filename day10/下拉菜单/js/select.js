/*
 * @Description: This is a JS program 
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-12 10:35:47
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-12 10:55:06
 */
define(["../lib/velocity.min"], function (V) {
    function Select(opt) {
        Object.assign(this, opt)

        // 初始化
        this.init()
    }

    Select.prototype = {
        constructor: Select,
        init() {
            //数据渲染
            this.render()
            //添加事件
            this.bindEvent()
        },
        bindEvent() {
            //点击inout框
            this.input.addEventListener("click", () => {
                //显示下拉框
                // this.ul.style.display = "block"
                V(this.ul, "slideDown") //下拉
                //三角动画
                V(this.span, {
                    rotateZ: 180
                })
            })

            //点击下拉菜单
            this.ul.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    this.input.value = tar.innerHTML
                    // this.ul.style.display = "none"
                    V(this.ul, "slideUp")
                    V(this.span, {
                        rotateZ: 0
                    })
                }
            })
        },
        render() {
            this.ul.innerHTML = this.data.map(function (item) {
                return `
                <li>
                   ${item}
                </li>
                `
            }).join("")
        }
    }

    return Select;
})