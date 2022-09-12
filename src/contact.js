const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const lists = document.querySelectorAll('.list');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('in-active');
  logo.classList.toggle('in-active');
});

logo.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('in-active');
  logo.classList.toggle('in-active');
});

const spreadList = [...lists];
spreadList.forEach((list) => {
  list.addEventListener('click', () => {
    ham.classList.toggle('active');
    menu.classList.toggle('in-active');
    logo.classList.toggle('in-active');
  });
});

// ----------------------
const nameError = document.querySelector('.c-name-error');
const emailErr = document.querySelector('.c-mail-error');
const textErr = document.querySelector('.c-text-error');
const submitErr = document.querySelector('.c-submit-error');

function nameFun() {
  const nameMes = document.querySelector('.contact-name').value;
  const named = document.querySelector('#contact-name');
  if (nameMes.length === 0) {
    nameError.innerHTML = 'Required';
    nameError.style.color = 'red';
    named.style.border = '1px solid red';
    return false;
  }
  if (!nameMes.match(/^[a-zA-Za]*\s[a-zA-Za]*$/)) {
    nameError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    nameError.style.color = 'red';
    named.style.border = '1px solid red';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  nameError.style.color = 'green';
  named.style.border = '1px solid green';
  return true;
}

function emailFun() {
  const emails = document.querySelector('.contact-mail').value;
  const email = document.querySelector('#contact-mail');
  if (emails.length === 0) {
    emailErr.innerHTML = 'Required';
    emailErr.style.color = 'red';
    email.style.border = '1px solid red';
    return false;
  }
  if (!emails.match(/^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]*\.[a-z]+(?:\.[a-z-0-9-]+)*$/)) {
    emailErr.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    emailErr.style.color = 'red';
    email.style.border = '1px solid red';
    return false;
  }
  emailErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  emailErr.style.color = 'green';
  email.style.border = '1px solid green';
  return true;
}

function textareaFun() {
  const textareas = document.querySelector('.contact-text').value;
  const required = 30;
  const left = required - textareas.length;
  if (left > 0) {
    textErr.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    textErr.style.color = 'red';
    return false;
  }
  textErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  textErr.style.color = 'green';
  return true;
}

function submitFun() {
  if (!nameFun() || !emailFun() || !textareaFun()) {
    submitErr.style.display = 'block';
    submitErr.innerHTML = 'please fix';
    submitErr.style.color = 'red';
    setTimeout(() => { submitErr.style.display = 'none'; }, 4000);
    return false;
  }
  return true;
}
submitFun();