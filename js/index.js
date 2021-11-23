'use strict'

const hamburgerNav = document.getElementById('btn-hamburger')
const mobileNav = document.querySelector('.mobile-navigation')
const hamburgerImage = document.querySelector('.header__hamburger')

const product = document.getElementById('product')


const navigationInner = document.querySelector('.mobile-navigation__inner')

const arrow = document.querySelector('.mobile-navigation__arrow')


hamburgerNav.addEventListener('click', () => {
    if (mobileNav.style.display === "none") {
        mobileNav.style.display="block";
        
        
    } else {
        mobileNav.style.display = "none";
       
    }
    
});

product.addEventListener('click', () => {
    if (navigationInner.style.display === "none") {
        navigationInner.style.display="block";
        arrow.style.transform="rotate(180deg)";
        
        
    } else {
        navigationInner.style.display = "none";
        arrow.style.transform="rotate(0deg)";

       
    }
    
});