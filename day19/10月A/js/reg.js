define(function () {
    function R(opt) {
        Object.assign(this, opt)
        this.init()
    }

    R.prototype = {
        constructor: R,
        init: function () {
            this.data.forEach(function (item) {
                item.input.onblur = function () {
                    if (item.reg.test(this.value)) {
                        this.nextElementSibling.innerHTML = "√"  
                    } else {
                        this.nextElementSibling.innerHTML = item.errorInfo
                    }
                    // return item.reg.test(this.value)
                }
            })
        }
    }

    return R;
})