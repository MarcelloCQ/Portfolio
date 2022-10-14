const menu = document.getElementById('navIconMenu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('nav--open')
})