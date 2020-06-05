define(function () {
    function Car(opt, el) {
        Object.assign(this, opt);
        this.init(el)
    }
    Car.prototype = {
        constructor: Car,
        init: function (el) {
            var that = this;
            console.log(this)
            var arr = [...that.tbody.children].map(function (item) {
                return item.children[0].innerHTML
            })
            var elName = el.children[1].children[0].innerHTML
            var index = arr.indexOf(elName)
            if (index === -1) {
                that.createEl(el)
            } else {
                that.tbody.children[index].children[2].innerHTML++
                that.tbody.children[index].children[3].innerHTML = +that.tbody.children[index].children[3].innerHTML + +el.children[1].children[1].innerHTML
            }

            // 总价计算数量计算
            var count = 0, price = 0;
            [...that.tbody.children].forEach(function (item) {
                count += +item.children[2].innerHTML
                price += +item.children[3].innerHTML
            })
            that.allCount.innerHTML = count;
            that.allPrice.innerHTML = price;
        },

        createEl: function (el) {
            var that = this;
            var html = `
            <tr>
                <td>${el.children[1].children[0].innerHTML}</td>
                <td>${el.children[1].children[1].innerHTML}</td>
                <td>1</td>
                <td>${el.children[1].children[1].innerHTML}</td>
            </tr>
            `
            that.tbody.innerHTML += html
        }
    }

    return Car;
})