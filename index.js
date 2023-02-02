const open = document.getElementById('open-btn');
const close = document.getElementById('close-btn');
const nav = document.getElementById('nav');

open.addEventListener('click', () => {
    nav.classList.add('open-nav')
    open.classList.add('hide')
    close.classList.add('show')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
    open.classList.remove('hide')
    close.classList.remove('show')
})