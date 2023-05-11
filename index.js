const open = document.getElementById('open-btn');
const close = document.getElementById('close-btn');
const nav = document.getElementById('nav');

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');

const errorMsgEmail = document.getElementById('error-msg-email');
const errorMsgFName = document.getElementById('error-msg-fname');
const errorMsgLName = document.getElementById('error-msg-lname');
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


submitBtn.addEventListener ('click', () =>  {
    checkFirstName()
    checkLastName()
    validateEmail()
})

function checkFirstName() {
    if(firstName.value == "") {
        errorMsgFName.textContent = "Required";
        firstName.classList.add('red-border')
    } else {
        firstName.value = ""
        errorMsgFName.textContent = ""
    }
}

function checkLastName() {
    if(lastName.value == "") {
        errorMsgLName.textContent = "Required";
        lastName.classList.add('red-border')
    } else {
        lastName.value = ""
        errorMsgLName.textContent = ""
    }
}


function validateEmail() {
    const emailFormat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)$/;
    if (email.value.match(emailFormat)) {
        email.value = "";
        errorMsgEmail.textContent = ""
    } else {
        errorMsgEmail.textContent = "Please provide a valid email address";
        email.classList.add('red-border')
    }
}





