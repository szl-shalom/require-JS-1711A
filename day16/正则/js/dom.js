define(function () {
    return {
        get: function (el, par) {
            par = par || document
            return par.querySelector(el)
        },
        gets: function () {
            par = par || document
            return par.querySelectorAll(el)
        }
    }
})