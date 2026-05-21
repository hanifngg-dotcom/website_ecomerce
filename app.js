const products = [
  { id: 1, title: 'Sneakers Sporty', category: 'fashion', price: 259000, description: 'Sepatu sneaker berkualitas tinggi dengan desain sporty modern untuk aktivitas sehari-hari dan olahraga ringan.', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=640&q=80' },
  { id: 2, title: 'Smartwatch Elegan', category: 'electronics', price: 1289000, description: 'Jam tangan pintar dengan layar touchscreen AMOLED, monitor detak jantung, dan daya tahan baterai 5 hari.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=640&q=80' },
  { id: 3, title: 'Blender Dapur', category: 'home', price: 349000, description: 'Blender profesional dengan motor 1000W untuk menghaluskan berbagai bahan makanan hingga es batu.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=640&q=80' },
  { id: 4, title: 'Headphone Gaming', category: 'electronics', price: 699000, description: 'Headphone gaming dengan surround sound 7.1, mikrofon noise cancelling, dan RGB lighting.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=640&q=80' },
  { id: 5, title: 'Tas Ransel Travel', category: 'fashion', price: 189000, description: 'Ransel travel dengan kapasitas 40L, multiple pockets, dan material tahan air untuk perjalanan jauh.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=640&q=80' },
  { id: 6, title: 'Set Peralatan BBQ', category: 'home', price: 219000, description: 'Paket lengkap alat BBQ termasuk spatula, penjepit, garpu, dan sikat pembersih untuk memanggang sempurna.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561404?auto=format&fit=crop&w=640&q=80' },
  { id: 7, title: 'Kamera Instan', category: 'electronics', price: 1799000, description: 'Kamera instan dengan teknologi termal printer, hasil foto langsung keluar dalam 10 detik.', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=640&q=80' },
  { id: 8, title: 'Matras Yoga', category: 'hobby', price: 99000, description: 'Matras yoga anti slip dengan ketebalan 6mm, nyaman untuk berbagai pose yoga dan meditasi.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=640&q=80' },
  { id: 9, title: 'Kulkas Mini', category: 'home', price: 1499000, description: 'Kulkas mini berkapasitas 50L dengan kontrol suhu otomatis dan kunci keamanan untuk kamar atau kantor.', image: 'https://images.unsplash.com/photo-1584622614875-2953067828d7?auto=format&fit=crop&w=640&q=80' },
  { id: 10, title: 'Jaket Musim Dingin', category: 'fashion', price: 329000, description: 'Jaket musim dingin dengan insulasi thermal, tahan angin dan air, tersedia dalam berbagai warna.', image: 'https://images.unsplash.com/photo-1539533057440-7814a9d7f521?auto=format&fit=crop&w=640&q=80' },
  { id: 11, title: 'Lampu Meja LED', category: 'home', price: 129000, description: 'Lampu meja LED hemat energi dengan 3 mode pencahayaan, cocok untuk bekerja atau membaca.', image: 'https://images.unsplash.com/photo-1565636192335-14c46fa1120d?auto=format&fit=crop&w=640&q=80' },
  { id: 12, title: 'Kursi Kantor Ergonomis', category: 'office', price: 850000, description: 'Kursi kantor ergonomis dengan lumbar support dan sandaran kepala yang dapat disesuaikan.', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=640&q=80' },
  { id: 13, title: 'Speaker Bluetooth', category: 'electronics', price: 429000, description: 'Speaker bluetooth portabel dengan audio stereo 360 derajat dan daya tahan baterai 12 jam.', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=640&q=80' },
  { id: 14, title: 'Parfum Pria Premium', category: 'beauty', price: 399000, description: 'Parfum pria premium dengan aroma maskulin yang tahan lama hingga 8 jam.', image: 'https://images.unsplash.com/photo-1596377686009-796b88c72406?auto=format&fit=crop&w=640&q=80' },
  { id: 15, title: 'Set Perawatan Wajah', category: 'beauty', price: 269000, description: 'Paket lengkap perawatan wajah dengan cleanser, toner, essence, dan moisturizer untuk kulit sehat.', image: 'https://images.unsplash.com/photo-1596401643114-61f5ce65bdf8?auto=format&fit=crop&w=640&q=80' },
  { id: 16, title: 'Drone Kamera', category: 'electronics', price: 2399000, description: 'Drone dengan kamera 4K, stabilisasi gimbal 3-axis, jangkauan transmisi hingga 7km.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=640&q=80' },
  { id: 17, title: 'Jam Dinding Modern', category: 'home', price: 149000, description: 'Jam dinding modern dengan desain minimalis, gerakan senyap, cocok untuk semua ruangan.', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=640&q=80' },
  { id: 18, title: 'Raket Tenis', category: 'hobby', price: 299000, description: 'Raket tenis dengan frame carbon fiber, grip ergonomis, ideal untuk pemain pemula hingga intermediate.', image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?auto=format&fit=crop&w=640&q=80' },
  { id: 19, title: 'Boneka Bayi Lucu', category: 'kids', price: 129000, description: 'Boneka bayi empuk dan aman, terbuat dari bahan lembut non-toxic, sempurna untuk teman tidur anak.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=640&q=80' },
  { id: 20, title: 'Sepeda Lipat', category: 'hobby', price: 1099000, description: 'Sepeda lipat ringan dengan roda 20 inch, cocok untuk commuting dan mudah disimpan.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=640&q=80' },
  { id: 21, title: 'Set Alat Tulis Premium', category: 'office', price: 89000, description: 'Set lengkap alat tulis premium dengan pena gel, pensil, penggaris, dan penghapus berkualitas tinggi.', image: 'https://images.unsplash.com/photo-1567029816524-f2b53e31457b?auto=format&fit=crop&w=640&q=80' },
  { id: 22, title: 'Perlengkapan Makeup', category: 'beauty', price: 149000, description: 'Kit lengkap makeup untuk pemula dengan lipstik, eyeshadow, blush on, dan brush berkualitas.', image: 'https://images.unsplash.com/photo-1596462502278-af396f999424?auto=format&fit=crop&w=640&q=80' },
  { id: 23, title: 'Speaker Smart Home', category: 'electronics', price: 849000, description: 'Speaker pintar dengan AI assistant, kontrol suara, dan integrasi IoT untuk rumah cerdas.', image: 'https://images.unsplash.com/photo-1599669656522-f37ef2ddc3f9?auto=format&fit=crop&w=640&q=80' },
  { id: 24, title: 'Sepatu Anak', category: 'kids', price: 119000, description: 'Sepatu anak nyaman dengan sol ortopedik, desain ceria, dan material breathable untuk aktivitas sehari-hari.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=640&q=80' }
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

console.log('ShopQR loaded: fitur unggulan interaktif siap');

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
  clearCartButton: document.getElementById('clear-cart'),
  wishlistPanel: document.getElementById('wishlist-panel'),
  wishlistItems: document.getElementById('wishlist-items'),
  clearWishlistButton: document.getElementById('clear-wishlist'),
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
    article.querySelector('.product-description').textContent = product.description;
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
  if (index < 0) {
    openPanel(dom.wishlistPanel);
  }
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

function clearCart() {
  if (cart.length === 0) {
    alert('Keranjang sudah kosong.');
    return;
  }
  cart.length = 0;
  saveState();
  updateCartCount();
  renderCart();
  alert('Keranjang berhasil dikosongkan.');
}

function clearWishlist() {
  if (wishlist.length === 0) {
    alert('Wishlist sudah kosong.');
    return;
  }
  wishlist.length = 0;
  saveState();
  renderProducts();
  renderWishlist();
  alert('Wishlist berhasil dikosongkan.');
}

function repeatOrder(orderId) {
  const order = orders.find(item => item.id === orderId);
  if (!order) return;
  order.items.forEach(item => {
    const product = products.find(productItem => productItem.title === item.title);
    if (!product) return;
    const existing = cart.find(cartItem => cartItem.id === product.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      cart.push({ ...product, quantity: item.quantity });
    }
  });
  saveState();
  updateCartCount();
  renderCart();
  openPanel(dom.cartPanel);
}

function handleFeatureClick(feature) {
  console.log('Feature clicked:', feature);
  if (feature === 'qris') {
    if (cart.length === 0) {
      alert('Keranjang kosong. Tambahkan produk terlebih dahulu untuk checkout QRIS.');
      return;
    }
    dom.paymentMethod.value = 'qris';
    openCheckout();
    refreshCheckout();
  }
  if (feature === 'katalog') {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }
  if (feature === 'keranjang') {
    renderCart();
    openPanel(dom.cartPanel);
  }
  if (feature === 'riwayat') {
    document.getElementById('orders').scrollIntoView({ behavior: 'smooth' });
  }
  if (feature === 'wishlist') {
    renderWishlist();
    openPanel(dom.wishlistPanel);
  }
  if (feature === 'promo') {
    if (cart.length === 0) {
      alert('Keranjang kosong. Tambahkan produk terlebih dahulu untuk menggunakan promo.');
      return;
    }
    openCheckout();
    dom.promoCodeInput.focus();
  }
}

window.handleFeatureClick = handleFeatureClick;

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
      <button class="button secondary repeat-order" data-order-id="${order.id}">Ulangi Pesanan</button>
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
  dom.clearCartButton.addEventListener('click', clearCart);
  dom.clearWishlistButton.addEventListener('click', clearWishlist);
  dom.applyPromoButton.addEventListener('click', applyPromo);
  dom.paymentMethod.addEventListener('change', refreshCheckout);
  dom.confirmOrder.addEventListener('click', confirmOrder);
  dom.scrollFeatures.addEventListener('click', () => document.getElementById('features').scrollIntoView({ behavior: 'smooth' }));

  document.addEventListener('click', (event) => {
    const button = event.target.closest('.feature-action');
    if (!button) return;
    const feature = button.closest('.feature-card')?.dataset.feature;
    if (!feature) return;

    if (feature === 'qris') {
      if (cart.length === 0) {
        alert('Keranjang kosong. Tambahkan produk terlebih dahulu untuk checkout QRIS.');
        return;
      }
      dom.paymentMethod.value = 'qris';
      openCheckout();
      refreshCheckout();
    }
    if (feature === 'katalog') {
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
    if (feature === 'keranjang') {
      renderCart();
      openPanel(dom.cartPanel);
    }
    if (feature === 'riwayat') {
      document.getElementById('orders').scrollIntoView({ behavior: 'smooth' });
    }
    if (feature === 'wishlist') {
      renderWishlist();
      openPanel(dom.wishlistPanel);
    }
    if (feature === 'promo') {
      if (cart.length === 0) {
        alert('Keranjang kosong. Tambahkan produk terlebih dahulu untuk menggunakan promo.');
        return;
      }
      openCheckout();
      dom.promoCodeInput.focus();
    }
  });

  document.addEventListener('click', (event) => {
    const repeatButton = event.target.closest('.repeat-order');
    if (!repeatButton) return;
    repeatOrder(repeatButton.dataset.orderId);
  });
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
