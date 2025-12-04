// Parent class: Product
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getDetails() {
    return `${this.name} - ₹${this.price}`;
  }
}

// Child class: ElectronicProduct
class ElectronicProduct extends Product {
  constructor(name, price, warranty) {
    super(name, price, "Electronics");
    this.warranty = warranty;
  }

  getDetails() {
    return `${super.getDetails()} | Warranty: ${this.warranty} years`;
  }
}

// Child class: ClothingProduct
class ClothingProduct extends Product {
  constructor(name, price, size) {
    super(name, price, "Clothing");
    this.size = size;
  }

  getDetails() {
    return `${super.getDetails()} | Size: ${this.size}`;
  }
}

// Create objects
const products = [
  new ElectronicProduct("Smartphone X", 24999, 2),
  new ElectronicProduct("Laptop Pro", 78999, 1),
  new ClothingProduct("Cotton T-Shirt", 799, "L"),
  new ClothingProduct("Winter Jacket", 3499, "XL")
];

// Render to UI
const container = document.getElementById("productContainer");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.getDetails()}</p>
    <span class="category">${p.category}</span>
  `;
  container.appendChild(card);
});

// Theme toggle
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});
