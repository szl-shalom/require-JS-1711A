/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-11-04 11:45:02
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-04 19:49:38
 */
require(["./js/comfirm"], function (Confrim) {
    document.querySelectorAll("button")[1].onclick = function () {
        new Confrim({
            title: "今天下雨了吗？",
            okBtnValue: "OK",
            cancelBtnValue: "取消",
            okClick() {
                console.log("确定按钮")
            }
        })
    }

})