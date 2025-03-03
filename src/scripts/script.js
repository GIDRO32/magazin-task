const slidesContainer = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const leftButton = document.querySelector('.nav-button-left');
const rightButton = document.querySelector('.nav-button-right');

let currentSlide = 0;

function updateSlides(index) {
    const slideWidth = slidesContainer.offsetWidth;
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    updateDots(index);
}

function updateDots(index) {
    // Show pagination only on PC
    if (window.innerWidth >= 1024) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-green-600', i === index);
            dot.classList.toggle('bg-gray-400', i !== index);
            dot.style.display = 'block';
        });
    } else {
        dots.forEach(dot => dot.style.display = 'none');
    }
}

window.addEventListener('resize', () => {
    updateDots(currentSlide);
});


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlides(currentSlide);
    });
});

rightButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlides(currentSlide);
});

leftButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + dots.length) % dots.length;
    updateSlides(currentSlide);
});

// Automatically update the slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlides(currentSlide);
}, 5000);
// JavaScript to handle color selection
document.addEventListener("DOMContentLoaded", () => {
    const dotWrappers = document.querySelectorAll(".color-dots .dot-wrapper");

    dotWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", () => {
            // Remove 'selected' class from all wrappers
            dotWrappers.forEach(w => w.classList.remove("selected"));
            
            // Add 'selected' class to the clicked wrapper
            wrapper.classList.add("selected");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const colorDots = document.querySelectorAll(".cdot");

    colorDots.forEach(dot => {
        const bgColor = window.getComputedStyle(dot).backgroundColor;

        // Check if the color is white
        if (bgColor === "rgb(255, 255, 255)") {
            dot.classList.add("border-gray-500"); // Add gray border
        }
    });
});
document.querySelectorAll('.size-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        document.querySelectorAll('.size-option').forEach(opt => {
            opt.classList.remove('border-green-500');
            opt.classList.remove('text-black');
            opt.classList.add('border-gray-200');
            opt.classList.add('text-gray-600');
        });

        // Add active class to the clicked option
        this.classList.remove('border-gray-200');
        this.classList.remove('text-gray-600');
        this.classList.add('text-black');
        this.classList.add('border-green-500');
    });
});