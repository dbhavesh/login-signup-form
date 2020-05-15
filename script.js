const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const siContainer = document.getElementById('sign-in-container');
const siEmail = document.getElementById('si-email');
const siPassword = document.getElementById('si-password');
const suContainer = document.getElementById('sign-up-container');
const suName = document.getElementById('su-name');
const suEmail = document.getElementById('su-email');
const suPassword = document.getElementById('su-password');
const suPassword2 = document.getElementById('sc-password');


function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.className = 'error';
    errorMessage.innerText = message;
    input.className = 'error-highlight';
}

function showSuccess(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.className = 'hide';
    input.className = 'success-highlight';
}

function checkRequired(inputArr) {
    inputArr.forEach(input => {
      input.value.trim() === ''
      ? showError(input, `${input.id.slice(3)} required`)
      : showSuccess(input);
    });
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value !== '') {
        re.test(input.value.trim())
        ? showSuccess(input)
        : showError(input, 'Invalid Email');
    }
}

function checkName(input) {
    const re = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
    if(input.value !== '') {
        re.test(input.value.trim())
        ? showSuccess(input)
        : showError(input, 'Invalid Name');
    }
}

function checkPassword(input ,min, max) {
    if (input.value !== '') {
        input.value.length < min
        ? showError(input, `Password must be at least ${min} characters`)
        : input.value.length > max
        ? showError(input, `Password must be less than ${max} characters`)
        : showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if (input2.value !== '' && (input1.value !== input2.value)) {
      showError(input2, 'Passwords do not match');
    }
}

suContainer.addEventListener('submit', e => {
    e.preventDefault();
    checkRequired([suName, suEmail, suPassword, suPassword2]);
    checkEmail(suEmail);
    checkName(suName);
    checkPassword(suPassword, 6, 20);
    checkPasswordMatch(suPassword, suPassword2);
})

siContainer.addEventListener('submit', e => {
    e.preventDefault();
    checkRequired([siEmail, siPassword]);
    checkEmail(siEmail);
})

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
