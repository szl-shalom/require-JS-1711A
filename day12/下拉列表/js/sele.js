define(["v"], function (V) {
    function Sele(opt) {
        Object.assign(this, opt)
        this.init()
    }


    Sele.prototype = {
        constructor: Sele,
        init: function () {
            //渲染
            this.render()
            //添加事件
            this.bindEvent()
        },
        render: function () {
            this.nav.innerHTML = this.data.map(function (item) {
                return `
                    <li>
                        ${item.name}
                        <ol>
                            ${item.children.map(function (item) {
                    return `
                                    <li>
                                        ${item.name}
                                        <ul class="three">
                                        ${item.children.map(function (item) {
                        return `
                                                            <li>
                                                                ${item.name}
                                                                <ul class="three">
                                                                   
                                                                </ul>
                                                            </li>
                                                        `
                    }).join("")}
                                        </ul>
                                    </li>
                                `
                }).join("")}
                        </ol>
                    </li>
                `
            }).join("")
        },
        bindEvent: function () {
            [...this.nav.children].forEach(function (item) {
                item.onmouseenter = function () {
                    // item.children[0].style.display = "block"
                    V(item.children[0], "slideDown")
                }

                item.onmouseleave = function () {
                    // item.children[0].style.display = "none"
                    V(item.children[0], "slideUp")
                }
            });
            [...this.nav.querySelectorAll("ol>li")].forEach(function (item) {
                item.onmouseenter = function () {
                    // item.children[0].style.display = "block"
                    V(item.children[0], "fadeIn")
                }

                item.onmouseleave = function () {
                    // item.children[0].style.display = "none"
                    V(item.children[0], "fadeOut")
                }
            })


        }
    }

    return Sele;
})