let isAuthorized = false; // Global variable to track authorization status

document.addEventListener('DOMContentLoaded', () => {
    const popupContainer = document.getElementById('popup-container');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.popup-close');
    const navigateButtons = document.querySelectorAll('.popup-navigate');
    const authorizeButtons = document.querySelectorAll('.popup-authorize'); // Buttons to authorize the user
    const logoutButton = document.getElementById('logout-btn');
    const authLinksContainer = document.querySelector('.auth-links'); // Auth links container
    const headerButtons = document.getElementById('header-buttons');
    const dropdownMenu = document.getElementById('user-dropdown');
    const shoppingCart = document.getElementById('shopping-cart');

    // Open popup (trigger for first popup)
    document.querySelector('.auth-trigger').addEventListener('click', (e) => {
        e.preventDefault();
        showPopup(1);
    });
    let cartItems = [
        { name: "Мобільний телефон Apple iPhone 12 Pro Max 128 GB Silver ", price: 40499, quantity: 1, image: "./images/photos/Product photo1.webp" },
        { name: "Портативна акустика Philips DOT BT", price: 1299, quantity: 1, image: "./images/photos/Product photo2.webp" }
    ];
    // Close popups
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            closePopups();
        });
    });

    // Navigate between popups
    navigateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPopup = button.getAttribute('data-target');
            showPopup(targetPopup);
        });
    });

    // Authorize the user and close popups
    authorizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            isAuthorized = true;
            updateAuthElements(); // Update elements based on authorization
            closePopups();
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

    // Function to close all popups
    function closePopups() {
        popupContainer.classList.add('hidden');
        popups.forEach(popup => popup.classList.add('hidden'));
    }
    function updateAuthElements() {
        if (isAuthorized) {
            const username = "Гладчук Олексій"; // Replace with dynamic username if needed
            authLinksContainer.innerHTML = `
                <div class="relative">
                    <button id="username-btn" class="font-gilroyBold text-base text-gray-700 flex items-center gap-2">
                        <img src="./images/icons/user.webp" alt="User Icon" class="icon w-7 h-7">
                        ${username}
                    </button>
                    <div id="user-dropdown" class="absolute my-4 w-[232px] bg-white shadow-lg rounded-sm hidden">
                        <ul class="py-2 font-gilroySemibold text-md text-black">
                            <li class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src="./images/icons/user.webp" class="icon w-6 h-6" alt="Info Icon"> Моя інформація
                            </li>
                            <li class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src="./images/icons/wishlist.webp" class="icon w-6 h-6" alt="Wishlist Icon">Список бажань<span class = "text-gray-500">8</span>
                            </li>
                            <li class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src="./images/icons/My orders.webp" class="icon w-6 h-6" alt="Orders Icon"> Замовлення
                            </li>
                            <li class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src="./images/icons/Marker.webp" class="icon w-6 h-6" alt="Locations Icon"> Адреси
                            </li>
                            <li class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src="./images/icons/messenger 2.webp" class="icon w-6 h-6" alt="Feedbacks Icon"> Відгуки
                            </li>
                            <li class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src="./images/icons/mail 2.webp" class="icon w-5 h-5" alt="Subscriptions Icon"> Підписки
                            </li>
                            <li id="logout-link" class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src="./images/icons/exit 1.webp" class="icon w-5 h-5" alt="Logout Icon"> Вийти
                            </li>
                        </ul>
                    </div>
                </div>
            `;

            // Add event listener for dropdown toggle after DOM is updated
            document.getElementById('username-btn').addEventListener('click', () => {
                const dropdownMenu = document.getElementById('user-dropdown'); // Get dynamically added dropdown
                if (dropdownMenu) dropdownMenu.classList.toggle('hidden');
            });

            // Add event listener for log-out
            document.getElementById('logout-link').addEventListener('click', () => {
                showPopup(10); // Show the logout confirmation popup
            });
            headerButtons.innerHTML = `
<div id="header-buttons" class="image-buttons flex items-center gap-2">
    <!-- Compare Button -->
    <button class="image-button flex items-center bg-white rounded-full border-none p-2 hover:bg-gray-100 relative">
        <img src="./images/icons/compare.webp" alt="Compare" class="w-8 h-8">
        <div class="absolute -top-1 -right-1 bg-mint text-white text-xs font-gilroyRegular rounded-full w-5 h-5 flex items-center justify-center">12</div>
    </button>
    
    <!-- Wishlist Button -->
    <button class="image-button flex items-center bg-white border-none rounded-full p-2 hover:bg-gray-100 relative">
        <img src="./images/icons/wishlist.webp" alt="Favourites" class="w-8 h-8">
        <div class="absolute -top-1 -right-1 bg-mint text-white text-xs font-gilroyRegular rounded-full w-5 h-5 flex items-center justify-center">8</div>
    </button>
    
    <!-- Cart Button -->
    <button id="cart-button" class="image-button flex items-center bg-white rounded-full border-none p-2 hover:bg-gray-100 relative">
        <img src="./images/icons/cart.webp" alt="Cart" class="w-8 h-8">
        <div class="absolute -top-1 -right-1 bg-mint text-white text-xs font-gilroyRegular rounded-full w-5 h-5 flex items-center justify-center">2</div>
    </button>
    
    <!-- Cart Text -->
    <div class="text-left cart-text font-gilroyRegular ml-1 text-sm text-gray-600">
        <p>Сума</p>
        <p class="font-gilroyBold text-black">41 798 грн</p>
    </div>
</div>

<div id="shopping-cart" class="cart-popup bg-gray-100 shadow-xl rounded-sm w-[480px] absolute z-10 mt-[600px] mr-[200px] hidden">
    
    <!-- Header -->
    <div class="popup-header p-6 bg-white w-full shadow-lg">
        <h2 class="text-xl font-gilroyBold">Кошик</h2>
        <p class="text-sm font-gilroyMedium text-gray-500">2 товари на суму 41 798 грн</p>
    </div>
    
    <!-- Product List -->
    <div class="product-list bg-gray-100 space-y-2 h-[270px] overflow-y-scroll">
        <!-- Product 1 -->
        <div class="product-item flex bg-white rounded-lg p-4 max-w-[432px] mx-auto my-2">
            <!-- Product Image -->
            <img src="./images/photos/Product photo1.webp" alt="iPhone 12 Pro Max" class="w-20 h-20 rounded-md mr-4">
            
            <!-- Product Details -->
            <div class="product-details flex-grow">
                <h3 class="text-sm font-gilroyMedium leading-tight mb-2">Мобільний телефон Apple iPhone 12 Pro Max 128 GB Silver</h3>
                <!-- Quantity Section -->
                <div class="quantity-section flex items-center mt-2 w-fit max-w-[104px]">
                    <button class="quantity-decrease px-2 py-1 border-l border-t border-b bg-gray-100 border-gray-200 rounded-l-md text-xl">−</button>
                    <span class="quantity text-center font-gilroyMedium px-3 py-1 border-t border-b bg-gray-100 border-gray-200 text-xl">1</span>
                    <button class="quantity-increase px-2 py-1 border-r border-t border-b bg-gray-100 border-gray-200 rounded-r-md text-xl">+</button>
                </div>
            </div>
            <!-- Price and Delete Button -->
            <div class="price-and-delete text-right">
                    <!-- Delete Button -->
                <button class="delete-item text-gray-400 hover:text-red-600">
                    <img src="./images/icons/trash.png" alt="Delete" class="w-5 h-5">
                </button>
                <!-- Price Section -->
                <div class="price-section leading-tight mt-2">
                    <span class="line-through text-gray-400 font-gilroyMedium text-sm ml-2">45 499 грн</span>
                    <span class="text-red-600 font-gilroyBold text-lg">40 499 грн</span>
                </div>
            </div>
        </div>

        
        <!-- Product 2 -->
        <div class="product-item flex bg-white rounded-lg p-4 max-w-[432px] mx-auto my-2">
        <!-- Product Image -->
        <img src="./images/photos/Product photo2.webp" alt="iPhone 12 Pro Max" class="w-20 h-20 rounded-md mr-4">
        
        <!-- Product Details -->
        <div class="product-details flex-grow">
            <h3 class="text-sm font-gilroyMedium leading-tight mb-2">Портативна акустика Philips DOT BT</h3>
            <!-- Quantity Section -->
            <div class="quantity-section flex items-center mt-2 w-fit max-w-[104px]">
                <button class="quantity-decrease px-2 py-1 border-l border-t border-b bg-gray-100 border-gray-200 rounded-l-md text-xl">−</button>
                <span class="quantity text-center font-gilroyMedium px-3 py-1 border-t border-b bg-gray-100 border-gray-200 text-xl">1</span>
                <button class="quantity-increase px-2 py-1 border-r border-t border-b bg-gray-100 border-gray-200 rounded-r-md text-xl">+</button>
            </div>
        </div>
        <!-- Price and Delete Button -->
        <div class="price-and-delete text-right">
                <!-- Delete Button -->
            <button class="delete-item text-gray-400 hover:text-red-600">
                <img src="./images/icons/trash.png" alt="Delete" class="w-5 h-5">
            </button>
            <!-- Price Section -->
            <div class="price-section leading-tight mt-2">
                <span class="text-black font-gilroyBold text-lg">1 299 грн</span>
            </div>
        </div>
        </div>
        <!-- Product 3 -->
    <div class="product-item flex bg-white rounded-lg p-4 max-w-[432px] mx-auto my-2">
        <!-- Product Image -->
        <img src="./images/photos/Product photo2.webp" alt="iPhone 12 Pro Max" class="w-20 h-20 rounded-md mr-4">
        
        <!-- Product Details -->
        <div class="product-details flex-grow">
            <h3 class="text-sm font-gilroyMedium leading-tight mb-2">Портативна акустика Philips DOT BT</h3>
            <!-- Quantity Section -->
            <div class="quantity-section flex items-center mt-2 w-fit max-w-[104px]">
                <button class="quantity-decrease px-2 py-1 border-l border-t border-b bg-gray-100 border-gray-200 rounded-l-md text-xl">−</button>
                <span class="quantity text-center font-gilroyMedium px-3 py-1 border-t border-b bg-gray-100 border-gray-200 text-xl">1</span>
                <button class="quantity-increase px-2 py-1 border-r border-t border-b bg-gray-100 border-gray-200 rounded-r-md text-xl">+</button>
            </div>
        </div>
        <!-- Price and Delete Button -->
        <div class="price-and-delete text-right">
                <!-- Delete Button -->
            <button class="delete-item text-gray-400 hover:text-red-600">
                <img src="./images/icons/trash.png" alt="Delete" class="w-5 h-5">
            </button>
            <!-- Price Section -->
            <div class="price-section leading-tight mt-2">
                <span class="text-black font-gilroyBold text-lg">1 299 грн</span>
            </div>
        </div>
    </div>
    </div>
        <!-- Footer -->
    <div class="popup-footer bg-white p-6 shadow-lg">
        <div class="total-section flex justify-between items-center">
            <span class="text-lg text-black font-gilroySemibold">Усього</span>
            <span class="text-2xl text-black font-gilroyBold">41 798 грн</span>
        </div>
        <div class="action-buttons flex gap-4 mt-4 justify-between items-center">
            <button class="to-cart-btn bg-gray-100 border-none font-gilroyMedium text-mint px-8 py-3 rounded-md hover:bg-gray-300">До кошика</button>
            <button class="checkout-btn bg-mint text-white px-8 py-3 font-gilroyMedium rounded-md hover:bg-green-700">Оформити замовлення</button>
        </div>
    </div>
</div>

            `;
            document.getElementById('cart-button').addEventListener('click', () => {
                const shoppingCart = document.getElementById('shopping-cart'); // Get dynamically added dropdown
                if (shoppingCart) shoppingCart.classList.toggle('hidden');
            });
        } else {
            authLinksContainer.innerHTML = `
                <img src="./images/icons/user.webp" alt="User Icon" class="icon w-7 h-7 mr-2">
                <a href="#" class="auth-link auth-trigger flex items-center font-gilroyMedium text-base hover:underline" data-popup="1">Вхід</a>
                <span class="divider w-0.5 h-4 bg-gray-700"></span>
                <a id="signUpBtn" href="#" class="auth-link flex items-center font-gilroyMedium text-base hover:underline">Реєстрація</a>
            `;
            headerButtons.innerHTML = `
            <div id="header-buttons" class="image-buttons flex items-center gap-2">
                <button class="image-button flex items-center bg-white rounded-full border-none p-2 hover:bg-gray-100">
                    <img src="./images/icons/compare.webp" alt="Compare" class="w-8 h-8">
                </button>
                <button class="image-button flex items-center bg-white border-none rounded-full p-2 hover:bg-gray-100">
                    <img src="./images/icons/wishlist.webp" alt="Favourites" class="w-8 h-8">
                </button>
                <button class="image-button flex items-center bg-white  rounded-full border-none p-2 hover:bg-gray-100 relative">
                    <img src="./images/icons/cart.webp" alt="Cart" class="w-8 h-8">
                </button>
                <div class="text-left cart-text font-gilroyRegular ml-1 text-sm text-gray-600">
                    <p>У кошику</p>
                    <p>немає товарів</p>
                </div>
            </div>
            `;
            // Re-add event listeners for Sign In and Sign Up
            document.querySelector('.auth-trigger').addEventListener('click', (e) => {
                e.preventDefault();
                showPopup(1);
            });
        }
    }
    
    function toggleDropdown() {
        dropdownMenu.classList.toggle('hidden');
    }
    function toggleShoppingCart(){
        shoppingCart.classList.toggle('hidden');
    }
    document.addEventListener('click', (e) => {
        const usernameBtn = document.getElementById('username-btn');
        if (dropdownMenu && !dropdownMenu.contains(e.target) && !usernameBtn.contains(e.target)) {
            dropdownMenu.classList.add('hidden');
        }
        const shoppingBtn = document.getElementById('cart-button');
        if (shoppingCart && !shoppingCart.contains(e.target) && !shoppingBtn.contains(e.target)) {
            shoppingCart.classList.add('hidden');
        }
    });
    logoutButton.addEventListener('click', () => {
        isAuthorized = false;
        updateAuthElements();
        closePopups();
    });
});
