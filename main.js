const mail = document.querySelector(".navbar-email");
const mailMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cart = document.querySelector(".navbar-shopping-cart");
const cartOrderDetails = document.querySelector("#shoppingCartContainer");
const productDetail = document.querySelector("#productDetail");
const closeProductDetailsIcon = document.querySelector(".product-detail-close");
const cardGridContainer = document.querySelector(".cards-container");

mail.addEventListener("click", toggleMailMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
cart.addEventListener("click", toggleCartMenu);
closeProductDetailsIcon.addEventListener("click", closeProductDetailAside);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  cartOrderDetails.classList.add("inactive");
}

function toggleMailMenu() {
  mailMenu.classList.toggle("inactive");
  cartOrderDetails.classList.add("inactive");
  productDetail.classList.add("inactive");
}

function toggleCartMenu() {
  cartOrderDetails.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  mailMenu.classList.add("inactive");
  productDetail.classList.add("inactive");
}

function openProductDetailAside() {
  productDetail.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetail.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
  name: "PC",
  price: 420,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
  name: "4K TV",
  price: 1220,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});

function renderProducts(productsArr) {
  for (product of productsArr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.src = product.img;
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    productPrice.innerText = `$${product.price}`;
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productInfoIcon = document.createElement("img");
    productInfoIcon.src = "./icons/bt_add_to_cart.svg";
    productInfoFigure.appendChild(productInfoIcon);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardGridContainer.appendChild(productCard);
  }
}

renderProducts(productList);
