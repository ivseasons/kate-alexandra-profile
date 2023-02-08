const open = document.getElementById('open-btn');
const close = document.getElementById('close-btn');
const nav = document.getElementById('nav');

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');

const errorMsg = document.getElementById('error-msg');
const submitBtn = document.getElementById('submit');


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

gsap.from('.headshot-circle', { duration: 1, x: 100, opacity: 0 } )

gsap.from('.info-section ul', { duration: 1, y: 50, opacity: 0, delay: 2, stagger: .5 } )

gsap.from('.bio-portrait', { duration: 1, x: 100, opacity: 0 } )

submitBtn.addEventListener ('click', () =>  {
    checkName()
    validateEmail()
})

function checkName() {

}

function validateEmail() {
    const emailFormat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)$/;
    if (email.value.match(emailFormat)) {
        email.value = "";
        errorMsg.textContent = ""
    } else {
        errorMsg.textContent = "Please provide a valid email address";
        errorMsg.classList.add('show');
        email.classList.add('red-border')
    }
}


