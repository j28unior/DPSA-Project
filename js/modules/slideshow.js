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
// slideshow.js

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevButton = document.getElementById("prev-testimonial");
    const nextButton = document.getElementById("next-testimonial");
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Event listeners for navigation buttons
    nextButton.addEventListener("click", () => {
        nextSlide();
        stopSlideShow();
        startSlideShow();
    });

    prevButton.addEventListener("click", () => {
        prevSlide();
        stopSlideShow();
        startSlideShow();
    });

    // Initialize slideshow
    showSlide(currentSlide);
    startSlideShow();
});

