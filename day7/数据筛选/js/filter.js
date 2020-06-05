/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-08 10:41:32
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-08 11:29:57
 */
define(function () {
    function Filter(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Filter.prototype = {
        constructor: Filter,
        init() {
            //渲染所有数据
            this.render(this.data)
            //添加事件
            this.bindEvent()
        },
        render(data) {
            this.content.innerHTML = data.map(item => {
                return `
                <li>
                    <div class="left">
                        <img src="./images/${item.img}" alt="">
                    </div>
                    <div class="right">
                        <h2>${item.name}</h2>
                        <p>${item.sign}</p>
                    </div>
                </li>
                `
            }).join("")
        },
        bindEvent() {
            //3个btn点击事件 事件委托
            this.header.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "BUTTON") {
                    //Tab切换
                    this.header.querySelector(".active") && this.header.querySelector(".active").classList.remove("active")
                    tar.classList.add("active")
                    // 获取对应数据
                    var data;
                    if (tar.innerHTML === "全部") {
                        data = this.data
                    } else if (tar.innerHTML === "男生") {
                        data = this.data.filter(item => {
                            return item.sex === "男"
                        })
                    } else {
                        data = this.data.filter(item => {
                            return item.sex === "女"
                        })
                    }
                    //渲染页面
                    this.render(data)
                }
            })

            //input事件 模糊搜索
            this.input.addEventListener("input", () => {
                //获取内容
                var val = this.input.value
                //模糊搜索
                var data = this.data.filter(item => {
                    return item.name.includes(val) || item.sign.includes(val);
                })
                //渲染
                this.render(data)
            })

        }
    }

    return Filter;
})

