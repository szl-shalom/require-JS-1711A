/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-09 08:58:45
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-09 10:37:08
 */
define(["../lib/velocity.min"], function (V) {
    function Swiper(el, opt) {
        //检测参数是否符合要求
        if (typeof el !== "string") {
            throw new Error("el参数数据类型不正确！！")
        }
        //获取必要的节点
        this.el = document.querySelector(el) //获取包装者
        Object.assign(this, opt) // 合拼参数
        this.container = this.el.querySelector(".swiper-container"); //获取滚动的元素
        this.width = this.el.offsetWidth; // 设置每张滚动的宽度
        //克隆第一张图片 并且到尾部
        this.container.appendChild(this.container.firstElementChild.cloneNode(true))
        // 设置滚动宽度
        this.container.style.width = this.container.children.length * this.width + "px"
        // 获取分页器节点
        if (this.page) {
            this.page = this.el.querySelector(this.page)
        }
        // 长度
        this.len = this.container.children.length
        //获取左右按钮
        this.prev = this.el.querySelector(this.prev)
        this.next = this.el.querySelector(this.next)
        this.init()
    }


    Swiper.prototype = {
        constructor: Swiper,
        init() {
            this.autoPlay && this.auto()//自动轮播
            this.bindEvent()//添加事件
        },
        auto() {
            this.timer = setInterval(() => {
                this.next.click()
            }, 2000);
        },
        run(i) {
            this.page && this.page.children[this.index === this.len - 1 ? 0 : this.index].classList.remove("active")
            this.index = i;
            this.page && this.page.children[this.index === this.len - 1 ? 0 : this.index].classList.add("active")
            V(this.container, {
                left: - this.index * this.width
            })
        },
        bindEvent() {
            //鼠标进入
            this.autoPlay && this.el.addEventListener("mouseenter", () => {
                clearInterval(this.timer)
            });
            // 鼠标划出
            this.autoPlay && this.el.addEventListener("mouseleave", () => {
                this.auto()
            });

            //分页器点击事件
            [...this.page.children].forEach((item, index) => {
                item.addEventListener("click", () => {
                    this.run(index)
                })
            })
            //右按钮点击事件
            this.next.addEventListener("click", () => {
                if (this.index === this.container.children.length - 1) {
                    this.index = 0
                    this.container.style.left = 0
                }
                this.run(this.index + 1)
            })

            //左按钮点击事件
            this.prev.addEventListener("click", () => {
                if (this.index === 0) {
                    this.index = this.len - 1
                    this.container.style.left = - this.index * this.width + "px"
                }
                this.run(this.index - 1)
            })
        }
    }

    return Swiper;
})