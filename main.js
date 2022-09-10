const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const lists = document.querySelectorAll('.list')


ham.addEventListener('click', function(){
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


