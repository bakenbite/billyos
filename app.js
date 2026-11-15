/**
 * BAKE 'N' BITE - POS & Billing System
 * Complete menu data and live calculation logic
 */

// 1. MENU DATA EXACTLY FROM THE MENU CARD
const MENU_ITEMS = [
  // PIZZA (Large 9")
  { id: 'p1', name: 'Margherita Pizza', price: 100, category: 'Pizza', icon: '🍕', desc: 'Classic single cheese pizza (Large 9")' },
  { id: 'p2', name: 'Veggie Loaded Pizza', price: 140, category: 'Pizza', icon: '🍕', desc: 'Loaded with fresh veggies (Large 9")' },
  { id: 'p3', name: 'Double Cheese Pizza', price: 160, category: 'Pizza', icon: '🍕', desc: 'Extra layer of melted cheese (Large 9")' },
  { id: 'p4', name: 'Sweetcorn Pizza', price: 180, category: 'Pizza', icon: '🍕', desc: 'Crispy sweetcorn & mozzarella (Large 9")' },
  { id: 'p5', name: 'Mushroom Pizza', price: 200, category: 'Pizza', icon: '🍕', desc: 'Tender mushrooms with herbs (Large 9")' },
  { id: 'p6', name: 'Farm House Pizza', price: 220, category: 'Pizza', icon: '🍕', desc: 'Delight of capsicum, onion & tomato (Large 9")' },
  { id: 'p7', name: 'Paneer Tikka Pizza', price: 250, category: 'Pizza', icon: '🍕', desc: 'Spiced marinated paneer chunks (Large 9")' },

  // KULHAD PIZZA
  { id: 'kp1', name: 'Kulhad Pizza', price: 99, category: 'Kulhad Pizza', icon: '🏺', desc: 'Desi Twist, Cheesy Bliss! Baked in earthen kulhad' },

  // SUBWAY ROLLS
  { id: 'sr1', name: 'Subway Veg Roll', price: 150, category: 'Subway Rolls', icon: '🥖', desc: 'Fresh crunchy veggies with signature sauces' },
  { id: 'sr2', name: 'Subway Paneer Roll', price: 170, category: 'Subway Rolls', icon: '🥖', desc: 'Grilled paneer loaded sub roll' },

  // SANDWICH
  { id: 'sw1', name: 'Veg Corn Grilled', price: 80, category: 'Sandwich', icon: '🥪', desc: 'Golden sweetcorn with spicy seasoning' },
  { id: 'sw2', name: 'Veg Cheese Grilled', price: 100, category: 'Sandwich', icon: '🥪', desc: 'Melted cheese with fresh crunchy veggies' },
  { id: 'sw3', name: 'Paneer Sandwich', price: 120, category: 'Sandwich', icon: '🥪', desc: 'Marinated paneer slices grilled to crisp' },

  // BURGER
  { id: 'bg1', name: 'Aaloo Tikki Burger', price: 60, category: 'Burger', icon: '🍔', desc: 'Crispy potato patty with tangy sauces' },
  { id: 'bg2', name: 'Grilled Burger', price: 70, category: 'Burger', icon: '🍔', desc: 'Smoky grilled veg patty burger' },
  { id: 'bg3', name: 'Paneer Burger', price: 80, category: 'Burger', icon: '🍔', desc: 'Crispy cottage cheese patty' },
  { id: 'bg4', name: 'Cheese Burger', price: 100, category: 'Burger', icon: '🍔', desc: 'Double cheese blast burger' },

  // MOMO'S PLATTER
  { id: 'mo1', name: "Veg Steam Momo's", price: 100, category: "Momo's Platter", icon: '🥟', desc: 'Soft steamed momos with spicy red chutney' },
  { id: 'mo2', name: "Veg Fry Momo's", price: 120, category: "Momo's Platter", icon: '🥟', desc: 'Crispy golden fried veg momos' },
  { id: 'mo3', name: "Spring Rolls", price: 120, category: "Momo's Platter", icon: '🥢', desc: 'Crispy rolls filled with shredded vegetables' },
  { id: 'mo4', name: "Paneer Steam Momo's", price: 130, category: "Momo's Platter", icon: '🥟', desc: 'Juicy paneer stuffed steamed dumplings' },
  { id: 'mo5', name: "Paneer Fry Momo's", price: 150, category: "Momo's Platter", icon: '🥟', desc: 'Deep fried crispy paneer momos' },
  { id: 'mo6', name: "Kurkure Veg Momo's", price: 150, category: "Momo's Platter", icon: '🥟', desc: 'Crunchy kurkure crumb coated veg momos' },
  { id: 'mo7', name: "Kurkure Paneer Momo's", price: 150, category: "Momo's Platter", icon: '🥟', desc: 'Extra crunchy kurkure paneer momos' },

  // NOODLES
  { id: 'nd1', name: 'Veg Noodles', price: 80, category: 'Noodles', icon: '🍜', desc: 'Classic Indo-Chinese wok tossed noodles' },
  { id: 'nd2', name: 'Singapore Noodles', price: 120, category: 'Noodles', icon: '🍜', desc: 'Spicy tangy Singapore style noodles' },

  // VEG ROLLS
  { id: 'vr1', name: 'Aaloo Wrap', price: 70, category: 'Veg Rolls', icon: '🌯', desc: 'Crispy aloo tikki wrapped in tortilla' },
  { id: 'vr2', name: 'Paneer Wrap', price: 90, category: 'Veg Rolls', icon: '🌯', desc: 'Spicy cottage cheese strips wrapped fresh' },

  // FRENCH FRIES
  { id: 'ff1', name: 'French Fries', price: 60, category: 'French Fries', icon: '🍟', desc: 'Salted classic crispy golden fries' },
  { id: 'ff2', name: 'Peri-Peri Fries', price: 70, category: 'French Fries', icon: '🍟', desc: 'Spicy peri-peri seasoned fries' },
  { id: 'ff3', name: 'Cheesy Fries', price: 80, category: 'French Fries', icon: '🍟', desc: 'Smothered in creamy melted cheese' },

  // COFFEE
  { id: 'cf1', name: 'Hot Coffee', price: 50, category: 'Coffee', icon: '☕', desc: 'Rich brewed creamy hot coffee' },
  { id: 'cf2', name: 'Cold Coffee', price: 80, category: 'Coffee', icon: '🥤', desc: 'Thick chilled cafe style cold coffee' },

  // SHAKES
  { id: 'sh1', name: 'Oreo Shake', price: 99, category: 'Shakes', icon: '🧋', desc: 'Crushed Oreo cookies blended with ice cream' },
  { id: 'sh2', name: 'Kitkat Shake', price: 99, category: 'Shakes', icon: '🧋', desc: 'Chocolaty KitKat bar blended thick shake' },
  { id: 'sh3', name: 'Chocolate Shake', price: 99, category: 'Shakes', icon: '🧋', desc: 'Rich creamy chocolate shake with syrup' },

  // PASTA
  { id: 'ps1', name: 'White Sauce Pasta', price: 130, category: 'Pasta', icon: '🍝', desc: 'Creamy Alfredo white sauce penne pasta' },

  // CHILLI POTATO
  { id: 'cp1', name: 'Chilli Potato', price: 100, category: 'Chilli Potato', icon: '🥔', desc: 'Crispy potato fingers tossed in chilli garlic sauce' },
  { id: 'cp2', name: 'Honey Chilli Potato', price: 120, category: 'Chilli Potato', icon: '🥔', desc: 'Crispy potato tossed with honey & sesame' }
];

