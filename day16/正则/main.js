require.config({
    baseUrl: "js/",
    paths: {
        $: "dom",
        r: "reg",
    }
})

require(["$", "r"], function ($, Reg) {
    new Reg({
        data: [{
            input: $.get(".username"),
            reg: /^[\u4e00-\u9fa5]{2,4}$/,
            errorInfo: "用户名格式不正确",
            emptyInfo: "用户名不可以为空",
            okValue: "✔"
        }, {
            input: $.get(".password"),
            reg: /^\w{6,12}$/,
            errorInfo: "密码格式不正确",
            emptyInfo: "密码不可以为空",
            okValue: "✔"
        }, {
            input: $.get(".email"),
            reg: /^\w+@\w+\.(con|com)$/,
            errorInfo: "邮箱格式不正确",
            emptyInfo: "邮箱不可以为空",
            okValue: "♥"
        }, {
            input: $.get(".iphone"),
            reg: /^1[1-9][0-9]{9}$/,
            errorInfo: "手机号格式不正确",
            emptyInfo: "手机号不可以为空",
            okValue: "✔"
        }, {
            input: $.get(".address"),
            reg: /^.+$/,
            errorInfo: "地址格式不正确",
            emptyInfo: "地址不可以为空",
            okValue: "✔"
        }],
        repeatPassword: $.get(".repeatPassword"),
        getCode: $.get(".getCode"),
        code: $.get(".code"),
        userCode: $.get(".userCode"),
        submit: $.get(".submit"),
        url:"http://172.16.10.119:8080/bwie/mhIndex.do"
    })
})