define(function () {
    function drag(nodeEl) {
        var flag = false, pos = {}
        nodeEl.addEventListener("mousedown", function (e) {
            flag = true //开关变量开启
            pos = {
                x: e.offsetX,
                y: e.offsetY,
            }
            nodeEl.style.position = "absolute"
        })

        document.addEventListener("mousemove", function (e) {
            if (flag) {
                nodeEl.style.left = e.pageX - pos.x + "px"
                nodeEl.style.top = e.pageY - pos.y + "px"
            }
        })

        document.addEventListener("mouseup", function () {
            flag = false
        })
    }
    return drag
})