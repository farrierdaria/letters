let burgerMenu = document.querySelector('.header__nav-burger');
let navMenu = document.querySelector('.menu-container');
let navContainer = document.querySelector('.header__nav');

function BurgerClicked() {
    if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        navContainer.classList.remove('active');
    } else {
        burgerMenu.classList.add('active');
        navMenu.classList.add('active');
        navContainer.classList.add('active');
    }
}

let alphabetArray = document.querySelectorAll('.alphabet-item');

alphabetArray.forEach(function(item, i) {
    
    item.href = "index.html";

    alphabetArray[i].addEventListener('click', () => {
        
    })
});