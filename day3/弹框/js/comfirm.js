define(function () {
    function Comfirm(opt) {
        Object.assign(this, {

        }, opt)

        this.init()
    }

    Comfirm.prototype = {
        constructor: Comfirm,
        init() {
            this.create()//创建对应的DOM结构
            this.bindEvent()
        },
        create() {
            this.mask = document.createElement("div");
            this.mask.style = `
                position:fixed;
                top:0;
                left:0;
                background:rgba(0,0,0,.3);
                width:100%;
                height:100%;
            `
            var html = `
                <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:20px;background:white;border-radius:25px;text-align:center;">
                    <h2>${this.title}</h2>
                    <button>${this.okBtnValue}</button>
                    <button>${this.cancelBtnValue}</button>
                </div>
            `
            this.mask.innerHTML = html;
            document.body.appendChild(this.mask)
        },
        bindEvent: function () {
            var btns = this.mask.querySelectorAll("button");



            btns[0].onclick = () => {
                this.mask.remove()
                this.okClick && this.okClick()
            }
        }
    }

    return Comfirm
})