document.addEventListener('DOMContentLoaded', () => {
    
    // --- Product Database ---
    const products = [
        { id: '1', brand: 'Samyang', title: 'Buldak Original', price: 149, img: 'https://samyangamerica.com/images/products/buldak-multi-original.png', heat: '4/10', origin: 'Jižní Korea', time: '5 min', categories: ['hot', 'fried'], desc: 'Legendární pálivé nudle s příchutí kuřete. Klasika, která to všechno začala.' },
        { id: '2', brand: 'Samyang', title: 'Buldak Carbonara', price: 155, img: 'https://samyangamerica.com/images/products/buldak-multi-carbonara.png', heat: '3/10', origin: 'Jižní Korea', time: '5 min', categories: ['mild', 'fried'], desc: 'Dokonalé spojení pálivosti a krémové sýrové omáčky. Nejoblíbenější varianta.' },
        { id: '3', brand: 'Samyang', title: 'Buldak 2x Spicy', price: 159, img: 'https://samyangamerica.com/images/products/buldak-multi-2x-spicy.png', heat: '9/10', origin: 'Jižní Korea', time: '5 min', categories: ['hot', 'fried'], desc: 'Výzva pro ty největší odvážlivce. Dvojnásobná pálivost, nekonečná chuť.' },
        { id: '4', brand: 'Samyang', title: 'Buldak Quattro Cheese', price: 155, img: 'https://samyangamerica.com/images/products/buldak-multi-quattro-cheese.png', heat: '3/10', origin: 'Jižní Korea', time: '5 min', categories: ['mild', 'fried'], desc: 'Čtyři druhy sýra se snoubí s ikonickou pálivou omáčkou.' },
        { id: '5', brand: 'Samyang', title: 'Jjajang Black Bean', price: 149, img: 'https://samyangamerica.com/images/products/buldak-multi-jjajang.png', heat: '2/10', origin: 'Jižní Korea', time: '5 min', categories: ['mild', 'fried'], desc: 'Tradiční omáčka z černých fazolí v pálivém podání Buldak.' },
        { id: '6', brand: 'Samyang', title: 'Buldak Stew Type', price: 159, img: 'https://samyangamerica.com/images/products/buldak-multi-stew-type.png', heat: '5/10', origin: 'Jižní Korea', time: '5 min', categories: ['hot', 'soup'], desc: 'Polévková verze oblíbených pálivých nudlí pro zahřátí.' },
        { id: '7', brand: 'Nongshim', title: 'Shin Ramyun Gourmet', price: 139, img: 'https://nongshimusa.com/html5/imgs/world_of_shin/shin-bag.png', heat: '4/10', origin: 'Jižní Korea', time: '4 min', categories: ['hot', 'soup'], desc: 'Nejprodávanější korejské nudle na světě s bohatou hovězí chutí.' },
        { id: '8', brand: 'Nissin', title: 'Raoh Tonkotsu Premium', price: 165, img: 'https://www.nissinfoods.com/wp-content/uploads/2023/03/23_NISSIN_Website_Product_Transparent_NS_Raoh_Tonkotsu_V1_1x1_3000x3000-1.png', heat: '0/10', origin: 'Japonsko', time: '3 min', categories: ['mild', 'soup'], desc: 'Prémiový japonský ramen s bohatým vepřovým vývarem tonkotsu.' },
        { id: '9', brand: 'Mama', title: 'Tom Yum Shrimp Extreme', price: 135, img: 'https://i0.wp.com/www.theramenrater.com/wp-content/uploads/2014/09/2014_9_1_1473_001.jpg', heat: '6/10', origin: 'Thajsko', time: '3 min', categories: ['hot', 'soup'], desc: 'Kyselo-pálivá thajská klasika s chutí krevet a citronové trávy.' },
        { id: '10', brand: 'Sapporo Ichiban', title: 'Miso Ramen', price: 145, img: 'https://cdn.shopify.com/s/files/1/1568/6813/products/Miso-US_d2a24340-a68e-4bb1-a973-d500c3fba412_1024x1024.png?v=1526941402', heat: '1/10', origin: 'Japonsko', time: '3 min', categories: ['mild', 'soup'], desc: 'Klasický japonský ramen s fermentovanou sójovou pastou miso.' }
    ];

    // --- Dynamic Product Detail Rendering ---
    const renderProductDetail = () => {
        const detailContainer = document.getElementById('dynamic-product-detail');
        if (!detailContainer) return;

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id') || '1'; // Default to 1 if no ID
        const product = products.find(p => p.id === id);

        if (!product) {
            detailContainer.innerHTML = '<h2>Produkt nenalezen</h2>';
            return;
        }

        document.title = `${product.title} | Noodle Hub`;

        detailContainer.innerHTML = `
            <div class="product-detail-img">
                <img src="${product.img}" alt="${product.title}">
            </div>
            
            <div>
                <div class="product-brand mb-2">${product.brand}</div>
                <h1 class="mb-2">${product.title}</h1>
                
                <div class="d-flex align-items-center gap-3 mb-4">
                    <div class="text-accent-orange">
                        <i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i><i class="icon icon-star"></i>
                    </div>
                    <span class="text-muted">(128 recenzí)</span>
                </div>
                
                <h2 class="text-primary mb-4" style="font-size: 2.5rem;">${product.price} Kč</h2>
                
                <p class="text-muted mb-5 text-lg">${product.desc}</p>
                
                <div class="product-features">
                    <div class="feature-box">
                        <i class="icon icon-fire text-primary mb-2" style="font-size: 1.5rem;"></i>
                        <div class="small text-muted">Pálivost</div>
                        <div class="fw-bold">${product.heat}</div>
                    </div>
                    <div class="feature-box">
                        <i class="icon icon-bowl text-primary mb-2" style="font-size: 1.5rem;"></i>
                        <div class="small text-muted">Původ</div>
                        <div class="fw-bold">${product.origin}</div>
                    </div>
                    <div class="feature-box">
                        <i class="icon icon-star text-primary mb-2" style="font-size: 1.5rem;"></i>
                        <div class="small text-muted">Příprava</div>
                        <div class="fw-bold">${product.time}</div>
                    </div>
                </div>

                <div class="add-to-cart-wrapper">
                    <input type="number" id="detail-qty" class="qty-input" value="1" min="1" max="99">
                    <button class="btn btn-primary" style="flex-grow: 1;" id="detail-add-to-cart">
                        Přidat do košíku
                    </button>
                </div>
            </div>
        `;

        // Attach event listener to the new button
        document.getElementById('detail-add-to-cart').addEventListener('click', (e) => {
            const qty = parseInt(document.getElementById('detail-qty').value) || 1;
            addToCart({ ...product, qty });
            
            const btn = e.currentTarget;
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Přidáno do košíku!';
            btn.style.backgroundColor = '#28a745';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
            }, 1500);
        });
    };
    
    // Call render detail if on detail page
    renderProductDetail();

    // --- Dynamic Grid Rendering ---
    const renderProductGrid = () => {
        const gridContainer = document.getElementById('product-grid');
        const featuredContainer = document.getElementById('featured-product-grid');

        if (!gridContainer && !featuredContainer) return;

        const generateHTML = (product) => {
            const hotBadge = parseInt(product.heat) >= 4 ? `<span class="badge-hot"><i class="icon icon-fire"></i> Hot</span>` : '';
            return `
                <div class="product-card">
                    <a href="product-detail.html?id=${product.id}" class="product-img">
                        <img src="${product.img}" alt="${product.title}">
                        ${hotBadge}
                    </a>
                    <div class="product-info">
                        <div class="product-brand">${product.brand}</div>
                        <a href="product-detail.html?id=${product.id}"><h3 class="product-title">${product.title}</h3></a>
                        <div class="product-footer mt-auto">
                            <span class="product-price">${product.price} Kč</span>
                            <div class="d-flex" style="gap: 5px;">
                                <input type="number" class="grid-qty-input qty-input" value="1" min="1" max="99" style="width: 50px; padding: 0 5px; height: 38px;">
                                <button class="btn btn-primary small btn-add-to-cart" style="padding: 0 10px; height: 38px;" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-img="${product.img}">Do košíku</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        };

        const attachCartListeners = () => {
            document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const button = e.currentTarget;
                    const card = button.closest('.product-card');
                    const qtyInput = card ? card.querySelector('.grid-qty-input') : null;
                    const qty = qtyInput ? (parseInt(qtyInput.value) || 1) : 1;

                    const product = {
                        id: button.dataset.id,
                        title: button.dataset.title,
                        price: parseInt(button.dataset.price),
                        img: button.dataset.img,
                        qty: qty
                    };
                    
                    addToCart(product);
                    
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="icon icon-cart"></i>';
                    button.style.backgroundColor = '#28a745';
                    button.style.color = 'white';
                    
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.style.backgroundColor = '';
                        button.style.color = '';
                    }, 1500);
                });
            });
        };

        if (featuredContainer) {
            featuredContainer.innerHTML = products.slice(0, 3).map(p => generateHTML(p)).join('');
            attachCartListeners();
        }

        if (gridContainer) {
            let currentCategory = 'all';
            let currentSort = 'default';

            const urlParams = new URLSearchParams(window.location.search);
            const categoryParam = urlParams.get('category');
            if (categoryParam) {
                currentCategory = categoryParam;
            }

            const sortSelect = document.getElementById('sort-select');
            const filterBtns = document.querySelectorAll('.filter-btn');

            const refreshGrid = () => {
                let filtered = [...products];
                
                if (currentCategory !== 'all') {
                    filtered = filtered.filter(p => p.categories && p.categories.includes(currentCategory));
                }

                if (currentSort === 'price-asc') {
                    filtered.sort((a, b) => a.price - b.price);
                } else if (currentSort === 'price-desc') {
                    filtered.sort((a, b) => b.price - a.price);
                } else if (currentSort === 'heat-asc') {
                    filtered.sort((a, b) => parseInt(a.heat) - parseInt(b.heat));
                } else if (currentSort === 'heat-desc') {
                    filtered.sort((a, b) => parseInt(b.heat) - parseInt(a.heat));
                }

                if (filtered.length === 0) {
                    gridContainer.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">Nebyly nalezeny žádné produkty.</div>';
                } else {
                    gridContainer.innerHTML = filtered.map(p => generateHTML(p)).join('');
                }
                
                attachCartListeners();

                // Update active state on buttons
                filterBtns.forEach(btn => {
                    if (btn.dataset.category === currentCategory) {
                        btn.classList.add('active');
                        btn.style.background = 'var(--primary)';
                        btn.style.color = 'white';
                        btn.style.borderColor = 'var(--primary)';
                    } else {
                        btn.classList.remove('active');
                        btn.style.background = 'var(--glass)';
                        btn.style.color = 'var(--text-main)';
                        btn.style.borderColor = 'var(--glass-border)';
                    }
                });
            };

            filterBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    currentCategory = e.currentTarget.dataset.category;
                    // Update URL without reloading
                    const newUrl = new URL(window.location);
                    if (currentCategory === 'all') {
                        newUrl.searchParams.delete('category');
                    } else {
                        newUrl.searchParams.set('category', currentCategory);
                    }
                    window.history.pushState({}, '', newUrl);
                    refreshGrid();
                });
            });

            if (sortSelect) {
                sortSelect.addEventListener('change', (e) => {
                    currentSort = e.target.value;
                    refreshGrid();
                });
            }

            refreshGrid();
        }
    };

    renderProductGrid();

    // --- Cart State Management ---
    
    const getCart = () => {
        const cart = localStorage.getItem('noodlehub_cart');
        return cart ? JSON.parse(cart) : [];
    };

    const saveCart = (cart) => {
        localStorage.setItem('noodlehub_cart', JSON.stringify(cart));
        updateCartBadge();
    };

    const updateCartBadge = () => {
        const cart = getCart();
        const count = cart.reduce((total, item) => total + item.qty, 0);
        document.querySelectorAll('#cart-count').forEach(badge => {
            badge.textContent = count;
            // Pulse animation on update
            if (count > 0) {
                badge.style.transform = 'scale(1.2)';
                setTimeout(() => badge.style.transform = 'scale(1)', 200);
            }
        });
    };

    const addToCart = (product) => {
        const cart = getCart();
        const existing = cart.find(item => item.id === product.id);
        
        if (existing) {
            existing.qty += product.qty;
        } else {
            cart.push(product);
        }
        saveCart(cart);
    };

    // --- Add to Cart Event Listeners ---

    // Note: Grid Add to Cart is handled inside renderProductGrid()

    // Note: Detail Add to Cart is handled inside renderProductDetail()

    // --- Cart Page Rendering ---

    const renderCart = () => {
        const cartList = document.getElementById('cart-items-list');
        const summaryBox = document.getElementById('cart-summary-box');
        
        if (!cartList) return; // Not on cart page

        const cart = getCart();
        
        if (cart.length === 0) {
            cartList.innerHTML = `
                <div class="empty-cart text-muted">
                    <i class="icon icon-cart" style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <h2 class="mb-3">Váš košík je prázdný</h2>
                    <p class="mb-4">Zatím jste si nevybrali žádné produkty.</p>
                    <a href="products.html" class="btn btn-primary">Přejít k produktům</a>
                </div>
            `;
            if (summaryBox) summaryBox.style.display = 'none';
            return;
        }

        if (summaryBox) summaryBox.style.display = 'block';

        let html = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            
            html += `
                <div class="cart-item animate-up">
                    <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="text-muted small">${item.price} Kč / ks</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="window.updateQty('${item.id}', -1)">-</button>
                        <span style="width: 30px; text-align: center;">${item.qty}</span>
                        <button class="qty-btn" onclick="window.updateQty('${item.id}', 1)">+</button>
                    </div>
                    <div class="cart-item-price">${itemTotal} Kč</div>
                    <button class="cart-remove" onclick="window.removeFromCart('${item.id}')" title="Odebrat">
                        <i class="icon icon-trash"></i>
                    </button>
                </div>
            `;
        });

        cartList.innerHTML = html;

        const subtotalEl = document.getElementById('cart-subtotal');
        const totalEl = document.getElementById('cart-total');
        
        if (subtotalEl) subtotalEl.textContent = `${total} Kč`;
        if (totalEl) totalEl.textContent = `${total} Kč`;
    };

    // Global functions for inline onclick handlers in cart
    window.updateQty = (id, change) => {
        let cart = getCart();
        const item = cart.find(i => i.id === id);
        if (item) {
            item.qty += change;
            if (item.qty <= 0) {
                cart = cart.filter(i => i.id !== id);
            }
            saveCart(cart);
            renderCart();
        }
    };

    window.removeFromCart = (id) => {
        let cart = getCart();
        cart = cart.filter(i => i.id !== id);
        saveCart(cart);
        renderCart();
    };

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('Děkujeme za vaši objednávku! Toto je ukázkový e-shop.');
            // Removed localStorage.removeItem('noodlehub_cart') as requested
            updateCartBadge();
            renderCart();
        });
    }

    // --- Initialization ---
    updateCartBadge();
    renderCart();

    // --- Observers for animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
});
