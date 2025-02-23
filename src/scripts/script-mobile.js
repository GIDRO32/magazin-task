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

document.addEventListener("DOMContentLoaded", function() {
    const searchPopup = document.getElementById("searchPopup");
    const openSearch = document.getElementById("search-button");
    const closeSearch = document.getElementById("closeSearch");

    // Open popup
    openSearch.addEventListener("click", function() {
        searchPopup.classList.remove("hidden");
    });

    // Close popup
    closeSearch.addEventListener("click", function() {
        searchPopup.classList.add("hidden");
    });

    // Close popup when clicking outside of it
    searchPopup.addEventListener("click", function(event) {
        if (event.target === searchPopup) {
            searchPopup.classList.add("hidden");
        }
    });
});

// Close input when clicking outside
document.addEventListener("click", function (event) {
    let searchContainer = document.getElementById("search-container");

    if (!searchContainer.contains(event.target)) {
        searchContainer.classList.remove("expanded");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".nav-section h4");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function () {
            this.parentElement.classList.toggle("active");
        });
    });
});
