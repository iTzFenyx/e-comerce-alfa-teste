// Import products database
// Importar o arquivo products.js no HTML antes deste script

// Global variables
let cart = [];
let filteredProducts = [];
let currentPage = 1;
let productsPerPage = 12;
let isLoading = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // Load products from database
    filteredProducts = [...products];
    
    // Load cart from localStorage
    loadCartFromStorage();
    
    // Render initial products
    renderProducts();
    updateCartUI();
    initializeTheme();
    createParticles();
    
    // Setup infinite scroll
    setupInfiniteScroll();
});

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('techstore_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('techstore_cart', JSON.stringify(cart));
}

// Infinite scroll setup
function setupInfiniteScroll() {
    const productsContainer = document.getElementById('products-grid');
    
    window.addEventListener('scroll', () => {
        if (isLoading) return;
        
        const scrollPosition = window.innerHeight + window.scrollY;
        const pageHeight = document.documentElement.offsetHeight;
        
        if (scrollPosition >= pageHeight - 200) {
            loadMoreProducts();
        }
    });
}

// Load more products
function loadMoreProducts() {
    if (isLoading) return;
    
    isLoading = true;
    showLoadingSpinner();
    
    setTimeout(() => {
        currentPage++;
        renderProducts(false);
        hideLoadingSpinner();
        isLoading = false;
    }, 500);
}

// Show loading spinner
function showLoadingSpinner() {
    const productsGrid = document.getElementById('products-grid');
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.innerHTML = '<div class="spinner"></div>';
    productsGrid.appendChild(spinner);
}

// Hide loading spinner
function hideLoadingSpinner() {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.remove();
    }
}

// Render products with pagination
function renderProducts(append = false) {
    const productsGrid = document.getElementById('products-grid');
    
    if (!append) {
        productsGrid.innerHTML = '';
        currentPage = 1;
    }
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToRender = filteredProducts.slice(startIndex, endIndex);
    
    if (productsToRender.length === 0 && currentPage === 1) {
        productsGrid.innerHTML = '<div class="no-products"><i class="fas fa-search"></i><p>Nenhum produto encontrado.</p></div>';
        return;
    }
    
    productsToRender.forEach((product, index) => {
        const productCard = createProductCard(product, startIndex + index);
        productsGrid.appendChild(productCard);
    });
    
    // Reinitialize AOS for new elements
    AOS.refresh();
}

// Create product card element
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 12) * 50);
    
    card.innerHTML = `
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-overlay">
                <button class="btn-quick-view" onclick="showProductDetails(${product.id})" title="Visualização Rápida">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-wishlist" onclick="toggleWishlist(${product.id})" title="Favoritos">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-text">(${product.reviews})</span>
            </div>
            <div class="product-price-container">
                ${product.oldPrice ? `<span class="old-price">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            </div>
            <div class="product-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Adicionar</span>
                </button>
                <button class="btn-details" onclick="viewProduct(${product.id})">
                    <i class="fas fa-info-circle"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// View individual product
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Save product to localStorage for product page
    localStorage.setItem('current_product', JSON.stringify(product));
    
    // Navigate to product page
    window.location.href = 'product.html';
}

// Add to cart with enhanced functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is in stock
    if (product.stock <= 0) {
        showNotification('Produto fora de estoque!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity >= product.stock) {
            showNotification('Estoque máximo atingido para este produto!', 'error');
            return;
        }
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartUI();
    showNotification('Produto adicionado ao carrinho!', 'success');
    
    // Animate cart button
    const cartButton = document.querySelector('.btn-cart');
    cartButton.classList.add('cart-bounce');
    setTimeout(() => cartButton.classList.remove('cart-bounce'), 600);
}

