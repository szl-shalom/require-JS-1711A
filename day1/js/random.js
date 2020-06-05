(function () {
    function random(n, m) {
        return Math.floor(Math.random() * (m - n + 1) + n)
    }

    window.random = random
})()