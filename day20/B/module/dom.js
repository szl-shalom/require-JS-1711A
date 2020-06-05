define(() => ({
    get: (el, par = document) => par.querySelector(el),
    gets: (el, par = document) => par.querySelectorAll(el),
}))