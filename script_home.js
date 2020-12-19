// Menu Expand 
const menu = document.querySelector('#menu_icon');
const menuList = document.querySelector('.selector');

menu.addEventListener('click', () => {
    if(menuList.style.display == 'none') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
});

debugger