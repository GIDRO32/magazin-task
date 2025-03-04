document.getElementById("hamburger-button").addEventListener("click", function () {
    document.getElementById("hamburger-menu").classList.add("open");
});

document.getElementById("close-hamburger").addEventListener("click", function () {
    document.getElementById("hamburger-menu").classList.remove("open");
});

// Close when clicking outside
document.addEventListener("click", function (event) {
    let menu = document.getElementById("hamburger-menu");
    let button = document.getElementById("hamburger-button");

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("open");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const searchPopup = document.getElementById("searchPopup");
    const closeSearch = document.getElementById("closeSearch");

    searchButton.addEventListener("click", () => {
        searchPopup.classList.remove("hidden");
        searchPopup.classList.add("flex"); // Show the search input
    });

    closeSearch.addEventListener("click", () => {
        searchPopup.classList.add("hidden");
        searchPopup.classList.remove("flex");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function enableSwipe(sliderId) {
        const slider = document.getElementById(sliderId);
        let startX, currentX, isDragging = false, index = 0;
        const slides = slider.children.length;
        
        function updateSlidePosition() {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        function updateMobileDots(index) {
            const mobileDots = document.querySelectorAll('.dot');
            
            mobileDots.forEach((dot, i) => {
                dot.classList.toggle('bg-green-600', i === index);
                dot.classList.toggle('bg-gray-400', i !== index);
            });
        }
        function updateMobileSlides(index) {
            const mobileSlidesContainer = document.querySelector('#mobileSlides');
            const slideWidth = mobileSlidesContainer.offsetWidth;
            
            mobileSlidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
            updateMobileDots(index);
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1024) {
                updateMobileDots(currentSlide);
            } else {
                updateDots(currentSlide);
            }
        });
        slider.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        slider.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });

        slider.addEventListener("touchend", () => {
            if (!isDragging) return;
            isDragging = false;

            if (startX - currentX > 50 && index < slides - 1) {
                index++; // Swipe left (next)
            } else if (currentX - startX > 50 && index > 0) {
                index--; // Swipe right (previous)
            }
            
            updateSlidePosition();
        });
    }
    
    // Enable swiping for both versions
    enableSwipe("tabletSlides");
    enableSwipe("mobileSlides");
});
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateMobileSlides(currentSlide);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".nav-section h4");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });
});