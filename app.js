const products = [
  { id: 1, title: 'Sneakers Sporty', category: 'fashion', price: 259000, image: 'https://images.unsplash.com/photo-1519741491911-1e66cff329fa?auto=format&fit=crop&w=640&q=80' },
  { id: 2, title: 'Smartwatch Elegan', category: 'electronics', price: 1289000, image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=640&q=80' },
  { id: 3, title: 'Blender Dapur', category: 'home', price: 349000, image: 'https://images.unsplash.com/photo-1524594154900-39124aa544dc?auto=format&fit=crop&w=640&q=80' },
  { id: 4, title: 'Headphone Gaming', category: 'electronics', price: 699000, image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=640&q=80' },
  { id: 5, title: 'Tas Ransel Travel', category: 'fashion', price: 189000, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=640&q=80' },
  { id: 6, title: 'Set Peralatan BBQ', category: 'home', price: 219000, image: 'https://images.unsplash.com/photo-1533089860892-a7d0d7bd1ec0?auto=format&fit=crop&w=640&q=80' },
  { id: 7, title: 'Kamera Instan', category: 'electronics', price: 1799000, image: 'https://images.unsplash.com/photo-1519183071298-a2962e47b4a5?auto=format&fit=crop&w=640&q=80' },
  { id: 8, title: 'Matras Yoga', category: 'hobby', price: 99000, image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=640&q=80' },
  { id: 9, title: 'Kulkas Mini', category: 'home', price: 1499000, image: 'https://images.unsplash.com/photo-1517954336913-c4f41c7e3f15?auto=format&fit=crop&w=640&q=80' },
  { id: 10, title: 'Jaket Musim Dingin', category: 'fashion', price: 329000, image: 'https://images.unsplash.com/photo-1542060742-149c2fa24feb?auto=format&fit=crop&w=640&q=80' }
];

const PROMO_CODES = {
  PROMO10: 0.1,
  DISKON20: 0.2,
  QRIS5: 0.05
};

const storage = {
  load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  },
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const cart = storage.load('shopqr-cart', []);
const wishlist = storage.load('shopqr-wishlist', []);
const orders = storage.load('shopqr-orders', []);
let promo = { code: null, discount: 0 };

const dom = {
  productGrid: document.getElementById('product-grid'),
  searchInput: document.getElementById('search-input'),
  categoryFilter: document.getElementById('category-filter'),
  cartCount: document.getElementById('cart-count'),
  cartPanel: document.getElementById('cart-panel'),
  cartItems: document.getElementById('cart-items'),
  cartTotal: document.getElementById('cart-total'),
  checkoutButton: document.getElementById('checkout-button'),
  wishlistPanel: document.getElementById('wishlist-panel'),
  wishlistItems: document.getElementById('wishlist-items'),
  openCart: document.getElementById('open-cart'),
  openWishlist: document.getElementById('open-wishlist'),
  modalBackdrop: document.getElementById('modal-backdrop'),
  checkoutModal: document.getElementById('checkout-modal'),
  customerName: document.getElementById('customer-name'),
  customerEmail: document.getElementById('customer-email'),
  customerAddress: document.getElementById('customer-address'),
  paymentMethod: document.getElementById('payment-method'),
  promoCodeInput: document.getElementById('promo-code'),
  applyPromoButton: document.getElementById('apply-promo'),
  promoFeedback: document.getElementById('promo-feedback'),
  summarySubtotal: document.getElementById('summary-subtotal'),
  summaryDiscount: document.getElementById('summary-discount'),
  summaryTotal: document.getElementById('summary-total'),
  checkoutItems: document.getElementById('checkout-items'),
  qrisBox: document.getElementById('qris-box'),
  qrisAmount: document.getElementById('qris-amount'),
  qrisInvoice: document.getElementById('qris-invoice'),
  qrcodeContainer: document.getElementById('qrcode'),
  confirmOrder: document.getElementById('confirm-order'),
  ordersList: document.getElementById('orders-list'),
  scrollFeatures: document.getElementById('scroll-features'),
  template: document.getElementById('product-card-template')
};

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
}

function updateCartCount() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  dom.cartCount.textContent = totalCount;
}

function saveState() {
  storage.save('shopqr-cart', cart);
  storage.save('shopqr-wishlist', wishlist);
  storage.save('shopqr-orders', orders);
}

function filterProducts() {
  const query = dom.searchInput.value.toLowerCase();
  const category = dom.categoryFilter.value;
  return products.filter(product => {
    const matchesQuery = product.title.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    const matchesCategory = category === 'all' || product.category === category;
    return matchesQuery && matchesCategory;
  });
}

function renderProducts() {
  dom.productGrid.innerHTML = '';
  filterProducts().forEach(product => {
    const card = dom.template.content.cloneNode(true);
    const article = card.querySelector('.product-card');
    article.querySelector('.product-image').src = product.image;
    article.querySelector('.product-image').alt = product.title;
    article.querySelector('.product-title').textContent = product.title;
    article.querySelector('.product-category').textContent = product.category;
    article.querySelector('.product-price').textContent = formatCurrency(product.price);
    const addButton = article.querySelector('.add-to-cart');
    const wishlistButton = article.querySelector('.wishlist-toggle');

    addButton.addEventListener('click', () => addToCart(product.id));
    wishlistButton.addEventListener('click', () => toggleWishlist(product.id));
    wishlistButton.textContent = wishlist.includes(product.id) ? '♥' : '♡';
    dom.productGrid.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveState();
  updateCartCount();
  renderCart();
  openPanel(dom.cartPanel);
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index >= 0) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(productId);
  }
  saveState();
  renderProducts();
  renderWishlist();
}

function renderCart() {
  dom.cartItems.innerHTML = '';
  if (cart.length === 0) {
    dom.cartItems.innerHTML = '<p>Keranjang kosong. Tambahkan produk favoritmu!</p>';
    dom.cartTotal.textContent = formatCurrency(0);
    return;
  }

  cart.forEach(item => {
    const card = document.createElement('div');
    card.className = 'cart-item';
    card.innerHTML = `
      <div>
        <p class="cart-item-title">${item.title}</p>
        <p class="cart-item-price">${formatCurrency(item.price)} x ${item.quantity}</p>
        <div class="cart-item-controls">
          <button data-action="decrease" data-id="${item.id}">-</button>
          <button data-action="increase" data-id="${item.id}">+</button>
          <button data-action="remove" data-id="${item.id}">Hapus</button>
        </div>
      </div>
      <div>
        <p class="cart-item-price">${formatCurrency(item.price * item.quantity)}</p>
      </div>
    `;
    dom.cartItems.appendChild(card);
  });
  dom.cartItems.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
      const action = event.target.dataset.action;
      const id = Number(event.target.dataset.id);
      updateCartItem(id, action);
    });
  });
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  dom.cartTotal.textContent = formatCurrency(total);
}

