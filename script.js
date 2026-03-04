// script.js
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearBtn = document.getElementById("clear-cart-btn");

const loadCart = () => {
  const data = sessionStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

const saveCart = (cart) => {
  sessionStorage.setItem("cart", JSON.stringify(cart));
};

const renderProducts = () => {
  productList.innerHTML = "";
  products.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - $${p.price} `;

    const btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", () => {
      const cart = loadCart();
      cart.push(p);
      saveCart(cart);
      renderCart();
    });

    li.appendChild(btn);
    productList.appendChild(li);
  });
};

const renderCart = () => {
  const cart = loadCart();
  cartList.innerHTML = "";
  cart.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.name} - $${p.price}`;
    cartList.appendChild(li);
  });
};

clearBtn.addEventListener("click", () => {
  saveCart([]);
  renderCart();
});

renderProducts();
renderCart();
