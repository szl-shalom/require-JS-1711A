/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-08 19:46:24
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-08 20:01:34
 */
define(function () {
    function M(opt) {
        Object.assign(this, opt);
        this.init()
    }

    M.prototype = {
        constructor: M,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            //提交
            this.submit.addEventListener("click", () => {

                var html = `
                <li>    
                    <dl>
                        <dt>
                            <img src="${this.userimg.querySelector(".active").src}" alt="">
                        </dt>
                        <dd>
                            <h2>${this.username.value}</h2>
                            <p>${this.usersign.value}</p>
                        </dd>
                        <button class="del">删除</button>
                    </dl>
                </li>
                `
                this.ul.innerHTML += html
            });
            // tab切换
            [...this.userimg.children].forEach(item => {
                item.onclick = () => {
                    this.userimg.querySelector(".active") && this.userimg.querySelector(".active").classList.remove("active")
                    item.classList.add("active")
                }
            })
            // 删除
            this.ul.addEventListener("click", e => {
                var tar = e.target;
                if (tar.className === "del") {
                    tar.parentNode.parentNode.remove()
                }

            })
        }
    }

    return M
})