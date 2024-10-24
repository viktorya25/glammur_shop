const btnOpen = document.querySelector('.pulse-button');
const menuList = document.querySelector('.info_pulse');

btnOpen.addEventListener('click', () => {
    menuList.classList.toggle('info_pulse--open');
});
