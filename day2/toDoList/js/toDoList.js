/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-02 09:05:01
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-02 09:48:05
 */
define(function () {
    //声明构造函数
    function toDoList(opt) {
        // 合并参数
        Object.assign(this, opt)
        //初始化
        this.init()
    }
    // 重写原型
    toDoList.prototype = {
        constructor: toDoList,
        init: function () {
            //添加事件
            this.addEvent()
        },
        addEvent: function () {
            // 给input框添加回车事件
            var that = this;
            this.input.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    //获取input的值   获取input的值  input.value
                    var val = that.input.value
                    //构建对应dom结构
                    var str = `
                    <li>
                        <input type="checkbox">
                        <span>${val}</span>
                        <span class="del">X</span>
                    </li> 
                    `
                    //添加对应位置
                    that.middle.innerHTML += str;
                    //清空input
                    that.input.value = ""
                }
                that.complateCount()

            })
            //中间盒子事件委托
            this.middle.addEventListener("click", function (e) {
                var tar = e.target;
                //删除按钮
                if (tar.className === "del") {
                    tar.parentNode.remove(0)
                }
                //移动复选框
                if (tar.nodeName === "INPUT") {
                    that.footer.appendChild(tar.parentNode)
                }
                that.complateCount()
            })
            //footer事件委托
            this.footer.addEventListener("click", function (e) {
                var tar = e.target;
                //删除按钮
                if (tar.className === "del") {
                    tar.parentNode.remove(0)
                }
                //移动复选框
                if (tar.nodeName === "INPUT") {
                    that.middle.appendChild(tar.parentNode)
                }
                that.complateCount()
            })
        },
        complateCount: function () {
            this.middleSpan.innerHTML = this.middle.children.length
            this.footerSpan.innerHTML = this.footer.children.length
        }
    }
    // 抛出接口
    return toDoList
})