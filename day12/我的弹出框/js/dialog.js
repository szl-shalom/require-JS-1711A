define(function () {
    function Dialog(opt) {
        Object.assign(this, opt)
        this.init()

    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3);
                top:0;
                left:0;
                position:fixed;
            `

            this.mask.innerHTML = `
                <div style="padding:20px;background:white;position:absolute;top:50%;left:50%;
                transform:translate(-50%,-50%);">
                    <h2>${this.title}</h2>
                    <button>${this.okValue}</button>
                    <button>${this.cancelValue}</button>
                </div>
            `
            document.body.appendChild(this.mask)
            this.mask.querySelectorAll("button")[0].onclick = () => {
                this.mask.remove()
            }
            this.mask.querySelectorAll("button")[1].onclick = () => {
                this.mask.remove()
            }
        }
    }

    return Dialog;
})