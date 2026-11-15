# Bake 'N' Bite - Restaurant Billing & POS Web Application

A lightweight, modern web-based Point of Sale (POS) and real-time Bill Calculator designed for **Bake 'N' Bite** (Shop No. 32, Swarg Ashram Road, Hapur). Built with pure HTML5, CSS3, and modern JavaScript.

---

## ✨ Features

- **Accurate Menu Catalog**: Pre-loaded with all 34 dishes across 13 categories (Pizza, Kulhad Pizza, Burgers, Sandwiches, Momos, Shakes, Fries, Rolls, Noodles, Coffee, etc.) with exact prices from the menu card.
- **Instant Bill Calculation**:
  - Click any dish to add it immediately to the active bill.
  - Live quantity adjustment (`+` / `-`) on both the menu cards and bill table.
  - Subtotal, discounts (flat ₹ or %), and optional GST tax calculations.
- **Receipt Preview & Thermal Printing**:
  - Modal styled after your order details template (`1 x Item Name ... ₹Price`, `Items ... ₹Total`, `Taxes ... ₹0`, `Total Bill [PAID] ... ₹Total`).
  - Print-ready `@media print` layout optimized for 80mm thermal receipt printers as well as standard paper.
- **Custom Add-ons**: Easily add off-menu items or custom charges (extra cheese, sauces, dips, etc.).
- **Order History & Persistence**:
  - Auto-increments invoice numbers (`#BNB-1001`, `#BNB-1002`, ...).
  - Saves completed orders to browser storage (`localStorage`).
- **Responsive & Fast**: Works smoothly on desktops, laptops, tablets, and phones.

---

## 🚀 How to Run

1. Open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari).
2. Or serve it locally using Python / Node:
   ```bash
   python -m http.server 8000
   ```
   and navigate to `http://localhost:8000`.
