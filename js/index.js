
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}



window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  // fadeOut();
  
}
  
function fadeOut(){
    setTimeout(loader, 4000);
}

// ==== Animate on Scroll Initialize  ==== //
AOS.init();


// ==== GSAP Animations ==== //
// ==== text  ==== //
gsap.from(".test", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});