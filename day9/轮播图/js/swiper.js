/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-11 20:37:03
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-11 20:50:28
 */
define(["../lib/velocity.min"], function (V) {
    function Swiper(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Swiper.prototype = {
        constructor: Swiper,
        init() {
            this.img.src = "images/" + this.data[this.index]
            this.bindEvent()
        },
        bindEvent() {
            this.right.addEventListener("click", () => {
                this.index++
                if (this.index > this.data.length - 1) {
                    this.index = 0
                }
                this.img.src = "images/" + this.data[this.index]
                V(this.img, "fadeIn")
            })
            this.left.addEventListener("click", () => {
                this.index--
                if (this.index < 0) {
                    this.index = this.data.length - 1
                }
                this.img.src = "images/" + this.data[this.index]
                V(this.img, "fadeIn")
            })
        }
    }

    return Swiper

})