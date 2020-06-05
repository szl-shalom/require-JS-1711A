define(function () {
    function Car(opt) {
        Object.assign(this, opt)
        console.log(this)
        this.init()
    }

    Car.prototype = {
        constructor: Car,
        init: function () {
            this.render()
            this.bindEvent()
            this.complete()
        },
        render: function () {
            this.ul.innerHTML += this.data.map(function (item) {
                return `
                <li>
                    <ol>
                        <li>
                            <input type="checkbox" class="checkOne">
                        </li>
                        <li>${item.name}</li>
                        <li>${item.price}</li>
                        <li>
                            <button class="add">+</button>
                            <input type="text" value="${item.count}" class="count">
                            <button class="red">-</button>
                        </li>
                        <li class="price">
                            ${item.price * item.count}
                        </li>
                        <li>
                            <button class="del">删除</button>
                        </li>
                    </ol>
                </li>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            this.wrap.addEventListener("click", function (e) {
                var tar = e.target;
                switch (tar.className) {
                    case "del":
                        tar.parentNode.parentNode.parentNode.remove()
                        break;
                    case "add":
                        tar.nextElementSibling.value++
                        tar.parentNode.nextElementSibling.innerHTML = tar.nextElementSibling.value * tar.parentNode.previousElementSibling.innerHTML
                        break;
                    case "red":
                        tar.previousElementSibling.value--
                        if (tar.previousElementSibling.value < 1) {
                            var flag = confirm("再减该商品没了！！！！")
                            flag ? tar.parentNode.parentNode.parentNode.remove() : tar.previousElementSibling.value = 1
                        }
                        tar.parentNode.nextElementSibling.innerHTML = tar.previousElementSibling.value * tar.parentNode.previousElementSibling.innerHTML
                        break;
                    case "checkAll":
                        [...that.wrap.querySelectorAll(".checkOne")].forEach(function (item) {
                            item.checked = tar.checked
                        })
                        break;
                    case "checkOne":
                        var flag = [...that.wrap.querySelectorAll(".checkOne")].every(function (item) {
                            return item.checked
                        })
                        that.wrap.querySelector(".checkAll").checked = flag
                        break;
                }
                that.complete()
            })
        },
        complete: function () {
            var count = 0, price = 0;
            [...this.wrap.querySelectorAll(".checkOne:checked")].forEach(function (item) {
                count += +item.parentNode.parentNode.querySelector(".count").value
                price += +item.parentNode.parentNode.querySelector(".price").innerHTML
            })
            this.wrap.querySelector(".allCount").innerHTML = count
            this.wrap.querySelector(".allPrice").innerHTML = price
        }
    }

    return Car;

})