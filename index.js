const btnMenu = document.getElementById('btn-menu');

function toggleMenu(){
    const nav = document.querySelector('.menu');
    nav.classList.toggle('active')
}
btnMenu.addEventListener('click',toggleMenu)
