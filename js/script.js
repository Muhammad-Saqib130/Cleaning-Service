document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-container');
const blurBackground = document.querySelector('.blur-background');
const navLinks = document.querySelectorAll('.navlinks a');