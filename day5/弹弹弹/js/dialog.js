/*
 * @Description: This is a JS program ! 
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-06 20:24:36
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-06 20:33:59
 */
define(function () {
    function Dialog(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init() {
            var div = document.createElement("div")
            div.style = `
                position:absolute;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                text-align:center;
                background:rgba(0,0,0,.7);
                padding:20px;
            `
            var html = `
              
                    <h1>${this.title}</h1>
                    <button>${this.okValue}</button>
                    <button>${this.cancelValue}</button>
             
            `
            div.innerHTML = html
            document.body.appendChild(div)
            var btns = div.querySelectorAll("button")
            btns[0].onclick = () => {
                div.remove()
                this.okClick && this.okClick()
            }
            btns[1].onclick = () => {
                div.remove()
                this.cancelClick && this.cancelClick()
            }
        }
    }

    return Dialog;
})