//nav
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


//login form

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Login submitted!");
});

//signup form

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Signup submitted!");
});


//plan & pricing

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Plan selected! Proceeding to checkout.");
    });
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');
const buttonGroup = document.querySelector('.button-grp');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && 
        !navLinks.contains(e.target) && 
        !searchBar.contains(e.target) && 
        !buttonGroup.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Prevent dropdown from closing immediately on mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const content = dropdown.querySelector('.dropdown-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});


