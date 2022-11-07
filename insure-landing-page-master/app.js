const menu = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
})