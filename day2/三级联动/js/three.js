/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-02 10:23:40
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-02 10:54:05
 */
define(function () {
    function T(opt) {
        Object.assign(this, opt)
        this.init()
    }

    T.prototype = {
        constructor: T,
        init: function () {
            //渲染种类
            // this.renderOne()
            this.render(this.selects[0], "种类", this.data)
            //添加事件
            this.bindEvent()
        },
        // renderOne: function () {
        //     this.selects[0].innerHTML = `<option value="">请选择种类</option>` + this.data.map(function (item) {
        //         return `
        //             <option value="">${item.name}</option>
        //         `
        //     }).join("")
        // },
        // renderTwo: function (data) {
        //     this.selects[1].innerHTML = `<option value="">请选择地区</option>` + data.map(function (item) {
        //         return `
        //             <option value="">${item.name}</option>
        //         `
        //     }).join("")
        // },
        // renderThree: function (data) {
        //     this.selects[2].innerHTML = `<option value="">请选择??</option>` + data.map(function (item) {
        //         return `
        //             <option value="">${item.name}</option>
        //         `
        //     }).join("")
        // },
        render: function (el, type, data) {
            el.innerHTML = `<option value="">请选择${type}</option>` + data.map(function (item) {
                return `
                           <option value="">${item.name}</option>
                       `
            }).join("")
        },

        bindEvent: function () {
            var that = this;
            console.log(this.data)
            // 种类改变事件
            this.selects[0].addEventListener("change", function () {
                //修改？？
                that.selects[2].innerHTML = `<option value="">请选择??</option>`

                //获取下标  select.selectedIndex
                that.indexOne = this.selectedIndex - 1
                // 获取相应的数据
                var data = that.data[that.indexOne].children
                //数据渲染
                // that.renderTwo(data)
                that.render(that.selects[1], "地区", data)
            })
            // 地区改变事件
            this.selects[1].addEventListener("change", function () {
                //获取下标  select.selectedIndex
                that.indexTwo = this.selectedIndex - 1
                // 获取相应的数据
                var data = that.data[that.indexOne].children[that.indexTwo].children
                //数据渲染
                // that.renderThree(data)
                that.render(that.selects[2], "??", data)
            })
        }
    }

    return T
})