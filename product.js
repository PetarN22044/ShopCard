let products = [
  {
    name: 'Product 1',
    description: '    Lorem ipsum dolor, sit amet consectetur adipisicing',
    image: '../ShopCard/herba Products Img/herba1.png'
  },
  {
    name: 'Product 2',
    description: '    Lorem ipsum dolor, sit amet consectetur adipisicing.',
    image: '../ShopCard/herba Products Img/herba2.jpg'
  },
  {
    name: 'Product 3',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing',
    image: '../ShopCard/herba Products Img/herba6.jpg'
  },
  {
    name: 'Product 4',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing',
    image: '../ShopCard/herba Products Img/herba7.jpg'
  },
  {
    name: 'Product 5',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing',
    image: '../ShopCard/herba Products Img/herba8.jpg'
  },
  {
    name: 'Product 6',
    description: ' Lorem ipsum dolor, sit amet consectetur adipisicing',
    image: '../ShopCard/herba Products Img/herba44.jpg'
  }
];

let productCardsContainer = document.querySelector('.product-cards');
let cart = getCartFromLocalStorage();

products.forEach((product, index) => {
  let cardDiv = document.createElement('div');
  cardDiv.className = 'product-card';
  cardDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${product.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}.</p>
        <a onclick="addToCart(${index})" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  `;
  productCardsContainer.appendChild(cardDiv);
});

function addToCart(productId) {
  if (isUserLoggedIn()) {
    addProductToCart(productId);
  } else {
    alert('have to be loaded.');
  }
}

function isUserLoggedIn() {
  var loggedInUser = localStorage.getItem('loggedInUser');
  return loggedInUser !== null;
}

function addProductToCart(productId) {
  var product = products[productId];
  if (product) {
    if (cart[productId]) {
      cart[productId].quantity++;
    } else {
      cart[productId] = {
        product: product,
        quantity: 1
      };
    }
    saveCartToLocalStorage(cart);
    incrementCartCounter();
  }
}

function incrementCartCounter() {
  var totalQuantity = calculateTotalQuantity();
  cartCounter.textContent = totalQuantity;
}

function calculateTotalQuantity() {
  var totalQuantity = 0;
  for (var productId in cart) {
    totalQuantity += cart[productId].quantity;
  }
  return totalQuantity;
}

// sve za da se zacuvet podatoci vo local

// ovde se zemet neli praviloto bese ako e korisnikot najaven togas da imat opcija da dodavat a seto to go prajme so koristenje na local 
function getCartFromLocalStorage() {
  var cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : {};
}

function saveCartToLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ovde go povikvime brojacov
incrementCartCounter();

// Рa posle ko ke e neli nenajaven da se resetirat
resetCart();

function resetCart() {
  cart = {};
  saveCartToLocalStorage(cart);
  incrementCartCounter();
}

// ovde imame ko ke kliknit na payment da go odnesit na stopanska banka stranicava
function payment(){
  window.open("https://www.stb.com.mk/", "_blank");
  document.activeElement.blur();
}


function collectFromCart() {
  let cart = getCartFromLocalStorage();
  let productCardsContainer = document.querySelector('.product-cards');
  
  if (Object.keys(cart).length === 0) {
    displayEmptyCartMessage();
  } else {
    displayCartProducts();
  }

  function displayEmptyCartMessage() {
    let emptyCartMessage = document.createElement('p');
    emptyCartMessage.className = 'empty-cart-message';
    emptyCartMessage.textContent = 'Your cart is empty.';
    productCardsContainer.appendChild(emptyCartMessage);
  }

  function displayCartProducts() {
    productCardsContainer.innerHTML = ''; // se praznit container pred da se prikazit

    for (let productId in cart) {// gi zemame site i pak prajme kart so bustrapov
let product = cart[productId].product;
  let cardDiv = document.createElement('div');
      cardDiv.className = 'product-card';
      cardDiv.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.name}">
        <div class="product-details">
          <h2 class="product-name">${product.name}</h2>
          <p class="product-description">${product.description}</p>
          <button class="payment-button"onclick="payment()">Payment</button>

        </div>
      `;// samo ovde dodadov button nov so payment()
      productCardsContainer.appendChild(cardDiv);
    }// i apendirame odma 
  }
// ovde se provervit dali e uste vo local ako e togas se parsirat ama od cart 
  function getCartFromLocalStorage() {var cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : {};// ako ne e null daj go i parsiraj go , so eden zbor gi davat produktive od kosnicava
  }

}
