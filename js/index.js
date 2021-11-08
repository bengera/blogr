'use strict'

const hamburgerNav = document.getElementById('btn-hamburger')
const mobileNav = document.querySelector('.mobile-navigation')

hamburgerNav.addEventListener('click', () => {
    if (mobileNav.style.display === "none") {
        mobileNav.style.display="block";
        
    } else {
        mobileNav.style.display = "none";
       
    }
    
});