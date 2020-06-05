/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-05 16:01:40
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-05 16:26:44
 */
define(function () {
    function Toast(opt) {
        Object.assign(this, {
            time: 3000
        }, opt)

        this.init()
    }

    Toast.prototype = {
        constructor: Toast,
        init() {
            this.create()
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
                    <button style="background:rgba(0,0,0,.7);border:0;color:white;">${this.btn}</button>
                </div>
            `
            this.mask.innerHTML = html
            document.body.appendChild(this.mask)
            setTimeout(() => {
                this.mask.remove(0)
            }, this.time)
        }
    }

    return Toast;
})