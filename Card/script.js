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
  const product = product.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateLocalStorage();
};

renderCart = () => {}

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
    // card.querySelector("button")
    productListElement.appendChild(card);
  });
};

renderProducts();
