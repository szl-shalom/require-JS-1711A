define(function () {
    function Car(opt) {
        Object.assign(this, opt)
        this.init()
    }
    Car.prototype = {
        constructor: Car,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            this.el.addEventListener("click", function (e) {
                var tar = e.target;
                // 实现+按钮
                if (tar.className === "add") {
                    tar.previousElementSibling.value++
                    // tar.previousElementSibling.previousElementSibling.disabled = false
                    var a = tar.previousElementSibling.value // 数量
                    var b = tar.parentNode.nextElementSibling.innerHTML //单价
                    tar.parentNode.nextElementSibling.nextElementSibling.innerHTML = a * b;
                }
                //-按钮
                if (tar.className === "red") {
                    tar.nextElementSibling.value--
                    if (tar.nextElementSibling.value < 1) {
                        tar.nextElementSibling.value = 1
                        // tar.disabled = true
                    }
                    var a = tar.nextElementSibling.value //数量
                    var b = tar.parentNode.nextElementSibling.innerHTML //单价
                    tar.parentNode.nextElementSibling.nextElementSibling.innerHTML = a * b;
                }
                //全选
                if (tar.className === "check-all") {
                    var inputs = [...that.tbody.querySelectorAll("input[type=checkbox]")];
                    inputs.forEach(function (item) {
                        item.checked = tar.checked
                    })
                }

                // 删除
                if (tar.className === "remove") {
                    tar.parentNode.parentNode.remove()
                }

                that.computePrice()
            })


        },
        computePrice: function () {
            var price = 0
            //获取选中的inputs
            var inputs = [...this.tbody.querySelectorAll(".check-one:checked")];
            // 获取每一个input对应的小计
            inputs.forEach(function (item) {
                var res = +item.parentNode.parentNode.children[4].innerHTML
                price += +res
            })

            this.allPrice.innerHTML = price
        }
    }

    return Car;
})



