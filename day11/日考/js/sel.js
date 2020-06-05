define(function () {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()

    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            this.input.addEventListener("focus", () => {
                this.content.style.display = "block"
            })
            this.content.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "INPUT") {
                    // 方式一
                    var inputs = [...this.content.querySelectorAll("input:checked")];
                    this.input.value = inputs.map(function (item) {
                        return item.nextElementSibling.innerHTML;
                    }).join(",")
                    // 方式二
                    // if (tar.checked) {
                    //     this.input.value += tar.nextElementSibling.innerHTML + ",";
                    // } else {
                        
                    // }
                }
            })
            this.btn.addEventListener("click", () => {
                alert(this.input.value)
            })
        }
    }

    return Sel;
})