const mobileNav = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', ()=>{
    mobileNav.classList.toggle('hide');
})