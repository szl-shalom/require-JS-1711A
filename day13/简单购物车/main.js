require.config({
    baseUrl: "js/",
    paths: {
        d: "data",
        c: "car"
    }
})

require(["d", "c"], function (data, Car) {
    console.log(data)
    new Car({
        data: data,
        wrap: document.querySelector(".wrap"),
        ul: document.querySelector(".ul")
    })
})