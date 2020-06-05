define(["v"], function (V) {
    function Floor(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Floor.prototype = {
        constructor: Floor,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            // 获取被吸顶元素的距离顶部的上边距
            var offsetTop = this.nav.offsetTop
            // 获取每一个楼层距离页面顶部的距离
            var arr = [...this.floor.children].map(item => {
                return item.offsetTop
            })
            //滚动事件
            document.addEventListener("scroll", e => {
                // 获取滚动条滚动的距离
                var scrollTop = document.documentElement.scrollTop
                //吸顶
                if (scrollTop > offsetTop) {
                    // console.log("我要吸顶啦~~~")
                    this.nav.classList.add("fixed")
                    this.nav.nextElementSibling.style.marginTop = this.nav.offsetHeight + "px"
                } else {
                    this.nav.classList.remove("fixed")
                    this.nav.nextElementSibling.style.marginTop = 0
                }

                // 对应楼层高亮
                arr.forEach((item, index) => {
                    if (scrollTop >= item) {
                        this.leftUl.querySelector(".active") && this.leftUl.querySelector(".active").classList.remove("active")
                        this.leftUl.children[index].classList.add("active")
                    }
                })

            })
            //导航条点击
            this.leftUl.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    // document.documentElement.scrollTop = arr[tar.innerHTML - 1]
                    V(this.floor.children[tar.innerHTML - 1], "scroll", 2000)

                }
            })
        }
    }

    return Floor;
})