/*
 * @Description: This is a JS program !op
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-11 16:33:45
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-11 17:29:04
 */
define(function () {
    function Falls(opt) {
        Object.assign(this, opt)

        this.w = this.box.children[0].offsetWidth  //每一张图片的宽度
        this.len = Math.floor(this.box.offsetWidth / this.w) // 一排显示几张图片
        this.init()
    }

    Falls.prototype = {
        constructor: Falls,
        init() {
            //设置样式
            this.setStyle()
            // 事件
            this.bindEvent()
        },
        setStyle() {
            var arr = [];
            [...this.box.children].forEach((item, index) => {
                // 匹配第一排
                if (index < this.len) {
                    item.style.top = 0; //设置上边距
                    item.style.left = index * (this.w + 10) + "px"; // 设置左边距
                    arr.push(item.offsetHeight) // 将第一排的图片的高度存储到数组
                } else {
                    //不是第一排
                    var min = Math.min.apply(Math, arr) //获取数组最小值
                    var ind = arr.indexOf(min) //获取最小值下标
                    item.style.top = min + "px"; //设置上边距
                    item.style.left = ind * (this.w + 10) + "px"; // 设置左边距
                    arr[ind] = min + item.offsetHeight + 10; //  更新数组数据
                }
            })
        },
        bindEvent() {
            document.addEventListener("scroll", (e) => {
                var scrollTop = document.documentElement.scrollTop;
                var offsetTop = this.box.lastElementChild.offsetTop;
                // var myTop = this.box.lastElementChild.getBoundingClientRect().top
                var scrollHeight = document.documentElement.clientHeight;
                // console.log()
                if (offsetTop < scrollTop + scrollHeight) {
                    for (var i = 1; i <= 15; i++) {
                        this.box.innerHTML += `
                        <div class="every"><img src="img/${i}.jpg" alt=""></div>
                        `
                    }
                }
                this.setStyle()
            })
        }
    }

    return Falls;
})