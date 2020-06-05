require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        d: "dialog",
        r: "reg",
        data: "data",
        page: "page"
    }
})


require(["$", "d", "data", "page"], function ($, Dialog, data, Page) {
    console.log(data)
    var btn = $.get(".btn")
    btn.addEventListener("click", function () {
        new Dialog({
            html: `
            <div class="con">
                <span style="position:absolute;right:10px;top:10px;" class="del">X</span>
                <div class="title">
                    <span class="active">登录</span>
                    <span>注册</span>
                </div>
                <div class="content">
                    <div class="active">
                        <input type="text" placeholder="请输入用户名" class="username">
                        <span>错误提示</span>
                        <input type="password" placeholder="请输入密码" class="password">
                        <span>错误提示</span>
                        <button>登录</button>
                    </div>
                    <div>
                        <input type="text" placeholder="请输入手机号" class="iphone">
                        <span>错误提示</span><br>
                        <input type="text" placeholder="请输入验证码" class="userCode">
                        <span>512j</span><br>
                        <span>错误提示</span>
                        <button>注册</button>
                    </div>
                </div>
            </div>
            `
        })
    })

    new Page({
        data: data,
        page: $.get(".page"),
        footer: $.get(".footer>ul"),
        index: 0,
        pageNum: 16,
    })
})