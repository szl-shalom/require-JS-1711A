define(function () {
    var arr = []
    for (var i = 1; i <= 20; i++) {
        arr.push(i > 9 ? `0${i}.jpg` : `00${i}.jpg`)
    }
    console.log(arr)

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function getData() {
        return {
            img: arr[random(0, 19)],
            title: "读取文件饿哦切维奇"
        }
    }


    var arr1 = []
    for (var i = 0; i < 200; i++) {
        arr1.push(getData())
    }
    return arr1
})