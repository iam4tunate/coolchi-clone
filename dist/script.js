window.addEventListener('scroll', function () {
    const headerNav = document.querySelector('.header__nav');
    const headerMobNav = document.querySelector('.header__mobnav');
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 400) {
        headerNav.classList.add('fixed-nav');
    } else {
        headerNav.classList.remove('fixed-nav');
    }

    if (scrollHeight > 200) {
        headerMobNav.classList.add('fixed-nav');
    } else {
        headerMobNav.classList.remove('fixed-nav');
    }
})

const navToggle = document.querySelector('.header__mobnav-toggle')
const navToggleClose = document.querySelector('.navtoggleclose')
const mobileNavContainer = document.querySelector('.mobileNav__container')
const body = document.querySelector('.container')
const navToggleClose2 = document.querySelector('.header__mobnav-icon')

navToggle.addEventListener('click', function () {
    mobileNavContainer.classList.toggle('show-container');
    body.classList.toggle('transform');
    navToggle.style.display = "none";
    navToggleClose2.style.display = "block";
})

navToggleClose.addEventListener('click', function () {
close();
})

navToggleClose2.addEventListener('click', function () {
    close();
})

function close() {
    mobileNavContainer.classList.remove('show-container');
    body.classList.remove('transform');

    if (body.classList.contains('transform')) {
        navToggle.style.display = "none";
        navToggleClose2.style.display = "block";
    } else {
        navToggle.style.display = "block";
        navToggleClose2.style.display = "none";
    }
}