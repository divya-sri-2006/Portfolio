
/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* =========================================
   CLOSE MOBILE MENU
   WHEN A LINK IS CLICKED
========================================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5, 5, 5, 0.98)";

    } else {

        header.style.background = "rgba(8, 8, 8, 0.95)";

    }

});


/* =========================================
   REVEAL SECTIONS ON SCROLL
========================================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.
```
