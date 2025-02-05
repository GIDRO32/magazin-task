document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("show");
    });

    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("show");
    });
});
document.getElementById("search-button").addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents closing immediately when clicked

    let searchContainer = document.getElementById("search-container");
    let searchInput = document.getElementById("search-input");

    if (searchContainer.classList.contains("expanded")) {
        searchContainer.classList.remove("expanded");
        searchInput.blur(); // Remove focus
    } else {
        searchContainer.classList.add("expanded");
        searchInput.classList.remove("hidden");
        searchInput.focus();
    }
});

// Close input when clicking outside
document.addEventListener("click", function (event) {
    let searchContainer = document.getElementById("search-container");

    if (!searchContainer.contains(event.target)) {
        searchContainer.classList.remove("expanded");
    }
});

