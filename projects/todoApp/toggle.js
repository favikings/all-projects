const mobileNav = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', ()=>{
    mobileNav.classList.add('hide');
});

closeBtn.addEventListener('click', ()=>{
    mobileNav.classList.remove('hide');
})


/* const mobileNav = document.querySelector('.mobile-nav');
console.log(mobileNav); */