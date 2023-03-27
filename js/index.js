
// READ MORE AND SHOW LESS FUNCTIONALITIES STARTS HERE _________
let moreText = document.querySelector(".more-txt")
let showNone = document.querySelector(".show-less")
let readMore = document.querySelector(".read-more")

document.querySelector(".read-more").onclick = () => {
  moreText.classList.add("show")
  showNone.classList.add("show")
  readMore.classList.add("hidden")
}

document.querySelector(".show-less").onclick = () => {
  moreText.classList.remove("show")
  showNone.classList.remove("show")
  readMore.classList.remove("hidden")
}

// READ MORE AND SHOW LESS FUNCTIONALITIES ENDS HERE _________


// Desktop log-in and register prompts
let loginForm = document.querySelector('.login-form-container');
let closeForm = document.querySelector('#close-login-btn')

let regForm = document.querySelector('.reg-form-container');
let closeregForm = document.querySelector('#close-reg-btn');

document.querySelector('.log-in').onclick = () => {
  loginForm.classList.toggle('active');
}

document.querySelector('.hero-btn').onclick = () => {
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
}

document.querySelector('.register').onclick = () => {
  regForm.classList.toggle('active-reg');
}

document.querySelector('#close-reg-btn').onclick = () => {
  regForm.classList.remove('active-reg');
}
// End Desktop log-in and register prompts

// Mobile log-in and register button propmts
let mobileLogin = document.querySelector('.mobile-cta')

document.querySelector('.profile-picture-mobile').onclick = () => {
  mobileLogin.classList.toggle('hidden-view')
}

document.querySelector('.log-in-m').onclick = () => {
  loginForm.classList.toggle('active');
}

document.querySelector('.register-m').onclick = () => {
  regForm.classList.toggle('active-reg');
}



// SWIPER 

const swiper = new Swiper('.swiper', {

  autoplayDisableOnInteraction: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}, 3000);