define(["v"], function (V) {
    function Floor(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Floor.prototype = {
        constructor: Floor,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            var arr = [...that.floor.children].map(function (item) {
                return item.offsetTop
            })
            document.addEventListener("scroll", function () {
                var scrollTop = document.documentElement.scrollTop
                // 是否显示左侧楼层
                if (scrollTop > 450) {
                    that.floorLeft.style.left = "100px"
                } else {
                    that.floorLeft.style.left = "-100px"
                }
                // 对应楼层高亮

                console.log(arr)
                arr.forEach(function (item, index) {
                    if (scrollTop >= item) {
                        that.floorLeft.querySelector(".active") && that.floorLeft.querySelector(".active").classList.remove("active")
                        that.floorLeft.firstElementChild.children[index].classList.add("active")
                    }
                })
            })

            that.floorLeft.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName == "LI") {
                    var index = tar.innerHTML - 1
                    V(that.floor.children[index], "scroll", 1000)
                }
            })
        }
    }

    return Floor
})