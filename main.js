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

instructors = [{
    instructorName: 'Kenny Elias',
    instructorImage: './capstone1-gym-photos/future-look.jpg',
    aboutInstructor: 'Founder and CEO of Futuristic Gyms. Has a very nice big donought too.',
    instructorMessage: 'We can do all things as long as we believe in ourselves and have a real reason we want to succeed and also being disciplined.',
  },{
    instructorName: 'Victoria Ogundele',
    instructorImage: './capstone1-gym-photos/future-look.jpg',
    aboutInstructor: 'Wonder woman like instructor. 5yrs experience in looking and being hot',
    instructorMessage: 'You live in the moment, you wont move forward. If you look at the future while in the moment, you will be great in the long run',
  },{
    instructorName: 'Kelvin Evaristus',
    instructorImage: './capstone1-gym-photos/future-look.jpg',
    aboutInstructor: 'Agbero number1. expert breaking bottles on heads. 79yrs experience in doing bad things',
    instructorMessage: 'All you need to do is find that bottle with the perfect texture and strength...Dont forget to look at the grip of the bottle too',
    className: 'hide',
  },{
    instructorName: 'Gideon Walters',
    instructorImage: './capstone1-gym-photos/future-look.jpg',
    aboutInstructor: 'Expert martial artist. Black belt kung fu and karate holder. Trained accross asia',
    instructorMessage: 'We are all warriors! All we need to do is let loose of fear in us, and we will be able to move mountains with a tip of a finger',
    className: 'hide',
  },{
    instructorName: 'Emmanuel Nwank',
    instructorImage: './capstone1-gym-photos/future-look.jpg',
    aboutInstructor: 'Physically short, and argues alot, even when he is wrong, he believes he is right',
    instructorMessage: 'No matter how right a person might be, there is always a false statement in their lips. So never make anyone make you feel wrong',
    className: 'hide',
  },{
    instructorName: 'Camsey Roland',
    instructorImage: './capstone1-gym-photos/future-look.jpg',
    aboutInstructor: 'Expert track runner. 10years experience training somme of the best in the world',
    instructorMessage: "Distance slows us down while thinking about it... Close your eyes and move, you'll get there before you even realize it",
    className: 'hide',
  },
  ];
  
  const cover = document.querySelector('.trainers')
  
  instructors.forEach((train) => {
  const div = document.createElement("div");
  div.innerHTML += `
  <img src="${train.instructorImage}" class="${train.className}" alt="">
                      <div class="first-speaker-div ${train.className}">
                          <h3 class="first-speaker-h3">${train.instructorName}</h3>
                          <p class="first-speaker-p1">${train.aboutInstructor}</p>
                          <p class="first-speaker-p2">${train.instructorMessage}</p>
                      </div>
  `
  div.classList.add('first-speaker')
  cover.append(div)
  })
  const speakDiv = document.querySelectorAll('.hide')
  const btn = document.querySelector('.button');
  const spreadLis = [...speakDiv];
  
  btn.addEventListener('click', function(){
    btn.classList.toggle('select')
    spreadLis.forEach((list) => {
    list.classList.toggle('tap')
   })
  })

  const button = document.querySelector('.second-section-end-mobile');
const form = document.querySelector('.form');
const btn2 = document.querySelector('.btn2');
const toggle = document.querySelector('.toggle');
const thirdSec = document.querySelector('.third-section');
const cards = document.querySelector('.cards');

button.addEventListener('click', () => {
  form.style.display = "block"
  document.body.style.overflow = "hidden"
  thirdSec.style.filter = 'blur(2px)'
  cards.style.filter = 'blur(4px)'
  button.style.filter = 'blur(4px)'
})

toggle.addEventListener('click', () => {
  form.style.display = 'none'
  document.body.style.overflow = 'initial'
  thirdSec.style.filter = 'none'
  cards.style.filter = 'none'
  button.style.filter = 'none'
})

// --------------formvalidation---------

const nameError = document.querySelector('.nameErr')
const emailError = document.querySelector('.emailErr')
const textError = document.querySelector('.textErr')
const submitError = document.querySelector('.submitErr')

function nameMss() {
  const names = document.querySelector('.name').value;
  const name = document.querySelector('#name');
  if (name.length === 0) {
    nameError.innerHTML = 'Required';
    nameError.style.color = 'red';
    name.style.border = '1px solid red';
    return false;
  }
  if (!names.match(/^[a-zA-Za]*\s[a-zA-Za]*$/)) {
    nameError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    nameError.style.color = 'red';
    name.style.border = '1px solid red';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  nameError.style.color = 'green';
  name.style.border = '1px solid green';
  return true;
}

function emailMss() {
  const emails = document.querySelector('.email').value;
  const email = document.querySelector('#email');
  if (emails.length === 0) {
    emailError.innerHTML = 'Required';
    emailError.style.color = 'red';
    email.style.border = '1px solid red';
    return false;
  }
  if (!emails.match(/^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]*\.[a-z]+(?:\.[a-z-0-9-]+)*$/)) {
    emailError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    emailError.style.color = 'red';
    email.style.border = '1px solid red';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  emailError.style.color = 'green';
  email.style.border = '1px solid green';
  return true;
}

function textareaMss() {
  const textareas = document.querySelector('.textarea').value;
  const required = 30;
  const left = required - textareas.length;
  if (left > 0) {
    textError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    textError.style.color = 'red';
    return false;
  }
  textError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  textError.style.color = 'green';
  return true;
}

function submitMss() {
if (!nameMss() || !emailMss() || !textareaMss()) {
  submitError.style.display = 'block';
  submitError.innerHTML = 'please fix';
  submitError.style.color = 'red';
  setTimeout(() => { submitError.style.display = 'none'; }, 4000);
  return false;
}
return true;
}
