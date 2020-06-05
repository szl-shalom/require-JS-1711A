/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-05 16:01:40
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-05 17:09:39
 */
define(function () {
    function Confirm(opt) {
        Object.assign(this, {
            time: 3000
        }, opt)

        this.init()
    }

    Confirm.prototype = {
        constructor: Confirm,
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
                    <h2>${this.title}</h2>
                    <button style="background:rgba(0,0,0,.7);border:0;color:white;">${this.okBtnValue}</button>
                    <button style="background:rgba(0,0,0,.7);border:0;color:white;">${this.cancelBtnValue}</button>
                </div>
            `
            this.mask.innerHTML = html
            document.body.appendChild(this.mask)
        },
        bindEvent() {
            var btns = this.mask.querySelectorAll("button");
            btns[0].addEventListener("click", () => {
                this.mask.remove()
                this.okClick && this.okClick({})
            })
            btns[1].addEventListener("click", () => {
                this.mask.remove()
            })
        }
    }

    return Confirm;
})