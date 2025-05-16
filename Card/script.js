const products = [
  {
    id: 1,
    name: "کفش کتونی",
    price: 500000,
    image: "../Assets/images/کتونی.JPG",
  },
  {
    id: 2,
    name: "کفش کلاسیک",
    price: 600000,
    image: "../Assets/images/کلاسیک.jpg",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const updateLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addToCart = (productId) => {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateLocalStorage();
  renderCart();
};

const removeFromCart = (productId) => {
  cart = cart.filter((item) => item.id !== productId);
  updateLocalStorage();
  renderCart();
};

const updateQuantity = (productId, quantity) => {
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity = quantity > 0 ? quantity : 0;
    if (cartItem.quantity === 0) removeFromCart(productId);
  }
  updateLocalStorage();
  renderCart();
};

const calcTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

renderCart = () => {
  const cartListElement = document.getElementById("cartList");
  cartListElement.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex flex-column align-items-start mb-3";
    li.innerHTML = `
      <div class="d-flex justify-content-between w-100">
      <strong>${item.name}</strong>
      <span>${item.price.toLocaleString()} تومان</span>
      </div>
      <div class="d-flex justify-content-between w-100 mt-2">
        <div>
        <input type="number" class="form-control form-control-sm me-2" style="width: 60px" value="${item.quantity}" min="1"/>
        <i class="fa-solid fa-trash text-danger me-2" data-id=${item.id} style="cursor:pointer;"></i>
        </div>
      </div>
    `;

    li.querySelector(".fa-trash").addEventListener("click", () => {
      removeFromCart(item.id);
    });

    li.querySelector("input").addEventListener("change", (e) => {
      const quantity = parseInt(e.target.value, 10);
      updateQuantity(item.id, quantity);
    });

    cartListElement.appendChild(li);
  });

  const totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = calcTotal().toLocaleString();
};

const renderProducts = () => {
  const productListElement = document.getElementById("productList");
  productListElement.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
    <div class="card">
    <img src="${product.image}" class="card-img-top" alt="Nothing"/>
    <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.price.toLocaleString()} تومان</p>
    <button class="btn btn-primary btn-sm" data-id=${product.id}">افزودن به سبد خرید</button>
    </div>
    </div>
    `;
    card.querySelector("button").addEventListener("click", () => addToCart(product.id));
    productListElement.appendChild(card);
  });
};

renderProducts();
renderCart();
