/*
 * @Description: This is a JS program ! 
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-11 11:27:45
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-11 16:12:11
 */
define(function () {
    function Dialog(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init() {
            this.mask = document.createElement("div")
            this.mask.style = `
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3);
                position:fixed;
                top:0;
                left:0;
            `
            this.mask.innerHTML = `
                <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:white;border-radius:25px;padding:25px;text-align:center;">
                    <h2>${this.title}</h2>
                    <button>${this.okValue}</button>
                    <button>${this.cancelValue}</button>
                </div>
            `

            document.body.appendChild(this.mask)

            this.mask.querySelector("button").onclick = () => {
                this.mask.remove()
                this.okClick()
            }

            this.mask.querySelectorAll("button")[1].onclick = () => {
                this.mask.remove()
            }
        }
    }

    return Dialog
})