// 2. STATE MANAGEMENT
let cart = {}; // { itemId: quantity }
let customItems = {}; // { customId: { name, price, quantity } }
let activeCategory = 'All';
let searchQuery = '';
let currentInvoiceSeq = parseInt(localStorage.getItem('bnb_invoice_seq') || '1001', 10);
let orderHistory = JSON.parse(localStorage.getItem('bnb_order_history') || '[]');

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const categoryTabs = document.getElementById('categoryTabs');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const itemsFoundText = document.getElementById('itemsFoundText');

const billItemsList = document.getElementById('billItemsList');
const emptyCartState = document.getElementById('emptyCartState');
const totalItemsBadge = document.getElementById('totalItemsBadge');
const summaryTotalQty = document.getElementById('summaryTotalQty');
const summarySubtotal = document.getElementById('summarySubtotal');
const summaryDiscount = document.getElementById('summaryDiscount');
const summaryTax = document.getElementById('summaryTax');
const summaryGrandTotal = document.getElementById('summaryGrandTotal');
const discountValueInput = document.getElementById('discountValue');
const discountTypeSelect = document.getElementById('discountType');
const taxRateSelect = document.getElementById('taxRateSelect');
const paymentStatusSelect = document.getElementById('paymentStatus');
const statusPillDisplay = document.getElementById('statusPillDisplay');
const currentInvoiceNumberEl = document.getElementById('currentInvoiceNumber');

