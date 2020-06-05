define(function () {
    return {
        get: function (el, par) {
            par = par || document
            return par.querySelector(el)
        },
        gets: function (el, par) {
            par = par || document
            return par.querySelectorAll(el)
        }
    }
})


// define(() => ({
//     get: (el, par = document) => par.querySelector(el),
//     gets: (el, par = document) => par.querySelectorAll(el)
// }))