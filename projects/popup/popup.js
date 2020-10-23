const btn = document.querySelector('#btn');

btn.addEventListener('click', e=>{
    const container = document.querySelector('.container');
    const modal =document.querySelector('.modal');
    modal.classList.toggle('active')
    container.id = 'blur'

})