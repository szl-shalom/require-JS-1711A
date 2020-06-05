define(function () {
    function C(opt) {
        Object.assign(this, opt)
        this.init()
    }

    C.prototype = {
        constructor: C,
        init: function () {
            var that = this;
            setInterval(function () {
                var curTime = new Date();
                var time = that.furTime - curTime //毫秒级
                var sec = Math.floor(time / 1000 % 60) //获取秒
                var min = Math.floor(time / 1000 / 60 % 60)  // 获取分钟
                var hour = Math.floor(time / 1000 / 60 / 60 % 24)  // 获取小时
                var day = Math.floor(time / 1000 / 60 / 60 / 24)  // 获取天
                that.el.innerHTML = `距离过年倒计时结束还有${day}天${hour}小时${min}分${sec}秒`
            }, 1000)

        }
    }

    return C;
})