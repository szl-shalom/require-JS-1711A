define(["$"], function ($) {
    function Reg(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Reg.prototype = {
        constructor: Reg,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            this.data.forEach(function (item) {
                item.input.onblur = function () {
                    if (this.value === "") {
                        this.nextElementSibling.innerHTML = item.emptyInfo
                        return false
                    }

                    if (!item.reg.test(this.value)) {
                        this.nextElementSibling.innerHTML = item.errorInfo
                        return false
                    }
                    
                    this.nextElementSibling.innerHTML = item.okValue
                    return true
                }
            })
            this.repeatPassword.onblur = function () {

                // this.value === $.get(".password").value ?
                if (this.value === $.get(".password").value) {
                    this.nextElementSibling.innerHTML = "√"
                } else {
                    this.nextElementSibling.innerHTML = "X"
                }
                return this.value === $.get(".password").value
            }
            this.getCode.addEventListener("click", function () {
                that.code.innerHTML = Math.random().toString(36).substr(2, 4);
            })
            this.submit.addEventListener("click", function () {
                var flag = that.data.every(function (item) {
                    return item.input.onblur()
                })
                if ((flag && that.repeatPassword.onblur() && that.userCode.value === that.code.innerHTML)) {
                    var res = that.data.map(function (item) {
                        return `${item.input.className}=${item.input.value}`
                    }).join("&")
                    location.href = that.url + "?" + res
                }
            })
        }
    }

    return Reg;
})