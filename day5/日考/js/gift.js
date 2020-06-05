/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-06 10:27:40
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-06 11:40:17
 */
//定义模块
define(function () {
    function Gift(opt) {
        //this 是实例化对象
        Object.assign(this, opt)
        //初始化
        this.init()
    }
    // 构造函数原型
    Gift.prototype = {
        constructor: Gift,
        init() {
            var furTime = +new Date() + 3000;
            var timer = setInterval(() => {
                var curTime = new Date()
                var time = furTime - curTime;
                var str = time,
                    sec = parseInt(str / 1000 % 60),
                    min = parseInt(str / 1000 / 60 % 60),
                    hour = str / 1000 / 60 / 60 % 24,
                    day = str / 1000 / 60 / 60 / 24;

                if (time <= 0) {
                    setInterval(() => {
                        this.play(0)
                    }, 4000);
                    //抽奖
                    this.play()
                    //清除定时器
                    clearInterval(timer)
                }
            }, 1000);

            // document.querySelector("button").onclick = () => {
            //     this.play()
            // }


        },
        play() {
            var index = 1
            var arr = [{
                name: "张三" + index++,
                tel: "9685464657"
            }, {
                name: "张三" + index++,
                tel: "9685464657"
            }, {
                name: "张三" + index++,
                tel: "9685464657"
            }, {
                name: "张三" + index++,
                tel: "9685464657"
            }, {
                name: "张三" + index++,
                tel: "9685464657"
            }, {
                name: "张三" + index++,
                tel: "9685464657"
            }, {
                name: "张三" + index++,
                tel: "9685464657"
            }, {
                name: "张三" + index++,
                tel: "9685464657"
            }, {
                name: "张三" + index++,
                tel: "9685464657"
            }]
            var h2s = document.querySelectorAll("h2")

            var timer = setInterval(() => {
                var index = Math.floor(Math.random() * arr.length)
                h2s[0].innerHTML = arr[index].name
                h2s[1].innerHTML = arr[index].tel
            }, 200);

            setTimeout(() => {
                clearInterval(timer)
            }, 2000);

        }
    }

    return Gift
})