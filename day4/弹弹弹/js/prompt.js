/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-05 17:01:02
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-05 17:14:01
 */
define(["js/dom"], function ($) {
    function Prompt(opt) {
        Object.assign(this, opt)
        this.init()

    }


    Prompt.prototype = {
        constructor: Prompt,
        init() {
            this.create()
            this.bindEvent()
        },
        create() {
            this.mask = document.createElement("div");
            this.mask.style = `
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3);
            `
            var html = `
                <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,.7);padding:20px;border-radius:10px;text-align:center;">
                    <input type="text" value="${this.name}"></input><br/>
                    <input type="text" value="${this.content}"></input><br/>
                    <input type="text" value="${this.date}"></input><br/>
                    <button style="background:rgba(0,0,0,.7);border:0;color:white;">更新</button>
                    <button style="background:rgba(0,0,0,.7);border:0;color:white;">取消</button>
                </div>
            `
            this.mask.innerHTML = html
            document.body.appendChild(this.mask)
        },
        bindEvent() {
            var btns = this.mask.querySelectorAll("button");
            btns[0].addEventListener("click", () => {
                this.mask.remove()
                var inputs = $.gets("input", this.mask)
                this.okClick && this.okClick({
                    name: inputs[0].value,
                    content: inputs[1].value,
                    date: inputs[2].value,
                })
            })
            btns[1].addEventListener("click", () => {
                this.mask.remove()
            })
        }
    }


    return Prompt
})