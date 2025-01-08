document.addEventListener('DOMContentLoaded', () => {
    const popupContainer = document.getElementById('popup-container');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.popup-close');
    const navigateButtons = document.querySelectorAll('.popup-navigate');

    // Open popup (trigger for first popup)
    document.querySelector('.auth-trigger').addEventListener('click', (e) => {
        e.preventDefault();
        showPopup(1);
    });

    // Close popups
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            popupContainer.classList.add('hidden');
            popups.forEach(popup => popup.classList.add('hidden'));
        });
    });

    // Navigate between popups
    navigateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPopup = button.getAttribute('data-target');
            showPopup(targetPopup);
        });
    });

    // Function to show a specific popup
    function showPopup(index) {
        popupContainer.classList.remove('hidden');
        popups.forEach(popup => {
            if (popup.getAttribute('data-popup') === index.toString()) {
                popup.classList.remove('hidden');
            } else {
                popup.classList.add('hidden');
            }
        });
    }
});
