(function () {
    function createCheckCode(len) {
        var str1 = ""
        for (var i = 0; i < len; i++) {
            var val = str[random(0, str.length - 1)]
            str1 +=val;
        }


        return str1;
    }

    window.createCheckCode = createCheckCode
})()