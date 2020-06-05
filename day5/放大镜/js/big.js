/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-06 16:24:08
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-06 20:37:32
 */
define(function () {
    function D(opt) {
        Object.assign(this, opt)
        this.init()
    }


    D.prototype = {
        init() {
            this.bindEvent()
        },
        bindEvent() {

            this.left.onmouseenter = (e) => {
                this.right.classList.add("active")
                this.mask.classList.add("active")

            }

            this.left.onmousemove = (e) => {
                var x = e.pageX - this.mask.offsetWidth / 2,
                    y = e.pageY - this.mask.offsetHeight / 2;

                if (x < 0) x = 0
                if (y < 0) y = 0
                if (x > 400) x = 400
                if (y > 400) y = 400
                this.mask.style.left = x + "px";
                this.mask.style.top = y + "px";

                this.right.firstElementChild.style.marginLeft = - x * 5 + "px"
                this.right.firstElementChild.style.marginTop = - y * 5 + "px"
            }

            this.left.onmouseleave = () => {
                this.right.classList.remove("active")
                this.mask.classList.remove("active")
            }
        }
    }

    return D
})