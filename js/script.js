document.addEventListener('DOMContentLoaded', (event) => {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slides = document.querySelectorAll('.slide .item');
    let index = 0;

    function showSlide(i) {
        slides.forEach((slide, idx) => {
            slide.style.display = idx === i ? 'block' : 'none';
        });
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, 3000); // Change slide every 5 seconds

    // Initial display
    showSlide(index);

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Form submitted successfully!");
            // You can add AJAX here to send form data to the server
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
