/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-05 19:37:25
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-05 20:01:32
 */
define(function () {
    function G() {
        this.init()
    }


    G.prototype = {
        constructor: G,
        init() {
            var index = 1
            this.data = [{
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }, {
                name: "名臣" + index++,
                tel: "13171894566"
            }]
            this.cortDowNTime(+new Date() + 3333)
        },
        //倒计时
        cortDowNTime(furTime) {
            this.timer = setInterval(() => {
                var curTime = new Date()
                var time = furTime - curTime
                var sec = parseInt(time / 1000 % 60)  //获取秒
                var min = parseInt(time / 1000 / 60 % 60)//获取分钟
                var hour = parseInt(time / 1000 / 60 / 60 % 60) //获取小时
                var day = parseInt(time / 1000 / 60 / 60 / 60 % 24) //获取天
                document.querySelector(".header").innerHTML = `${day}天${hour}小时${min}分钟${sec}秒`
                if (sec === 0) {
                    this.play()
                    document.querySelector(".header").innerHTML = `抽奖中`
                    clearInterval(this.timer)
                }
            }, 1000);
        },
        //抽奖
        play() {
            var h2s = document.querySelectorAll("h2")
            
            this.timer1 = setInterval(() => {
                this.index = Math.floor(Math.random() * this.data.length)
                h2s[0].innerHTML = this.data[this.index].name
                h2s[1].innerHTML = this.data[this.index].tel
            }, 100);

            setTimeout(() => {
                clearInterval(this.timer1)
                var html = `
                <li>
                    <span>${this.data[this.index].name}</span>
                    <span>${this.data[this.index].tel}</span>
                </li>
                `
                document.querySelector(".right").innerHTML += html
            }, 2000)

       





        }
    }
    return G
})