/*
 * @Description: This is a JS program !%
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-05 16:01:22
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-05 19:18:30
 */
require(["./js/dom", "./js/toast", "./js/confirm", "./js/prompt"], function ($, Toast, Confirm, Prompt) {
    // 获取三个input
    var inputs = [...$.gets(".header input")];
    console.log(inputs)
    //给提交按钮添加事件
    $.get(".submit").addEventListener("click", function () {
        //非空验证
        var flag = inputs.every(function (item) {
            return item.value !== ""
        })
        //判断flag
        if (flag) {
            //添加数据
            var html = `
            <tr>
                <td>${+$.get("tbody").lastElementChild.children[0].innerHTML + 1}</td>
                <td>${inputs[0].value}</td>
                <td>${inputs[1].value}</td>
                <td>${inputs[2].value}</td>
                <td>
                    <button class="del">删除</button>
                    <button class="mod">编辑</button>
                </td>
            </tr>
            `
            $.get("tbody").innerHTML += html

        } else {
            //调用插件  
            new Toast({
                title: "不可以为空!!!!",
                btn: "确定",
                time: 2000
            })
        }
    })



    //事件委托 删除编辑功能
    $.get("tbody").addEventListener("click", (e) => {
        var tar = e.target; //获取事件源

        //点击了删除按钮
        if (tar.className === "del") {
            new Confirm({
                title: "确定要删除吗？",
                okBtnValue: "ok",
                cancelBtnValue: "no",
                okClick() {
                    // 删除对应数据
                    tar.parentNode.parentNode.remove()
                }
            })
        }
        //点击编辑
        if (tar.className === "mod") {
            new Prompt({
                name: tar.parentNode.previousElementSibling.previousElementSibling.innerHTML,
                date: tar.parentNode.previousElementSibling.innerHTML,
                content: tar.parentNode.parentNode.children[1].innerHTML,
                okClick(obj) {
                    tar.parentNode.previousElementSibling.previousElementSibling.innerHTML = obj.name
                    tar.parentNode.previousElementSibling.innerHTML = obj.date
                    tar.parentNode.parentNode.children[1].innerHTML = obj.content
                }
            })
        }
    })


    // var arr = [1, 2, 3, 4, 5, 6];
    // //存在有一个为真  那么返回值为真
    // var flag = arr.every(function (item) {
    //     return item > 0
    // })
    // console.log(flag)
})