// Update cart UI with enhanced calculations
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartDiscount = document.getElementById('cart-discount');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Seu carrinho está vazio.</p></div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="quantity-btn btn-remove" onclick="removeFromCart(${item.id})" title="Remover">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal > 500 ? subtotal * 0.1 : 0; // 10% de desconto acima de R$500
    const total = subtotal - discount;
    
    // Update totals
    if (cartSubtotal) cartSubtotal.textContent = subtotal.toFixed(2);
    if (cartDiscount) cartDiscount.textContent = discount.toFixed(2);
    if (cartTotal) cartTotal.textContent = total.toFixed(2);
}

// Update quantity with stock validation
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (!item || !product) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
    } else if (newQuantity <= product.stock) {
        item.quantity = newQuantity;
        saveCartToStorage();
        updateCartUI();
    } else {
        showNotification('Estoque máximo atingido!', 'error');
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
    showNotification('Produto removido do carrinho', 'info');
}

// Clear cart
function clearCart() {
    cart = [];
    saveCartToStorage();
    updateCartUI();
    showNotification('Carrinho esvaziado', 'info');
}

// Enhanced search with debouncing
let searchTimeout;
function searchProducts(event) {
    clearTimeout(searchTimeout);
    const searchTerm = event.target.value.toLowerCase();
    
    searchTimeout = setTimeout(() => {
        if (searchTerm === '') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        }
        
        currentPage = 1;
        renderProducts();
    }, 300);
}

// Filter by category
function filterByCategory(category) {
    // Update active tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Filter products
    if (category === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    currentPage = 1;
    renderProducts();
}

// Sort products with enhanced options
function sortProducts() {
    const sortBy = document.getElementById('sort-filter').value;
    
    switch(sortBy) {
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'reviews':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
    }
    
    currentPage = 1;
    renderProducts();
}

// Enhanced checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!', 'error');
        return;
    }
    
    // Save cart to localStorage for checkout page
    saveCartToStorage();
    
    // Navigate to checkout
    window.location.href = 'checkout.html';
}

// Helper functions
function getCategoryName(category) {
    const categories = {
        'eletronicos': 'Eletrônicos',
        'roupas': 'Roupas',
        'acessorios': 'Acessórios'
    };
    return categories[category] || category;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Toggle wishlist
function toggleWishlist(productId) {
    const button = event.target.closest('.btn-wishlist');
    const icon = button.querySelector('i');
    
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        showNotification('Produto adicionado aos favoritos!', 'success');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        showNotification('Produto removido dos favoritos', 'info');
    }
}

// Toggle user menu
function toggleUserMenu() {
    showNotification('Funcionalidade de login em desenvolvimento', 'info');
}

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    showNotification(`Tema ${newTheme === 'dark' ? 'escuro' : 'claro'} ativado`, 'info');
}

function updateThemeIcon(theme) {
    const themeButton = document.querySelector('.btn-theme i');
    themeButton.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Create particles for hero section
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Show product details modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div class="product-details">
                <img src="${product.image}" alt="${product.name}" style="max-width: 400px; width: 100%; margin-bottom: 2rem; border-radius: var(--border-radius-lg);">
                <h2>${product.name}</h2>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-text">(${product.reviews} avaliações)</span>
                </div>
                <p>${product.description}</p>
                <div class="product-price-container">
                    ${product.oldPrice ? `<span class="old-price">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                    <div class="product-price">R$ ${product.price.toFixed(2)}</div>
                </div>
                <div class="stock-info">
                    <i class="fas fa-box"></i>
                    <span>Estoque: ${product.stock} unidades</span>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-primary btn-large" onclick="addToCart(${product.id}); this.parentElement.parentElement.parentElement.remove();">
                        <i class="fas fa-shopping-bag"></i>
                        Adicionar ao Carrinho
                    </button>
                    <button class="btn btn-secondary btn-large" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye"></i>
                        Ver Produto
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Toggle cart
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('hidden');
}

// Toggle search
function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('hidden');
    if (!searchBar.classList.contains('hidden')) {
        document.getElementById('search-input').focus();
    }
}

// Scroll to products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.remove();
    }
});
