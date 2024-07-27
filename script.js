// Select DOM elements
const formBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');
const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const imgBtns = document.querySelectorAll('.img-btn');
const loginSuccess = document.querySelector('#login-success');
const bookingSuccess = document.querySelector('#booking-success');

// Handle scroll event
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

// Toggle navbar menu on click
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Show login form
formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

// Close login form
formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// Change image on button click
imgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        const src = btn.getAttribute('data-src');
        document.querySelector('#img-slider').src = src;
    });
});

// Initialize Swiper
const swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Function to show notifications
const showNotification = (element) => {
    element.classList.add('show');
    setTimeout(() => {
        element.classList.remove('show');
    }, 3000); // Hide after 3 seconds
};

// Show login success notification (example: after login form submission)
formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
    // Simulate successful login (you would replace this with your actual login logic)
    setTimeout(() => {
        showNotification(loginSuccess);
    }, 500);
});

// Show booking success notification (example: after booking form submission)
const bookingForm = document.querySelector('.book form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission (you can remove this in actual use)
        showNotification(bookingSuccess);
        // Perform booking logic here
    });
}
