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

function getCart() {
  const data = sessionStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
}

function setCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

function renderProducts() {

  products.forEach(product => {

    const li = document.createElement("li");

    li.textContent = `${product.name} - $${product.price} `;

    const btn = document.createElement("button");
    btn.textContent = "Add to Cart";

    btn.addEventListener("click", () => {

      const cart = getCart();

      cart.push({
        id: product.id,
        name: product.name,
        price: product.price
      });

      setCart(cart);

      renderCart();

    });

    li.appendChild(btn);

    productList.appendChild(li);

  });

}

function renderCart() {

  const cart = getCart();

  cartList.innerHTML = "";

  cart.forEach(item => {

    const li = document.createElement("li");

    li.textContent = `${item.name} - $${item.price}`;

    cartList.appendChild(li);

  });

}

clearBtn.addEventListener("click", () => {

  sessionStorage.removeItem("cart");

  renderCart();

});

renderProducts();
renderCart();