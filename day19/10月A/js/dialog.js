define(["r", "$"], function (Reg, $) {
    function Dialog(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            // 创建节点
            this.create()
            // Tab切换
            this.bindEvent()
            // 调用正则验证模块
            new Reg({
                data: [{
                    input: $.get(".username"),
                    reg: /^(1[3-9]\d{9})|(\w+@\w+\.(com|con|net))$/,
                    errorInfo: "用户名格式错误",
                },
                {
                    input: $.get(".password"),
                    reg: /^\w{6,16}$/,
                    errorInfo: "密码格式错误",
                },
                ]
            })
        },
        create: function () {
            this.mask = document.createElement("div")
            this.mask.className = "mask"
            this.mask.innerHTML = this.html;
            document.body.appendChild(this.mask)
        },
        bindEvent: function () {
            var that = this;
            this.title = this.mask.querySelector(".title");
            this.content = this.mask.querySelector(".content");
            [...this.title.children].forEach(function (item, index) {
                item.onclick = function () {
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active")
                    that.content.querySelector(".active") && that.content.querySelector(".active").classList.remove("active")
                    item.classList.add("active")
                    that.content.children[index].classList.add("active")
                }
            })

            this.mask.querySelector(".del").onclick = function () {
                that.mask.remove()
            }
        }
    }

    return Dialog;
})