const receiptModal = document.getElementById('receiptModal');
const historyModal = document.getElementById('historyModal');
const historyCountEl = document.getElementById('historyCount');

// INITIALIZE
function init() {
  updateInvoiceDisplay();
  renderCategoryTabs();
  renderMenu();
  renderBill();
  updateHistoryCount();
  setupEventListeners();
}

function updateInvoiceDisplay() {
  currentInvoiceNumberEl.textContent = `#BNB-${currentInvoiceSeq}`;
}

// 3. CATEGORY TABS
function renderCategoryTabs() {
  const categories = ['All', ...new Set(MENU_ITEMS.map(i => i.category))];

  categoryTabs.innerHTML = categories.map(cat => {
    const count = cat === 'All' ? MENU_ITEMS.length : MENU_ITEMS.filter(i => i.category === cat).length;
    const isActive = cat === activeCategory;
    return `
      <button class="cat-tab-btn ${isActive ? 'active' : ''}" data-cat="${cat}">
        <span>${cat}</span>
        <span class="cat-count">${count}</span>
      </button>
    `;
  }).join('');
}

// 4. MENU ITEMS GRID
function renderMenu() {
  const q = searchQuery.toLowerCase().trim();
  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = (activeCategory === 'All' || item.category === activeCategory);
    const matchesQuery = !q || item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  itemsFoundText.textContent = `Showing ${filtered.length} of ${MENU_ITEMS.length} items`;

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: #64748b;">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <p>No dishes found matching "<strong>${escapeHtml(searchQuery)}</strong>"</p>
        <button class="btn-secondary" style="margin-top: 0.75rem;" onclick="resetSearch()">Show All Items</button>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map(item => {
    const qty = cart[item.id] || 0;
    const inCartClass = qty > 0 ? 'in-cart' : '';

    return `
      <div class="menu-card ${inCartClass}" data-id="${item.id}" onclick="handleCardClick(event, '${item.id}')">
        <div>
          <div class="card-top">
            <div class="card-icon-category">
              <span class="card-icon">${item.icon}</span>
              <span class="card-category-tag">${item.category}</span>
            </div>
            <div class="card-veg-indicator" title="100% Pure Veg">
              <span class="card-veg-dot"></span>
            </div>
          </div>
          <div class="card-name">${item.name}</div>
          <div class="card-desc">${item.desc}</div>
        </div>

        <div class="card-footer">
          <div class="card-price">₹${item.price}</div>
          <div class="card-action">
            ${qty > 0 ? `
              <div class="card-stepper" onclick="event.stopPropagation()">
                <button type="button" onclick="decrementItem('${item.id}')" title="Decrease">−</button>
                <span class="stepper-count">${qty}</span>
                <button type="button" onclick="incrementItem('${item.id}')" title="Increase">+</button>
              </div>
            ` : `
              <button type="button" class="btn-card-add" onclick="event.stopPropagation(); addItem('${item.id}')">
                + ADD
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 5. CART / BILL CALCULATIONS
function handleCardClick(event, id) {
  // If user clicked anywhere on card, add or increment
  addItem(id);
}

function addItem(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderMenu();
  renderBill();
}

function incrementItem(id) {
  if (cart[id]) {
    cart[id] += 1;
  } else if (customItems[id]) {
    customItems[id].quantity += 1;
  }
  renderMenu();
  renderBill();
}

function decrementItem(id) {
  if (cart[id]) {
    cart[id] -= 1;
    if (cart[id] <= 0) {
      delete cart[id];
    }
  } else if (customItems[id]) {
    customItems[id].quantity -= 1;
    if (customItems[id].quantity <= 0) {
      delete customItems[id];
    }
  }
  renderMenu();
  renderBill();
}

function removeItem(id) {
  if (cart[id]) delete cart[id];
  if (customItems[id]) delete customItems[id];
  renderMenu();
  renderBill();
}

function clearCart() {
  if (Object.keys(cart).length === 0 && Object.keys(customItems).length === 0) return;
  if (confirm("Are you sure you want to clear this entire bill?")) {
    cart = {};
    customItems = {};
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    discountValueInput.value = '0';
    taxRateSelect.value = '0';
    renderMenu();
    renderBill();
  }
}

// 6. RENDER BILL & SUMMARY
function calculateTotals() {
  let totalQty = 0;
  let subtotal = 0;

  // Regular menu items
  for (const id in cart) {
    const qty = cart[id];
    const item = MENU_ITEMS.find(i => i.id === id);
    if (item && qty > 0) {
      totalQty += qty;
      subtotal += item.price * qty;
    }
  }

  // Custom added items
  for (const cid in customItems) {
    const cItem = customItems[cid];
    if (cItem && cItem.quantity > 0) {
      totalQty += cItem.quantity;
      subtotal += cItem.price * cItem.quantity;
    }
  }

  // Discount calculation
  const discountVal = parseFloat(discountValueInput.value) || 0;
  const discountType = discountTypeSelect.value;
  let discountAmount = 0;

  if (discountType === 'percent') {
    discountAmount = (subtotal * Math.min(discountVal, 100)) / 100;
  } else {
    discountAmount = Math.min(discountVal, subtotal);
  }

  const taxableAmount = Math.max(0, subtotal - discountAmount);

  // Tax calculation
  const taxRate = parseFloat(taxRateSelect.value) || 0;
  const taxAmount = Math.round((taxableAmount * taxRate) / 100);

  // Grand Total
  const grandTotal = Math.round(taxableAmount + taxAmount);

  return {
    totalQty,
    subtotal,
    discountAmount: Math.round(discountAmount),
    taxAmount,
    grandTotal
  };
}

function renderBill() {
  const totals = calculateTotals();
  const hasItems = totals.totalQty > 0;

  // Badge updates
  totalItemsBadge.textContent = `${totals.totalQty} Item${totals.totalQty === 1 ? '' : 's'}`;
  summaryTotalQty.textContent = totals.totalQty;
  summarySubtotal.textContent = `₹${totals.subtotal}`;
  summaryDiscount.textContent = totals.discountAmount > 0 ? `- ₹${totals.discountAmount}` : '₹0';
  summaryTax.textContent = `₹${totals.taxAmount}`;
  summaryGrandTotal.textContent = `₹${totals.grandTotal}`;

  // Update status badge
  statusPillDisplay.textContent = paymentStatusSelect.value;
  statusPillDisplay.style.color = paymentStatusSelect.value === 'PAID' ? '#0284c7' : '#ea580c';
  statusPillDisplay.style.background = paymentStatusSelect.value === 'PAID' ? '#eff6ff' : '#fff7ed';
  statusPillDisplay.style.borderColor = paymentStatusSelect.value === 'PAID' ? '#bfdbfe' : '#fed7aa';

  if (!hasItems) {
    emptyCartState.style.display = 'flex';
    // Clear list items except emptyCartState
    const rows = billItemsList.querySelectorAll('.bill-row');
    rows.forEach(r => r.remove());
    return;
  }

  emptyCartState.style.display = 'none';

  // Build rows
  let html = '';

  // Menu items
  for (const id in cart) {
    const qty = cart[id];
    const item = MENU_ITEMS.find(i => i.id === id);
    if (!item || qty <= 0) continue;

    html += `
      <div class="bill-row">
        <div>
          <div class="bill-item-name">${item.name}</div>
          <div class="bill-item-sub">${item.category}</div>
        </div>
        <div class="qty-controls">
          <button type="button" class="qty-btn" onclick="decrementItem('${item.id}')">−</button>
          <span class="qty-val">${qty}</span>
          <button type="button" class="qty-btn" onclick="incrementItem('${item.id}')">+</button>
        </div>
        <div class="bill-item-rate text-right">₹${item.price}</div>
        <div class="bill-item-amount text-right">₹${item.price * qty}</div>
        <button type="button" class="btn-remove-row" onclick="removeItem('${item.id}')" title="Remove">✕</button>
      </div>
    `;
  }

  // Custom items
  for (const cid in customItems) {
    const cItem = customItems[cid];
    if (!cItem || cItem.quantity <= 0) continue;

    html += `
      <div class="bill-row" style="background:#fafafa;">
        <div>
          <div class="bill-item-name">${cItem.name}</div>
          <div class="bill-item-sub">Custom Add-on</div>
        </div>
        <div class="qty-controls">
          <button type="button" class="qty-btn" onclick="decrementItem('${cid}')">−</button>
          <span class="qty-val">${cItem.quantity}</span>
          <button type="button" class="qty-btn" onclick="incrementItem('${cid}')">+</button>
        </div>
        <div class="bill-item-rate text-right">₹${cItem.price}</div>
        <div class="bill-item-amount text-right">₹${cItem.price * cItem.quantity}</div>
        <button type="button" class="btn-remove-row" onclick="removeItem('${cid}')" title="Remove">✕</button>
      </div>
    `;
  }

  // Keep empty state element in DOM, update rows
  const rows = billItemsList.querySelectorAll('.bill-row');
  rows.forEach(r => r.remove());
  billItemsList.insertAdjacentHTML('beforeend', html);
}

// 7. CUSTOM ITEM ADD
function addCustomItem() {
  const nameInput = document.getElementById('customItemName');
  const priceInput = document.getElementById('customItemPrice');
  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (!name || isNaN(price) || price <= 0) {
    alert("Please enter a valid item name and price.");
    return;
  }

  const cid = 'c_' + Date.now();
  customItems[cid] = {
    name,
    price: Math.round(price),
    quantity: 1
  };

  nameInput.value = '';
  priceInput.value = '';
  renderBill();
}

// 8. RECEIPT MODAL GENERATOR (MATCHING IMAGE 2 EXACTLY)
function openReceiptModal() {
  const totals = calculateTotals();
  if (totals.totalQty === 0) {
    alert("Please add items to the bill first!");
    return;
  }

  const customerName = document.getElementById('customerName').value.trim();
  const customerPhone = document.getElementById('customerPhone').value.trim();
  const orderType = document.getElementById('orderType').value;
  const paymentStatus = paymentStatusSelect.value;
  const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value || 'Cash';

  // Populate Meta
  document.getElementById('rInvoice').textContent = `#BNB-${currentInvoiceSeq}`;
  const now = new Date();
  document.getElementById('rDate').textContent = now.toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric'
  }) + ', ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const rCustRow = document.getElementById('rCustomerRow');
  if (customerName || customerPhone) {
    rCustRow.style.display = 'block';
    document.getElementById('rCustomer').textContent = [customerName, customerPhone].filter(Boolean).join(' • ');
  } else {
    rCustRow.style.display = 'none';
  }

  document.getElementById('rType').textContent = orderType;
  document.getElementById('rPaymentMethod').textContent = payMethod;

  // Populate Items - Exactly Image 2 style:
  // 1 x Aloo Tikki Burger           ₹109
  // 1 x Paneer Wrap                 ₹159
  const rItemsList = document.getElementById('rItemsList');
  let itemsHtml = '';

  for (const id in cart) {
    const qty = cart[id];
    const item = MENU_ITEMS.find(i => i.id === id);
    if (!item || qty <= 0) continue;

    itemsHtml += `
      <div class="receipt-item-row">
        <div class="receipt-item-name-wrap">
          <span class="r-qty">${qty} x</span>
          <span class="r-item-name">${item.name}</span>
        </div>
        <div class="receipt-item-amount">₹${item.price * qty}</div>
      </div>
    `;
  }

  for (const cid in customItems) {
    const cItem = customItems[cid];
    if (!cItem || cItem.quantity <= 0) continue;

    itemsHtml += `
      <div class="receipt-item-row">
        <div class="receipt-item-name-wrap">
          <span class="r-qty">${cItem.quantity} x</span>
          <span class="r-item-name">${cItem.name}</span>
        </div>
        <div class="receipt-item-amount">₹${cItem.price * cItem.quantity}</div>
      </div>
    `;
  }

  rItemsList.innerHTML = itemsHtml;

  // Summary lines matching Image 2:
  // 2 items                          ₹268
  // Taxes                              ₹0
  // Total Bill [PAID]                ₹268
  document.getElementById('rItemCount').textContent = `${totals.totalQty} item${totals.totalQty === 1 ? '' : 's'}`;
  document.getElementById('rSubtotal').textContent = `₹${totals.subtotal}`;

  const rDiscountRow = document.getElementById('rDiscountRow');
  if (totals.discountAmount > 0) {
    rDiscountRow.style.display = 'flex';
    document.getElementById('rDiscount').textContent = `-₹${totals.discountAmount}`;
  } else {
    rDiscountRow.style.display = 'none';
  }

  document.getElementById('rTax').textContent = `₹${totals.taxAmount}`;
  document.getElementById('rPaidBadge').textContent = paymentStatus;
  document.getElementById('rPaidBadge').style.borderColor = paymentStatus === 'PAID' ? '#0284c7' : '#ea580c';
  document.getElementById('rPaidBadge').style.color = paymentStatus === 'PAID' ? '#0284c7' : '#ea580c';
  document.getElementById('rGrandTotal').textContent = `₹${totals.grandTotal}`;

  receiptModal.classList.add('active');
}

function closeReceiptModal() {
  receiptModal.classList.remove('active');
}

// 9. COMPLETE & SAVE ORDER
function saveOrder() {
  const totals = calculateTotals();
  if (totals.totalQty === 0) {
    alert("Cannot save an empty bill.");
    return;
  }

  const orderRecord = {
    invoice: `#BNB-${currentInvoiceSeq}`,
    date: new Date().toISOString(),
    customer: document.getElementById('customerName').value.trim() || 'Walk-in',
    phone: document.getElementById('customerPhone').value.trim() || '-',
    type: document.getElementById('orderType').value,
    payMethod: document.querySelector('input[name="payMethod"]:checked')?.value || 'Cash',
    status: paymentStatusSelect.value,
    itemsCount: totals.totalQty,
    subtotal: totals.subtotal,
    discount: totals.discountAmount,
    tax: totals.taxAmount,
    grandTotal: totals.grandTotal,
    cartSnapshot: { ...cart },
    customSnapshot: { ...customItems }
  };

  orderHistory.unshift(orderRecord);
  if (orderHistory.length > 50) orderHistory.pop(); // keep last 50
  localStorage.setItem('bnb_order_history', JSON.stringify(orderHistory));

  currentInvoiceSeq++;
  localStorage.setItem('bnb_invoice_seq', currentInvoiceSeq.toString());
  updateInvoiceDisplay();
  updateHistoryCount();

  alert(`Order #BNB-${currentInvoiceSeq - 1} saved successfully! Total: ₹${totals.grandTotal}`);

  // Clear bill for next customer
  cart = {};
  customItems = {};
  document.getElementById('customerName').value = '';
  document.getElementById('customerPhone').value = '';
  discountValueInput.value = '0';
  renderMenu();
  renderBill();
}

// 10. ORDER HISTORY MODAL
function openHistoryModal() {
  const listEl = document.getElementById('historyList');
  if (orderHistory.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding: 2.5rem; color:#64748b;">
        <div style="font-size:2.5rem; margin-bottom:0.5rem;">📜</div>
        <p>No orders recorded yet today.</p>
      </div>
    `;
  } else {
    listEl.innerHTML = orderHistory.map((ord, idx) => {
      const dt = new Date(ord.date);
      const timeStr = dt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const dateStr = dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
      return `
        <div class="history-card">
          <div>
            <div class="h-info-title">${ord.invoice} • ${ord.customer}</div>
            <div class="h-info-sub">${dateStr} at ${timeStr} • ${ord.type} • ${ord.itemsCount} items</div>
          </div>
          <div class="h-right">
            <div class="h-amount">₹${ord.grandTotal}</div>
            <span class="paid-badge" style="font-size:0.68rem;">${ord.status}</span>
          </div>
        </div>
      `;
    }).join('');
  }
  historyModal.classList.add('active');
}

function closeHistoryModal() {
  historyModal.classList.remove('active');
}

function clearAllHistory() {
  if (confirm("Are you sure you want to clear all saved order records?")) {
    orderHistory = [];
    localStorage.removeItem('bnb_order_history');
    updateHistoryCount();
    openHistoryModal();
  }
}

function updateHistoryCount() {
  historyCountEl.textContent = orderHistory.length;
}

function resetSearch() {
  searchQuery = '';
  searchInput.value = '';
  clearSearchBtn.style.display = 'none';
  activeCategory = 'All';
  renderCategoryTabs();
  renderMenu();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

// 11. EVENT LISTENERS
function setupEventListeners() {
  // Category tabs click
  categoryTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-tab-btn');
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    renderCategoryTabs();
    renderMenu();
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    renderMenu();
  });

  clearSearchBtn.addEventListener('click', () => {
    resetSearch();
  });

  // Custom Item add button
  document.getElementById('addCustomItemBtn').addEventListener('click', addCustomItem);

  // Discount & Tax inputs
  discountValueInput.addEventListener('input', renderBill);
  discountTypeSelect.addEventListener('change', renderBill);
  taxRateSelect.addEventListener('change', renderBill);
  paymentStatusSelect.addEventListener('change', renderBill);

  // Clear bill button
  document.getElementById('resetCartBtn').addEventListener('click', clearCart);

  // Print / Details button
  document.getElementById('printReceiptBtn').addEventListener('click', openReceiptModal);
  document.getElementById('saveOrderBtn').addEventListener('click', saveOrder);

  // Receipt Modal actions
  document.getElementById('closeModalBtn').addEventListener('click', closeReceiptModal);
  document.getElementById('closeModalBottomBtn').addEventListener('click', closeReceiptModal);

  // Order history
  document.getElementById('viewHistoryBtn').addEventListener('click', openHistoryModal);
  document.getElementById('closeHistoryModalBtn').addEventListener('click', closeHistoryModal);
  document.getElementById('closeHistoryBottomBtn').addEventListener('click', closeHistoryModal);
  document.getElementById('clearAllHistoryBtn').addEventListener('click', clearAllHistory);

  // Close modals on clicking overlay background
  receiptModal.addEventListener('click', (e) => {
    if (e.target === receiptModal) closeReceiptModal();
  });
  historyModal.addEventListener('click', (e) => {
    if (e.target === historyModal) closeHistoryModal();
  });

  // Keyboard shortcut: Esc closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeReceiptModal();
      closeHistoryModal();
    }
  });
}

// RUN ON LOAD
document.addEventListener('DOMContentLoaded', init);