function renderWishlist() {
  dom.wishlistItems.innerHTML = '';
  if (wishlist.length === 0) {
    dom.wishlistItems.innerHTML = '<p>Wishlist kosong. Simpan produk yang kamu sukai di sini.</p>';
    return;
  }

  wishlist.forEach(id => {
    const product = products.find(item => item.id === id);
    const card = document.createElement('div');
    card.className = 'cart-item';
    card.innerHTML = `
      <div>
        <p class="cart-item-title">${product.title}</p>
        <p>${formatCurrency(product.price)}</p>
        <div class="cart-item-actions">
          <button data-action="add" data-id="${product.id}">Tambah Keranjang</button>
          <button data-action="remove" data-id="${product.id}">Hapus</button>
        </div>
      </div>
    `;
    dom.wishlistItems.appendChild(card);
  });
  dom.wishlistItems.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
      const action = event.target.dataset.action;
      const id = Number(event.target.dataset.id);
      if (action === 'add') addToCart(id);
      if (action === 'remove') toggleWishlist(id);
    });
  });
}

function updateCartItem(productId, action) {
  const item = cart.find(entry => entry.id === productId);
  if (!item) return;
  if (action === 'increase') item.quantity += 1;
  if (action === 'decrease') item.quantity -= 1;
  if (action === 'remove' || item.quantity <= 0) {
    const index = cart.indexOf(item);
    cart.splice(index, 1);
  }
  saveState();
  updateCartCount();
  renderCart();
}

function openPanel(panel) {
  if (panel === dom.cartPanel) {
    dom.cartPanel.classList.add('open');
    dom.cartPanel.classList.remove('hidden');
  }
  if (panel === dom.wishlistPanel) {
    dom.wishlistPanel.classList.add('open');
    dom.wishlistPanel.classList.remove('hidden');
  }
  dom.modalBackdrop.classList.remove('hidden');
}

function closePanels() {
  [dom.cartPanel, dom.wishlistPanel].forEach(panel => {
    panel.classList.remove('open');
    panel.classList.add('hidden');
  });
  dom.modalBackdrop.classList.add('hidden');
}

function openCheckout() {
  if (cart.length === 0) {
    alert('Keranjang masih kosong. Tambahkan produk terlebih dahulu.');
    return;
  }
  dom.checkoutModal.classList.remove('hidden');
  dom.modalBackdrop.classList.remove('hidden');
  refreshCheckout();
}

function closeCheckout() {
  dom.checkoutModal.classList.add('hidden');
  dom.modalBackdrop.classList.add('hidden');
}

function refreshCheckout() {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * promo.discount);
  const total = subtotal - discount;
  dom.summarySubtotal.textContent = formatCurrency(subtotal);
  dom.summaryDiscount.textContent = formatCurrency(discount);
  dom.summaryTotal.textContent = formatCurrency(total);

  dom.checkoutItems.innerHTML = '';
  cart.forEach(item => {
    const itemCard = document.createElement('div');
    itemCard.className = 'checkout-item';
    itemCard.innerHTML = `
      <p class="checkout-item-title">${item.title}</p>
      <div class="checkout-item-controls">
        <span>${item.quantity} × ${formatCurrency(item.price)}</span>
        <span class="checkout-item-price">${formatCurrency(item.price * item.quantity)}</span>
      </div>
    `;
    dom.checkoutItems.appendChild(itemCard);
  });
  renderPaymentPreview(total);
}

