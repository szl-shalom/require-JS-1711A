define(() => ({
    get: (el, parentNode = document) => parentNode.querySelector(el),
    gets: (el, parentNode = document) => parentNode.querySelectorAll(el),
}))