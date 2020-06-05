define(["v"], function (V) {
    function Drag(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Drag.prototype = {
        constructor: Drag,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var flag = false, pos = {}, cloneEl = null, that = this, curPos;
            this.vegetable.addEventListener("mousedown", function (e) {
                var tar = e.target;//获取事件源
                if (tar.nodeName === "SPAN") {// 事件是不是目标元素
                    flag = true //打开开关 说明可以拖拽
                    pos = {
                        x: e.offsetX,
                        y: e.offsetY
                    } //保存鼠标点距离事件源的左边距和上边距
                    cloneEl = tar.cloneNode(true) //深度克隆事件源
                    cloneEl.style.position = "absolute"; //开定位
                    cloneEl.style.left = tar.offsetLeft + "px" //设置left
                    cloneEl.style.top = tar.offsetTop + "px" //设置top
                    curPos = {
                        x: tar.offsetLeft,
                        y: tar.offsetTop
                    }
                    cloneEl.style.border = "1px solid red"
                    document.body.appendChild(cloneEl)//添加页面
                }
            })

            document.addEventListener("mousemove", function (e) {
                if (flag) {
                    cloneEl.style.left = e.pageX - pos.x + "px"
                    cloneEl.style.top = e.pageY - pos.y + "px"
                }
            })

            document.addEventListener("mouseup", function (e) {
                if (flag) {
                    flag = false; //关闭开关变量
                    var el = null
                    var res = [...that.box.children].some(function (item) {
                        var obj = item.getBoundingClientRect()
                        if (e.pageX > obj.left && e.pageX < obj.right && e.pageY > obj.top && e.pageY < obj.bottom) {
                            el = item
                        }
                        return e.pageX > obj.left && e.pageX < obj.right && e.pageY > obj.top && e.pageY < obj.bottom
                    })

                    if (res && el.children.length < 4) {
                        var repleatflag = [...el.children].some(function (item) {
                            return item.innerHTML === cloneEl.innerHTML
                        })
                        if (repleatflag) {
                            alert("不允许出现配菜")

                            V(cloneEl, {
                                left: curPos.x,
                                top: curPos.y
                            }, {
                                complete: function () {
                                    cloneEl.remove()
                                },
                                duration: 1000
                            })

                        } else {
                            cloneEl.style.position = ""
                            el.appendChild(cloneEl)
                        }

                    } else {
                        V(cloneEl, {
                            left: curPos.x,
                            top: curPos.y
                        }, {
                            complete: function () {
                                cloneEl.remove()
                            },
                            duration: 1000
                        })
                    }
                }

            })
        }
    }
    return Drag;
})
