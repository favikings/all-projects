const clickBtn = document.querySelector('.menu-btn');

clickBtn.addEventListener('click',function(){
       
        const sideBar = document.querySelector('.sidebar');
        const main = document.querySelector('.main');

        sideBar.classList.toggle('close-SideBar');
        main.classList.toggle('expand-main');
});
