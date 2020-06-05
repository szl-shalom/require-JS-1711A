define(["./shopping"], function (Shopping) {
    function Car(opt) {
        Object.assign(this, opt);
        this.init()
    }
    Car.prototype = {
        constructor: Car,
        init: function () {
            this.render()
            this.bindEvent();
        },
        render: function () {
            this.left.innerHTML = this.data.map(function (item) {
                return `
                <dl>
                    <dt><img src="${item.url}" alt=""></dt>
                    <dd><p>${item.name}</p><p>${item.price}</p></dd>
                </dl>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this, el, flag = false, pos = {};
            this.left.addEventListener("mousedown", function (e) {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    el = tar.parentNode.parentNode.cloneNode(1);
                    el.style = `
                        position:absolute;
                        left:${tar.offsetLeft}px;
                        top:${tar.offsetTop}px;
                    `
                    document.body.appendChild(el)
                    flag = true
                    pos = {
                        x: e.offsetX,
                        y: e.offsetY
                    }
                    e.preventDefault()
                }
            })
            document.addEventListener("mousemove", function (e) {
                if (flag) {
                    el.style.left = e.pageX - pos.x + "px"
                    el.style.top = e.pageY - pos.y + "px"
                }
            })
            document.addEventListener("mouseup", function (e) {
                if (flag) {
                    flag = false;
                    if (e.pageX > that.right.offsetLeft) {
                        new Shopping(that, el)
                    }
                    el.remove()
                }
            })
        },
    }

    return Car;
})