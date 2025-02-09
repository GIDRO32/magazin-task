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

