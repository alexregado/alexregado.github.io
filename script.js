// Página Sobre Nós
const choose = document.querySelector('.choose');
setTimeout(() => {
    choose.style.display = 'none';
}, 5000);

const menu = document.querySelector('#menu_icon');
const menuList = document.querySelector('.selector');

menu.addEventListener('click', () => {
    if(menuList.style.display == 'none') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
});


const hist = document.querySelector('.historia');
const text = document.querySelector('.textHist');



hist.addEventListener('click', () => {
        if(text.style.display == 'none') {
            text.style.display = 'block';
            textObjt.style.display = 'none';
            textPC.style.display = 'none';
            textSP.style.display = 'none';
            textMI.style.display = 'none';
        } else {
            text.style.display = 'none';
            
        }
});



const objt = document.querySelector('.objt');
const textObjt = document.querySelector('.textObjt');

objt.addEventListener('click', () => {
        if(textObjt.style.display == 'none') {
            textObjt.style.display = 'block';
            text.style.display = 'none';
            textPC.style.display = 'none';
            textSP.style.display = 'none';
            textMI.style.display = 'none';
        } else {
            textObjt.style.display = 'none';
            
        }
});


const planoCur = document.querySelector('.planoCur');
const textPC = document.querySelector('.textPC');

planoCur.addEventListener('click', () => {
        if(textPC.style.display == 'none') {
            textPC.style.display = 'block';
            text.style.display = 'none';
            textObjt.style.display = 'none';
            textSP.style.display = 'none';
            textMI.style.display = 'none';
        } else {
            textPC.style.display = 'none';
            
        }
});



const saidasProf = document.querySelector('.saidasProf');
const textSP = document.querySelector('.textSP');

saidasProf.addEventListener('click', () => {
        if(textSP.style.display == 'none') {
            textSP.style.display = 'block';
            text.style.display = 'none';
            textObjt.style.display = 'none';
            textPC.style.display = 'none';
            textMI.style.display = 'none';
        } else {
            textSP.style.display = 'none';
            
        }
});


const maisInfo = document.querySelector('.maisInfo');
const textMI = document.querySelector('.textMI');

maisInfo.addEventListener('click', () => {
        if(textMI.style.display == 'none') {
            textMI.style.display = 'block';
            text.style.display = 'none';
            textObjt.style.display = 'none';
            textPC.style.display = 'none';
            textSP.style.display = 'none';
        } else {
            textMI.style.display = 'none';
            
        }
});
; 





let burger = document.getElementById('burger'),
nav    = document.getElementById('main-nav'),
slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
this.classList.toggle('is-open');
nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function(e){
this.classList.toggle('is-slowmo');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
slowmo.dispatchEvent(clickEvent);
burger.dispatchEvent(clickEvent);

setTimeout(function(){
    burger.dispatchEvent(clickEvent);
    
    setTimeout(function(){
        slowmo.dispatchEvent(clickEvent);
    }, 3500);
}, 5500);
});






