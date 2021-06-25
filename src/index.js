import "./styles/style.scss";
var navbarIcon = document.querySelector(".navbar__icon");
var headerContainer = document.querySelector(".header__container");
var navbarBody = document.querySelector(".navbar__body");
navbarIcon.onclick = function() {
    navbarIcon.classList.toggle("change");    
    headerContainer.classList.toggle("active");        
}

