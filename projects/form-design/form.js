// console.log("Coneccted");

// const links = document.getElementsByTagName('a');

// const link_array = Array.from(links);

// for (link of link_array){
//     console.log(link);
// }

// console.log(link_array);

const btn_links = document.querySelectorAll('.box-link');




for(link of btn_links){
    link.addEventListener('click', function(){

        const box_one = document.querySelector('.first-box');
        const box_two = document.querySelector('.second-box');
        box_two.classList.remove('dont-show');
        box_one.classList.add('dont-show');
        
        console.log(box_two)
    })
}


 