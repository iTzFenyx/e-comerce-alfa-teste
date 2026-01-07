// Product data
const products = [
    {
        id: 1,
        name: "Smartphone Samsung Galaxy S23",
        description: "Tela Dynamic AMOLED 2X de 6.1\", 256GB, câmera de 50MP, 5G",
        price: 4299.90,
        oldPrice: 5299.90,
        category: "eletronicos",
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=300&fit=crop&auto=format",
        badge: "Mais Vendido"
    },
    {
        id: 2,
        name: "Notebook Dell XPS 13",
        description: "Intel Core i7 12ª geração, 16GB RAM, 512GB SSD, tela InfinityEdge",
        price: 7999.90,
        oldPrice: 8999.90,
        category: "eletronicos",
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format",
        badge: "Premium"
    },
    {
        id: 3,
        name: "Camiseta Premium Cotton",
        description: "Algodão orgânico 100%, corte slim fit, disponível em 6 cores",
        price: 129.90,
        oldPrice: 179.90,
        category: "roupas",
        rating: 4.6,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&auto=format",
        badge: "Eco"
    },
    {
        id: 4,
        name: "Jeans Masculino Slim",
        description: "Corte moderno, tecido stretch, modelo skinny fit",
        price: 199.90,
        oldPrice: 279.90,
        category: "roupas",
        rating: 4.5,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop&auto=format",
        badge: "-28%"
    },
    {
        id: 5,
        name: "Fone Sony WH-1000XM5",
        description: "Cancelamento de ruído líder de mercado, 30 horas de bateria",
        price: 1899.90,
        oldPrice: 2499.90,
        category: "acessorios",
        rating: 4.9,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&auto=format",
        badge: "Best Seller"
    },
    {
        id: 6,
        name: "Apple Watch Series 9",
        description: "Tela Always-On, GPS, resistência à água, monitoramento saúde",
        price: 3299.90,
        oldPrice: 3999.90,
        category: "acessorios",
        rating: 4.8,
        reviews: 523,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop&auto=format",
        badge: "Novo"
    },
    {
        id: 7,
        name: "iPad Air 5ª Geração",
        description: "Tela Liquid Retina de 10.9\", chip M1, 64GB, Wi-Fi 6",
        price: 4999.90,
        oldPrice: 5799.90,
        category: "eletronicos",
        rating: 4.7,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop&auto=format",
        badge: "-14%"
    },
    {
        id: 8,
        name: "Tênis Nike Air Max",
        description: "Tecnologia Air Max, amortecimento superior, design moderno",
        price: 599.90,
        oldPrice: 799.90,
        category: "roupas",
        rating: 4.6,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&auto=format",
        badge: "-25%"
    },
    {
        id: 9,
        name: "Câmera Canon EOS R50",
        description: "24.2MP, 4K 30fps, Wi-Fi, Bluetooth, kit com lente 18-45mm",
        price: 3499.90,
        oldPrice: 4199.90,
        category: "eletronicos",
        rating: 4.7,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b242cc32?w=400&h=300&fit=crop&auto=format",
        badge: "Lançamento"
    },
    {
        id: 10,
        name: "Mochila Urbana Premium",
        description: "Material resistente, compartimento para laptop, design moderno",
        price: 249.90,
        oldPrice: 349.90,
        category: "acessorios",
        rating: 4.4,
        reviews: 92,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&auto=format",
        badge: "-29%"
    }
];

// Cart state
let cart = [];
let filteredProducts = [...products];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    renderProducts(products);
    updateCartUI();
    initializeTheme();
    createParticles();
});

// Render products
function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('products-grid');
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<div class="no-products"><i class="fas fa-search"></i><p>Nenhum produto encontrado.</p></div>';
        return;
    }
    
    productsGrid.innerHTML = productsToRender.map((product, index) => `
        <div class="product-card" data-aos="fade-up" data-aos-delay="${index * 50}">
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
                    <button class="btn-details" onclick="showProductDetails(${product.id})">
                        <i class="fas fa-info-circle"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification('Produto adicionado ao carrinho!', 'success');
    
    // Animate cart button
    const cartButton = document.querySelector('.btn-cart');
    cartButton.classList.add('cart-bounce');
    setTimeout(() => cartButton.classList.remove('cart-bounce'), 600);
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">Seu carrinho está vazio.</p>';
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
                        <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; background: #e74c3c; color: white;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
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

// Search products
function searchProducts(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    if (searchTerm === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderProducts(filteredProducts);
}

// Filter products
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    
    if (category === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    renderProducts(filteredProducts);
}

// Sort products
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
    }
    
    renderProducts(filteredProducts);
}

// Show product details
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div class="product-details">
                <img src="${product.image}" alt="${product.name}" style="max-width: 300px; width: 100%;">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <div class="product-price" style="font-size: 2rem;">R$ ${product.price.toFixed(2)}</div>
                <button class="btn btn-primary" onclick="addToCart(${product.id}); this.parentElement.parentElement.remove();">
                    <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: block;
            position: fixed;
            z-index: 1001;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
        }
        
        .modal-content {
            background-color: white;
            margin: 5% auto;
            padding: 2rem;
            border-radius: 10px;
            width: 90%;
            max-width: 600px;
            position: relative;
        }
        
        .close {
            position: absolute;
            right: 20px;
            top: 10px;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .product-details {
            text-align: center;
        }
        
        .product-details img {
            margin-bottom: 1rem;
            border-radius: 10px;
        }
        
        .product-details h2 {
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        
        .product-details p {
            margin-bottom: 2rem;
            color: #666;
        }
        
        .product-details .product-price {
            margin-bottom: 2rem;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `Pedido finalizado com sucesso!\n\nTotal: R$ ${total.toFixed(2)}\n\nObrigado pela compra!`;
    
    if (confirm(message)) {
        cart = [];
        updateCartUI();
        toggleCart();
        showNotification('Pedido realizado com sucesso!', 'success');
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            z-index: 1002;
            animation: slideIn 0.3s ease;
        }
        
        .notification.success {
            background: #27ae60;
        }
        
        .notification.error {
            background: #e74c3c;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
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
    
    renderProducts(filteredProducts);
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
