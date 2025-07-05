// Add 'scrolled' class when user scrolls down
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

//scroll-in animation for about section
document.addEventListener('DOMContentLoaded',()=>{
  const aboutSection = document.querySelector('.about');
  function revealOnScroll(){
    const windowHeight = window.innerHeight;
    const aboutTop = aboutSection.getBoundingClientRect().top;
    if(aboutTop<windowHeight-100){
      aboutSection.classList.add('visible');
      window.removeEventListener('scroll', revealOnScroll);
    }
  }
  window.addEventListener('scroll',revealOnScroll);
  revealOnScroll();
})

//simulate form submission
document.addEventListener('DOMContentLoaded',()=>{
  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    messageDiv.textContent = "Thank you for your message! We'll get back to you soon.";
    messageDiv.style.color = '#9acd32';
    form.reset();

  });
});

//hamburger
document.addEventListener('DOMContentLoaded', function(){
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener("click",
    () => {
    mobileMenu.classList.toggle("show");
});
});