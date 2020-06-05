define(function () {
    function getUrl() {
        var arr = [];
        for (var i = 1; i <= 20; i++) {
            arr.push(i < 10 ? `./images/00${i}.jpg` : `./images/0${i}.jpg`)
        }
        return arr;
    }
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function getImg() {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    function getImgs(min, max) {
        var arr = [];
        max = random(min, max)
        while (min <= max) {
            arr.push(getImg())
            min++
        }
        return arr;
    }

    function getData() {
        var obj =
        {
            imgs: getImgs(1, 6),
            sale: random(200, 20000),
            comment: random(200, 2000),
            price: random(200, 3000),
            title:"我是描述信息"
        }
        obj.img = obj.imgs[0]
        return obj
    }
    function getDatas(count = 200) {
        var arr = []
        for (var i = 0; i < count; i++) {
            arr.push(getData())
        }

        return arr;
    }
    var arr = getUrl()
    return getDatas(2000)
})