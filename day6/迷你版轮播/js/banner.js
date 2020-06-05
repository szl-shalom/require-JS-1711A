/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-07 16:05:38
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-07 16:35:02
 */
define(["../lib/velocity.min"], function (V) {
    function Banner(opt) {
        Object.assign(this, { index: 0 }, opt)
        this.init()
    }

    Banner.prototype = {
        constructor: Banner,
        init() {
            //渲染
            this.render()
            //事件
            this.bindEvent()
        },
        render() {
            this.container.innerHTML = this.data.map(item => {
                return `
                    <li><img src="images/${item}" alt=""></li>
                `
            }).join("")
            this.container.style.width = 200 * this.data.length + "px"
        },
        bindEvent() {
            this.right.onclick = () => {
                this.index++
                this.index > this.data.length - 4 ? this.index = this.data.length - 4 : null
                V(this.container, {
                    marginLeft: -200 * this.index
                })
                // this.container.style.marginLeft = -200 * this.index + "px"
            }

            this.left.onclick = () => {
                this.index--
                this.index < 0 ? this.index = 0 : null
                if (this.index < 0) {
                    this.index = 0
                } else {
                    V(this.container, {
                        marginLeft: -200 * this.index
                    })
                }
            }

            this.container.onclick = e => {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    this.wrap.style.background = "#" + Math.random().toString(16).substr(2, 6);
                    // 切换
                    this.container.querySelector(".active") && this.container.querySelector(".active").classList.remove("active")
                    tar.classList.add("active")
                }
            }
        }
    }

    return Banner;
})