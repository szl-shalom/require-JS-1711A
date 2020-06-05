/*
 * @Description: This is a JS program !cosno
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-08 15:24:09
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-08 19:40:39
 */
define(function () {
    function Img(opt) {
        Object.assign(this, opt)
        this.init()

    }

    Img.prototype = {
        constructor: Img,
        init() {
            //创建遮罩层弹框
            this.create()
            //调用事件函数
            this.bindEvent()
        },
        create() {
            this.mask = document.createElement("div");
            this.mask.classList.add("mask");
            this.mask.innerHTML = `
            <div class="content">
                <span class="del">X</span>
                <img src="./images/${this.data[this.index]}" alt="">
                <button class="left"><</button>
                <button class="right">></button>
                <h2 style="text-align:center">
                  <span class="num">${this.index + 1}</span>
                  /
                  <span>${this.data.length}</span>  
                </h2>
            </div>
            `
            document.body.appendChild(this.mask)
        },
        bindEvent() {
            this.mask.addEventListener("click", e => {
                var tar = e.target;
                //删除
                if (tar.classList.contains("del")) {
                    this.mask.remove()
                }
                //右按钮
                if (tar.className === "right") {
                    this.index++
                    if (this.index > this.data.length - 1) {
                        this.index = this.data.length - 1
                    }
                    this.mask.querySelector("img").src = "images/" + this.data[this.index]
                    this.mask.querySelector(".num").innerHTML = this.index + 1;
                }
                if (tar.className === "left") {
                    this.index--
                    if (this.index < 0) {
                        this.index = 0
                    }
                    this.mask.querySelector("img").src = "images/" + this.data[this.index]
                    this.mask.querySelector(".num").innerHTML = this.index + 1;
                }


            })
        }

    }

    return Img
})