function renderPaymentPreview(total) {
  const method = dom.paymentMethod.value;
  const invoice = `INV-${Date.now()}`;
  dom.qrisAmount.textContent = formatCurrency(total);
  dom.qrisInvoice.textContent = invoice;

  if (method === 'qris') {
    dom.qrisBox.classList.remove('hidden');
    QRCode.toCanvas(dom.qrcodeContainer, JSON.stringify({ invoice, amount: total, method: 'QRIS' }), { width: 220, margin: 1 }, error => {
      if (error) console.error(error);
    });
  } else {
    dom.qrisBox.classList.add('hidden');
    dom.qrcodeContainer.innerHTML = '';
  }
}

function applyPromo() {
  const code = dom.promoCodeInput.value.trim().toUpperCase();
  if (!code) {
    promo = { code: null, discount: 0 };
    dom.promoFeedback.textContent = 'Masukkan kode promo jika ada.';
    refreshCheckout();
    return;
  }
  if (PROMO_CODES[code]) {
    promo = { code, discount: PROMO_CODES[code] };
    dom.promoFeedback.textContent = `Kode ${code} berhasil. Diskon ${Math.round(PROMO_CODES[code] * 100)}%.`;
  } else {
    promo = { code: null, discount: 0 };
    dom.promoFeedback.textContent = 'Kode tidak valid. Coba lagi.';
  }
  refreshCheckout();
}

function confirmOrder() {
  const name = dom.customerName.value.trim();
  const email = dom.customerEmail.value.trim();
  const address = dom.customerAddress.value.trim();
  if (!name || !email || !address) {
    alert('Lengkapi data pelanggan terlebih dahulu.');
    return;
  }
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * promo.discount);
  const total = subtotal - discount;
  const order = {
    id: `ORD-${Date.now()}`,
    date: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
    customer: { name, email, address },
    items: cart.map(item => ({ title: item.title, quantity: item.quantity, price: item.price })),
    paymentMethod: dom.paymentMethod.value,
    status: 'Menunggu Pembayaran',
    subtotal,
    discount,
    total,
    promo: promo.code ?? 'Tidak ada'
  };
  orders.unshift(order);
  cart.length = 0;
  promo = { code: null, discount: 0 };
  dom.promoCodeInput.value = '';
  saveState();
  updateCartCount();
  renderCart();
  renderOrders();
  closeCheckout();
  closePanels();
  alert(`Pesanan berhasil dibuat! Nomor pesanan: ${order.id}`);
}

function renderOrders() {
  dom.ordersList.innerHTML = '';
  if (orders.length === 0) {
    dom.ordersList.innerHTML = '<p>Belum ada pesanan. Ayo berbelanja sekarang!</p>';
    return;
  }
  orders.forEach(order => {
    const card = document.createElement('div');
    card.className = 'order-card';
    card.innerHTML = `
      <div>
        <h4>${order.id}</h4>
        <small>${order.date} • ${order.paymentMethod.toUpperCase()}</small>
      </div>
      <div class="order-card-status">${order.status}</div>
      <div class="order-card-list">
        ${order.items.map(item => `<div>${item.quantity} x ${item.title} <strong>${formatCurrency(item.price * item.quantity)}</strong></div>`).join('')}
      </div>
      <div class="order-card-price">
        <span>Total</span>
        <span>${formatCurrency(order.total)}</span>
      </div>
    `;
    dom.ordersList.appendChild(card);
  });
}

function registerEvents() {
  dom.searchInput.addEventListener('input', renderProducts);
  dom.categoryFilter.addEventListener('change', renderProducts);
  dom.openCart.addEventListener('click', () => { renderCart(); openPanel(dom.cartPanel); });
  dom.openWishlist.addEventListener('click', () => { renderWishlist(); openPanel(dom.wishlistPanel); });
  dom.modalBackdrop.addEventListener('click', () => { closePanels(); closeCheckout(); });
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.close);
    if (target === dom.checkoutModal) closeCheckout();
    else closePanels();
  }));
  dom.checkoutButton.addEventListener('click', openCheckout);
  dom.applyPromoButton.addEventListener('click', applyPromo);
  dom.paymentMethod.addEventListener('change', refreshCheckout);
  dom.confirmOrder.addEventListener('click', confirmOrder);
  dom.scrollFeatures.addEventListener('click', () => document.getElementById('features').scrollIntoView({ behavior: 'smooth' }));
}

function initialize() {
  renderProducts();
  renderCart();
  renderWishlist();
  renderOrders();
  updateCartCount();
  registerEvents();
}

initialize();
