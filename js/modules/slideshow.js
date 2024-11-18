// project/js/slideshow.js

document.addEventListener("DOMContentLoaded", () => {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-slide');
    const totalTestimonials = testimonials.length;

    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('prev-testimonial');

    // Function to show a specific testimonial
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.classList.add('active');
            } else {
                testimonial.classList.remove('active');
            }
        });
    }

    // Initial display
    showTestimonial(currentTestimonial);

    // Next Button Event
    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    });

    // Previous Button Event
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentTestimonial);
    });

    // Auto Slide (Optional)
    // Uncomment the following lines to enable auto-sliding every 5 seconds

    /*
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }, 5000);
    */
});
