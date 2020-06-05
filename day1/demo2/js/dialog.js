/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-01 16:10:00
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-01 16:27:53
 */
define(function () {
    function Dialog(el) {
        this.el = el
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            //创建遮罩层
            this.createMask()
            //创建内容盒子
            this.createContent()
        },
        createMask: function () {
            //创建遮罩层
            this.mask = document.createElement("div")
            this.mask.style = `
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3);
                position:fixed;
                top:0;
                left:0;
            `
            document.body.appendChild(this.mask)
        },
        createContent: function () {
            this.content = document.createElement("div")
            var img = document.createElement("img")
            img.src = this.el.src
            img.width = this.el.width * 2
            img.style = `
                position:absolute;
                left:0;
                top:0;
                bottom:0;
                right:0;    
                margin:auto;
            `
            this.content.appendChild(img)
            this.mask.appendChild(this.content)

            var span = document.createElement("span")
            span.innerHTML = "X"
            span.style = `
                float:right;
                font-size:36px;
                color:white;
                margin-right:20px;
                margin-top:20px;
            `

            this.mask.appendChild(span)
            var that = this
            span.addEventListener("click", function () {
                that.mask.remove()
            })
        },

    }


    return Dialog

})