/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-11 11:27:40
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-11 16:14:42
 */
define(["./dialog"], function (D) {
    function List(opt) {

        Object.assign(this, opt)
        this.init()
    }

    List.prototype = {
        constructor: List,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            // 给提交按钮添加点击事件
            var ind = 1
            this.submit.addEventListener("click", () => {
                // 9.正确收集‘用户名’和‘密码’ 5分
                var usernameValue = this.username.value;
                var ageValue = this.age.value;
                // 11.用户名不能重复添加 5分
                var arr = [...this.tbody.children]
                var flag = arr.some(item => {
                    return item.children[1].innerHTML === usernameValue
                })
                if (flag) {
                    alert("用户名不能重复")
                    return;
                }


                // 10.点击‘提交’，实现同步添加到列表中显示 5分
                // 13.列表能正确展示每条数据，比如‘序号，姓名’等  5分
                this.tbody.innerHTML += `
                <tr>
               
                    <td>${ind++}</td>
                    <td>${usernameValue}</td>
                    <td>${ageValue}</td>
                    <td>
                        <button class="del"> 删除</button>
                    </td>
                </tr>
                `
            })

            //12.‘重置’按钮，点击清空两个input框内容 5分
            this.reset.addEventListener("click", () => {
                this.username.value = "";
                this.age.value = "";
            })

            //14.正确删除对应的一条信息  5分
            this.tbody.addEventListener("click", e => {
                var tar = e.target; //获取事件源
                if (tar.className === "del") {
                    //15.删除信息前弹出提示框  5分
                    new D({
                        title: "确认要删除?",
                        okValue: "确定",
                        cancelValue: "取消",
                        okClick() {
                            tar.parentNode.parentNode.remove()
                        }
                    })

                }

            })

            //删除全部
            this.delAll.addEventListener("click", () => {
                new D({
                    title: "确认要全部删除?",
                    okValue: "OK",
                    cancelValue: "NO",
                    okClick: () => {
                        this.tbody.innerHTML = ""
                    }
                })


            })
        }
    }

    return List;
})